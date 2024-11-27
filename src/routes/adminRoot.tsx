import Loading from "@/components/element/Loading";
import LoginAdmin from "@/pages/admin/auth/Login";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const PagesAdmin = lazy(() => import("@/pages/admin"))

const AdminRoot = () => {
    return (
        <Router>
            <Routes>
                <Route 
                    path="/admin"
                    element={
                        <Suspense fallback={<Loading />}>
                            <PagesAdmin />
                        </Suspense>
                    }
                />
                <Route 
                    path="/admin/sign-in"
                    element={
                        <Suspense fallback={<Loading />}>
                            <LoginAdmin />
                        </Suspense>
                    }
                />
            </Routes>
        </Router>
    )
}

export default AdminRoot