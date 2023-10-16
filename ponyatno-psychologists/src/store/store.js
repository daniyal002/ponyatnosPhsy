import crete, { create } from "zustand";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const useTokenStore = create((set) => ({
  token: cookies.get("token"),

  // Установить токен
  setToken: (token) => {
    set({ token });
    cookies.set("token", token);
  },

  // Получить токен
  getToken: () => token,

  // Удалить токен
  clearToken: () => set({ token: null }),
}));

export default useTokenStore;
