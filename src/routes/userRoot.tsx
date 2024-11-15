import Loading from "@/components/element/Loading";
import FooterUser from "@/components/user/Footer";
import NavbarUser from "@/components/user/Navbar";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const PagesUser = lazy(() => import("@/pages/user"))
const LoginUser = lazy(() => import("@/pages/user/auth/Login"))

const UserRoot = () => {
    return (
        <Router>
            <div className="min-h-screen h-max w-full flex flex-col">
            {/* element Navbar */}
            <NavbarUser />
            {/* element Navbar */}
            
                <Routes>
                    <Route 
                        path="/"
                        element={
                            <Suspense fallback={<Loading />}>
                                <PagesUser />
                            </Suspense>
                        }
                    />
                    <Route 
                        path="/sign-in"
                        element={
                            <Suspense fallback={<Loading />}>
                                <LoginUser />
                            </Suspense>
                        }
                    />
                </Routes>

            {/* Element Footer */}
            <FooterUser />
            </div>
        </Router>
    )
}

export default UserRoot