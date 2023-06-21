import AsyncStorage from "@react-native-async-storage/async-storage";

const REFRESH_TOKEN_NAME = "_lx.rt";
const ACCESS_TOKEN_NAME = "_lx.at";
const REMEMBER_ME_NAME = "_lx.rm";

const LONG_LIVE_TOKEN_TTL = 3600 * 24 * 30 * 1000;
const SHORT_LIVE_TOKEN_TTL = 3600 * 1000;

export const saveRefreshToken = async (value) => {
  const expiry =
    new Date().getTime() +
    (getRememberMe() ? LONG_LIVE_TOKEN_TTL : SHORT_LIVE_TOKEN_TTL);

  const item = {
    value: value,
    expiry: expiry,
  };
  await AsyncStorage.setItem(REFRESH_TOKEN_NAME, JSON.stringify(item));
};

export const getRefreshToken = async () => {
  const itemStr = await AsyncStorage.getItem(REFRESH_TOKEN_NAME);
  if (!itemStr) return null;
  const item = JSON.parse(itemStr);
  if (new Date().getTime() > item.expiry) {
    clearTokens();
    return null;
  }
  return item.value;
};

export const removeRefreshToken = async () =>
  await AsyncStorage.removeItem(REFRESH_TOKEN_NAME);

export const saveAccessToken = async (token) =>
  token ? await AsyncStorage.setItem(ACCESS_TOKEN_NAME, token) : null;
export const getAccessToken = async () =>
  await AsyncStorage.getItem(ACCESS_TOKEN_NAME);
export const removeAccessToken = async () =>
  await AsyncStorage.removeItem(ACCESS_TOKEN_NAME);
saveAccessToken(null);

export const setRememberMe = async (value) =>
  await AsyncStorage.setItem(REMEMBER_ME_NAME, value);
export const getRememberMe = async () =>
  (await AsyncStorage.getItem(REMEMBER_ME_NAME)) === "true" ? true : false;
export const removeRememberMe = async () =>
  await AsyncStorage.removeItem(REMEMBER_ME_NAME);

export const clearTokens = () => {
  removeRefreshToken();
  removeAccessToken();
};
