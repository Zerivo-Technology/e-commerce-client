import Loading from "@/components/element/Loading";
import ProtectedRoute from "@/config/protectedRoute";
import LoginAdmin from "@/pages/admin/auth/Login";
import { lazy, Suspense } from "react";
import {  Routes, Route } from "react-router-dom";

const PagesAdmin = lazy(() => import("@/pages/admin"))

const AdminRoot = () => {
    return (
        <Routes>
            <Route 
                path="/*"
                element={
                    <Suspense fallback={<Loading />}>
                        <ProtectedRoute roles="admin">
                            <PagesAdmin />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route 
                path="/sign-in"
                element={
                    <Suspense fallback={<Loading />}>
                        <LoginAdmin />
                    </Suspense>
                }
            />
        </Routes>
       
    )
}

export default AdminRoot