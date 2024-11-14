import create from "zustand";
import { StoreState } from "./acces";  // Import interface StoreState

const useStore = create<StoreState>((set : any) => ({
  token: null,
  setToken: (token: string | null) => set({ token }),
  removeToken: () => set({ token: null }),

  role: null,
  setRole: (role: string | null) => set({ role }),

  email: null,
  setEmail: (email: string | null) => set({ email }),

  data: null,
  setData: (data: string | null) => set({ data }),
  removeData: () => set({ data: null }),
}));

export default useStore;
