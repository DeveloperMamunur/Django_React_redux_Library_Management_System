import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../services/loginApi';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../features/auth/authSlice';

export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [login] = useLoginMutation()
    const dispatch = useDispatch();

    const Navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(formData).unwrap();
            
            dispatch(setCredentials({
                user_id: response.user_id,
                username: response.username,
                access: response.tokens.access,
                refresh: response.tokens.refresh,
            }));

            Navigate("/dashboard");
            setFormData({
                username: '',
                password: ''
            });
        } catch (error) {
            console.error("Login failed:", error);
        }
    }
    return (
        <div className='max-w-lg bg-white mx-auto p-5 rounded shadow-lg mt-10'>
            <div className='mb-5'>
                <h2 className='text-3xl font-bold text-center'>Login</h2>
            </div>
            <div>
                <form onSubmit={HandleSubmit} className='grid gap-4'>
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
                        <button type="submit" className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>Login</button>
                    </div>
                </form>
                <div className='my-5'>
                    You have no an account? <Link to="/register" className='text-blue-500 hover:underline'>Register</Link>
                </div>
            </div>
        </div>
    )
}