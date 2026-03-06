import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../features/auth/authSlice";

export default function Navbar() {
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        Navigate("/login");
    }
    return (
        <div className="container mx-auto p-4 flex items-center justify-between">
            <div className="">
                <Link to="/" className="text-3xl font-bold">Library</Link>
            </div>
            <div>
                <ul className="flex items-center gap-4 text-xl font-semibold">
                    <li>
                        <Link 
                            to="/dashboard"
                            className="text-gray-500 hover:text-gray-700"
                            >Dashboard</Link>
                    </li>
                    <li>
                        <Link 
                            to="/branch"
                            className="text-gray-500 hover:text-gray-700"
                            >Branch</Link>
                    </li>
                    <li>
                        <Link 
                            to="/author"
                            className="text-gray-500 hover:text-gray-700"
                            >Author</Link>
                    </li>
                    <li>
                        <button 
                            className="text-blue-500 hover:text-blue-700" 
                            onClick={handleLogout}
                        >Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}