import { create } from "zustand";

interface UserData {
  name: string | null;
  email: string | null;
  address: string | null;
  phone: string | null;
  role: string | null;
}

export interface StoreState {
  token: string | null;
  setToken: (token: string | null) => void;
  removeToken: () => void;

  role: string | null;
  setRole: (role: string | null) => void;

  id: string | null;
  setId: (id: string | null) => void;

  data: UserData | null; 
  setData: (data: UserData | null) => void;
  removeData: () => void;
}

const Store = create<StoreState>((set) => ({
  token: localStorage.getItem("token"),
  setToken: (token) => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
    set({ token });
  },
  removeToken: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },

  role:  localStorage.getItem("role"),
  setRole: (role) => {
    if (role) {
      localStorage.setItem("role", role);
    } else {
      localStorage.removeItem("role");
    }
    set({ role });
  },

  id: sessionStorage.getItem("id"),
  setId: (id) => {
    if (id) {
      sessionStorage.setItem("id", id);
    } else {
      sessionStorage.removeItem("id");
    }
    set({ id });
  },

  data: sessionStorage.getItem("data")
    ? JSON.parse(sessionStorage.getItem("data") as string)
    : null, // Periksa null dengan aman
  setData: (data) => {
    if (data) {
      sessionStorage.setItem("data", JSON.stringify(data));
    } else {
      sessionStorage.removeItem("data");
    }
    set({ data });
  },
  removeData: () => {
    sessionStorage.removeItem("data");
    set({ data: null });
  },
}));

export { Store };