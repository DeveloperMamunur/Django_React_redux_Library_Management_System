import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../services/registerApi";

export default function Register() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: ''
    })

    const [register] = useRegisterMutation()
    const Navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData).unwrap();
            Navigate("/login");
            setFormData({
                first_name: '',
                last_name: '',
                username: '',
                email: '',
                password: ''
            })
        } catch (error) {
            console.error("Register failed:", error);
        }
    }

    return (
        <div className='max-w-lg bg-white mx-auto p-5 rounded shadow-lg mt-10'>
            <div className='mb-5'>
                <h2 className='text-3xl font-bold text-center'>Register</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit} className='grid gap-4'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='grid gap-1'>
                            <label>First Name</label>
                            <input 
                                type="text"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                className='border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300' 
                            />
                        </div>
                        <div className='grid gap-1'>
                            <label>Last Name</label>
                            <input 
                                type="text"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                className='border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300' 
                            />
                        </div>
                    </div>
                    <div className='grid gap-1'>
                        <label>Username</label>
                        <input 
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className='border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300' 
                        />
                    </div>
                    <div className='grid gap-1'>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300' 
                        />
                    </div>
                    <div className='grid gap-1'>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className='border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300' 
                        />
                    </div>
                    <div>
                        <button type="submit" className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>Register</button>
                    </div>
                </form>
                <div className='my-5'>
                    Already have an account? <Link to="/login" className='text-blue-500 hover:underline'>Login</Link>
                </div>
            </div>
        </div>
    )
}