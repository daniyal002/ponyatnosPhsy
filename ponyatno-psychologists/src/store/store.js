import crete, { create } from "zustand";
import Cookies from "universal-cookie";
import { useGetProfileById } from "../module/ProfilePsychologist/hook/useGetProfileById";

const cookies = new Cookies();

const useTokenStore = create((set) => ({
  token: cookies.get("token"),

  // Установить токен
  setToken: (token) => {
    set({ token });
    cookies.set("token", token);
  },

  // Получить токен

  // Удалить токен
  clearToken: () => {
    set({ token: null });
    cookies.remove("token");
  },
}));

export const useRoleStore = create((set) => ({
  role: "default",

  setRole: (role) => {
    set({ role });
  },

  clearRole: () => {
    set({ role: "default" });
  },
}));

export default useTokenStore;
