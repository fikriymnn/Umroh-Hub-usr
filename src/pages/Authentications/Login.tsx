import React, { useState, useEffect, use } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

interface User {
    email?: string,
    password?: string
}

function Login() {
    const navigate = useNavigate()
    const [user, setUser] = useState<User>()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const res = await axios.post(
                `https://zshnvs5v-7000.asse.devtunnels.ms/api/auth/login`,
                user,
                { withCredentials: true }
            );

            console.log(res.data);

            // const token = res.data.token

            alert('Login berhasil')
            navigate('/')
        } catch (error) {
            console.error(error);
            alert('Login gagal');
        }
    }

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className="w-11/12 h-10/12 flex bg-[#DAFAFF] rounded-[10px]">
                <form onSubmit={handleLogin} className="w-7/12 flex flex-col items-center justify-center space-y-4">

                    <input
                        type="email"
                        name='email'
                        className="bg-white w-8/12"
                        placeholder='email'
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name='password'
                        className="bg-white w-8/12"
                        placeholder='password'
                        onChange={handleChange}
                        required
                    />

                    <button type='submit' className='rounded-[10px] py-2 px-6 bg-white'>
                        Login
                    </button>
                </form>
                <div className="w-5/12 h-full bg-gradient-to-br rounded-r-[10px] flex justify-self-end from-[#3C97FF] to-primary-blue" />

            </div>
        </div>
    )
}

export default Login