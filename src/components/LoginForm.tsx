
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { User } from '../types/User'
import { loginUser } from '../services/authServices'

const defaultUser: User = {
    email: '',
    password: '',
}

function LoginForm() {
    const navigate = useNavigate()
    const [user, setUser] = useState<User>(defaultUser);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleLogin = async () => {
        try {
            const res = await loginUser(user);
            console.log(res);
            localStorage.setItem("token", res.data);

            alert('Login berhasil')
            navigate('/')
        } catch (error) {
            console.error(error);
            alert('Login gagal');
        }
    }
    return (
        <div className="w-full h-full px-10 py-12 items-center">
            <h2 className="text-[20px] font-medium mt-5 text-[#004492] ml-[80px]">Selamat Datang Di</h2>
            <h1 className="text-[36px] text-[#004492] ml-[80px] font-philosopher">Umroh<span className='font-bold'>Hub</span></h1>
            <div className='mt-[76px]'>
                <p className="text-sm text-gray-500 ml-[80px] mb-1">Silahkan Isi Data Diri Anda Untuk Daftar</p>
                <div className="flex flex-col space-y-4 items-center">
                    <input
                        type="email"
                        name='email'
                        className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md"
                        placeholder='email'
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name='password'
                        className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md"
                        placeholder='password'
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="bg-gradient-to-r font-bold from-[#004492] to-[#0A6BDB] text-white py-2 flex items-center justify-center rounded-[20px] mt-2 w-[106px] h-[32px]"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm