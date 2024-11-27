import { Navigate } from "react-router-dom";
import { isTokenExpired } from "./isTokenExp"; // Fungsi untuk mengecek apakah token sudah kedaluwarsa
import { Store } from "@/store/store";

interface ProtectedRouteProps {
  children: React.ReactElement;
  roles: "admin" | "user"; // Define roles as union types for clarity
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, roles }) => {
  // const token = localStorage.getItem("token"); // Ambil token
  // const userRole = localStorage.getItem("role");
  const { token, role } = Store.getState();
 
  // Jika tidak ada token atau token sudah kedaluwarsa, arahkan ke halaman login
  if (!token || isTokenExpired(token)) {
    return <Navigate to={role === "admin" ? "/admin/sign-in" : "/admin/sign-in"} replace />;
  }

  // Jika role pengguna tidak sesuai dengan yang dibutuhkan, arahkan ke halaman yang sesuai
  if (role !== roles) {
    return <Navigate to={role === "admin" ? "/admin" : "/"} replace />;
  }

  // Jika semua pengecekan lolos, tampilkan children (komponen yang dilindungi)
  return children;
};

export default ProtectedRoute;
