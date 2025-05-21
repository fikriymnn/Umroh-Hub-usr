import React, { useState, useEffect, use } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

interface User {
    email?: string,
    password?: string
}

interface switchProps {
    onSwitch: () => void;
}

const Login: React.FC<switchProps> = ({ onSwitch }) => {
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
        <div className="flex h-full w-full">

            {/* Kiri: Register Prompt */}
            <div className="w-1/2 bg-primary-blue flex flex-col items-center justify-center text-white relative">
                <h2 className="text-xl font-semibold mb-2">Daftar ke</h2>
                <h1 className="text-3xl font-bold mb-6">UmrohHub</h1>
                <p className="text-sm">Belum Punya Akun Di UmrohHub?</p>
                <p className="text-sm mb-4">Login Yuk</p>
                <button
                    onClick={onSwitch}
                    className="bg-white text-[#001A4D] font-semibold px-6 py-2 rounded-full"
                >
                    Register
                </button>
            </div>

            {/* Kanan: From Login */}
            <div className="w-1/2 bg-white px-10 py-12 items-center">
                <h2 className="text-lg font-semibold text-[#004492] mb-1 ml-[80px]">Selamat Datang Di</h2>
                <h1 className="text-2xl font-bold text-[#004492] mb-6 ml-[80px]">UmrohHub</h1>
                <div className='mt-[110px]'>
                    <p className="text-sm text-gray-500 ml-[80px] mb-1">Silahkan Isi Data Diri Anda Untuk Daftar</p>
                    <form onSubmit={handleLogin} className="flex flex-col space-y-4 items-center">
                        <input
                            type="email"
                            name='email'
                            className="bg-[#F5F5F5] w-[330px] h-[49] px-4 py-2 rounded-md"
                            placeholder='email'
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name='password'
                            className="bg-[#F5F5F5] w-[330px] h-[49] px-4 py-2 rounded-md"
                            placeholder='password'
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#004492] to-[#0A6BDB] text-white py-2 rounded-[20px] mt-2 w-[106px] h-[32]"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login