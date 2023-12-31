import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoginStatus } from "../reducers/loginStatusReducer";
import { getAccessTokenFromRefreshToken } from "../services/auth";
import { axiosForLibraryAPI } from "../services/axios";
import useCustomToast from "./useCustomToast";

const useAPI = ({ queryFn, getNow, fnParam, toastErr = true }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const loginStatus = useSelector((state) => state.loginStatus);
  const [isFetched, setIsFetched] = useState(false);
  const toast = useCustomToast();
  const dispatch = useDispatch();
  function run(param) {
    setIsFetched(false);
    setLoading(true);
    return queryFn(param)
      .then((res) => {
        setResponse(res);
        return Promise.resolve(res);
      })
      .catch((err) => {
        if (err?.response?.status === 401 && loginStatus.isLogin) {
          const { method, url, data, params } = err.config;
          return getAccessTokenFromRefreshToken()
            .then((res) => {
              return axiosForLibraryAPI
                .request({ method, url, data, params })
                .then((res) => {
                  setResponse(res);
                  return Promise.resolve(res);
                });
            })
            .catch((err2) => {
              dispatch(setLoginStatus({ ...loginStatus, isChecking: true }));
              setResponse(null);
              setError(err);
              if (toastErr) toast.error(err.response.data.message);
              return Promise.reject(err);
            });
        }
        setResponse(null);
        setError(err);
        if (toastErr) toast.error(err.response.data.message);
        return Promise.reject(err);
      })
      .finally(() => {
        setIsFetched(true);
        setLoading(false);
      });
  }
  const runNow = async () => {
    try {
      if (getNow) run(fnParam);
    } catch (err) {}
  };
  useEffect(() => {
    if (getNow) runNow();
  }, []);
  return { response, run, loading, error, isFetched };
};

export default useAPI;
