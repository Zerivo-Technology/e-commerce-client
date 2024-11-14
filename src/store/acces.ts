export interface StoreState {
    token: string | null;
    setToken: (token: string | null) => void;
    removeToken: () => void;
  
    role: string | null;
    setRole: (role: string | null) => void;
  
    email: string | null;
    setEmail: (email: string | null) => void;
  
    data: string | null;
    setData: (data: string | null) => void;
    removeData: () => void;
}
