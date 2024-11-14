import Loading from "@/components/element/Loading";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const PagesUser = lazy(() => import("@/pages/admin"))

const AdminRoot = () => {
    return (
        <Router>
            <Routes>
                <Route 
                    path="/"
                    element={
                        <Suspense fallback={<Loading />}>
                            <PagesUser />
                        </Suspense>
                    }
                />
            </Routes>
        </Router>
    )
}

export default AdminRoot