import { Alert, View, useToast } from "native-base";
import React from "react";

const useCustomToast = () => {
  const toast = useToast();
  const success = (message) => {
    toast.show({
      placement: "top",
      render: () => {
        return (
          <Alert
            alignItems="center"
            flexDirection={"row"}
            gap="8px"
            w="100%"
            status="success"
          >
            <Alert.Icon />
            {message}
          </Alert>
        );
      },
    });
  };
  const error = (message) => {
    toast.show({
      placement: "top",
      render: () => {
        return (
          <Alert flexDirection={"row"} gap="8px" w="100%" status="error">
            <Alert.Icon />
            {message}
          </Alert>
        );
      },
    });
  };
  return { error, success };
};

export default useCustomToast;
