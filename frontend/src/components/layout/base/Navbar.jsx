import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
    const access = useSelector((state) => state.auth.access);
    return (
        <div className="container mx-auto p-4 flex items-center justify-between">
            <div className="text-3xl font-bold">
                <Link to="/">Library</Link>
            </div>
            <div>
                <ul className="flex items-center gap-4 text-xl font-semibold">
                    <li>
                        <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
                    </li>
                    <li>
                        {!access ? 
                            <Link to="/login" className="text-gray-500 hover:text-gray-700">Login</Link> : 
                            <Link to="/dashboard" className="text-gray-500 hover:text-gray-700">Dashboard</Link>
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}