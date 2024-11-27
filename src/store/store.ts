import { create } from 'zustand';

interface StoreState {
  token: string | null;
  role: string | null;
  email: string | null;
  setToken: (token: string | null) => void;
  removeToken: () => void;
  setRole: (role: string | null) => void;
  setEmail: (email: string | null) => void;
}

const useStore = create<StoreState>((set) => ({
  token: null,
  role: null,
  email: null,
  
  // Fungsi untuk set token
  setToken: (token) => set({ token }),
  
  // Fungsi untuk menghapus token (logout)
  removeToken: () => set({ token: null, role: null, email: null }),

  // Fungsi untuk set role
  setRole: (role) => set({ role }),

  // Fungsi untuk set email
  setEmail: (email) => set({ email }),
}));

export default useStore;
