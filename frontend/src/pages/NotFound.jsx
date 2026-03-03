import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center h-96">
            <div className="text-center space-y-5">
                <h1 className="text-3xl font-bold text-center">Page Not Found</h1>
                <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4">Go to Home</Link>
            </div>
        </div>
    )
}