import { LOCAL_STORAGE_KEY } from "../Constants/constants";

export const getAlreadySavedCoins = () =>
  localStorage?.getItem(LOCAL_STORAGE_KEY)?.split(",");
