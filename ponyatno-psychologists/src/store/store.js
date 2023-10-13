import crete, { create } from "zustand";

const useTokenStore = create((set) => ({
  token: null,

  // Установить токен
  setToken: (token) => set({ token }),

  // Получить токен
  getToken: () => token,

  // Удалить токен
  clearToken: () => set({ token: null }),
}));

export default useTokenStore;
