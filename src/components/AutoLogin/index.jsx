import { setLoginStatus } from "../../reducers/loginStatusReducer";
import { storeUser } from "../../reducers/userReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccessTokenFromRefreshToken,
  getCurrentUser,
  validateToken,
} from "../../services/auth";
import {
  clearTokens,
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
} from "../../services/localStorage";
import { axiosForLibraryAPI } from "../../services/axios";

const AutoLogin = () => {
  const loginStatus = useSelector((state) => state.loginStatus);
  const dispatch = useDispatch();
  const login = async () => {
    let { isChecking, isLogin } = loginStatus;
    if (!isChecking) return;
    isChecking = false;
    console.log("auto login");
    console.log(await getAccessToken(), await getRefreshToken());
    if (validateToken(await getRefreshToken())) {
      if (!validateToken(await getAccessToken())) {
        console.log("get new access_token");
        await getAccessTokenFromRefreshToken()
          .then((res) => {
            isLogin = true;
            getCurrentUser().then((res) => dispatch(storeUser(res.data.data)));
          })
          .catch(async (err) => {
            isLogin = false;
            await clearTokens();
          })
          .finally(() => dispatch(setLoginStatus({ isLogin, isChecking })));
        return;
      }
      console.log("use old access_token");
      axiosForLibraryAPI.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${await getAccessToken()}`;
      getCurrentUser()
        .then((res) => {
          isLogin = true;
          dispatch(storeUser(res.data.data));
        })
        .catch(async (err) => {
          isLogin = false;
          await removeAccessToken();
          login();
          return;
        })
        .finally(() => dispatch(setLoginStatus({ isLogin, isChecking })));
      return;
    }
    clearTokens();
    dispatch(setLoginStatus({ isLogin, isChecking }));
  };
  useEffect(() => {
    login();
    console.log(loginStatus);
  }, [loginStatus]);
};

export default AutoLogin;
