import { Outlet } from "react-router-dom";
import Footer from "./base/Footer";
import Navbar from "./base/Navbar";

export default function BaseLayout() {
    return (
        <div>
            <Navbar />
            <main className="container mx-auto p-4 min-h-[calc(100vh-160px)]">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}