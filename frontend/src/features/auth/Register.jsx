import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className='max-w-lg bg-white mx-auto p-5 rounded shadow-lg mt-10'>
            <div className='mb-5'>
                <h2 className='text-3xl font-bold text-center'>Register</h2>
            </div>
            <div>
                <form className='grid gap-4'>
                    <div className='grid gap-1'>
                        <label>Username</label>
                        <input type="text" className='border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300' />
                    </div>
                    <div className='grid gap-1'>
                        <label>Email</label>
                        <input type="email" className='border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300' />
                    </div>
                    <div className='grid gap-1'>
                        <label>Password</label>
                        <input type="password" className='border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300' />
                    </div>
                    <div>
                        <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>Login</button>
                    </div>
                </form>
                <div className='my-5'>
                    Already have an account? <Link to="/login" className='text-blue-500 hover:underline'>Login</Link>
                </div>
            </div>
        </div>
    )
}