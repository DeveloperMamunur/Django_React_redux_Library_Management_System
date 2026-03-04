import { Outlet } from "react-router-dom";
import Footer from "./backend/Footer";
import Navbar from "./backend/Navbar";

export default function DashboardLayout() {
    return (
        <div>
            <Navbar />
            <main className="container mx-auto p-4 min-h-[calc(100vh-160px)]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}