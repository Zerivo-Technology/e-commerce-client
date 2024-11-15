import Loading from "@/components/element/Loading";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const PagesAdmin = lazy(() => import("@/pages/admin"))

const AdminRoot = () => {
    return (
        <Router>
            <Routes>
                <Route 
                    path="/"
                    element={
                        <Suspense fallback={<Loading />}>
                            <PagesAdmin />
                        </Suspense>
                    }
                />
            </Routes>
        </Router>
    )
}

export default AdminRoot