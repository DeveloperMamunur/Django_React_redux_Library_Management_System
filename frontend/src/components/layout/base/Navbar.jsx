import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="container mx-auto p-4 flex items-center justify-between">
            <div className="text-3xl font-bold">
                <Link to="/">Library</Link>
            </div>
            <div>
                <ul className="flex items-center gap-4 text-xl font-semibold">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}