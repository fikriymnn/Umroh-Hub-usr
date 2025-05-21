import React, { useState, useEffect, use } from 'react'
import axios from 'axios'

interface switchProps {
    onSwitch: () => void;
}

const Register: React.FC<switchProps> = ({ onSwitch }) => {
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
        phone_number: '',
        address: '',
        no_ktp: '',
        // image_url : '',
        // is_active : true
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const res = await axios.post(`https://zshnvs5v-7000.asse.devtunnels.ms/api/users`, newUser);
            console.log(res.data);
            alert('Register berhasil');
        } catch (error) {
            console.error(error);
            alert('Register gagal');
        }
    }

    return (
        <div className="flex h-full w-full">

            {/* Kiri: Form Register */}
            <div className="w-1/2 bg-white px-10 py-12 overflow-y-auto">
                <h2 className="text-lg font-semibold text-[#004492] mb-1 ml-[80px]">Selamat Datang Di</h2>
                <h1 className="text-2xl font-bold text-[#004492] mb-8 ml-[80px]">UmrohHub</h1>
                <p className="text-sm text-gray-500 mb-2 ml-[80px]">Silahkan Isi Data Diri Anda Untuk Daftar</p>

                <form onSubmit={handleRegister} className="flex flex-col space-y-4 items-center">
                    <input
                        type="text"
                        name='name'
                        className="bg-[#F5F5F5] w-[330px] h-[49] px-4 py-2 rounded-md"
                        placeholder='full name'
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name='email'
                        className="bg-[#F5F5F5] w-[330px] h-[49] px-4 py-2 rounded-md"
                        placeholder='email'
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name='phone_number'
                        className="bg-[#F5F5F5] w-[330px] h-[49] px-4 py-2 rounded-md"
                        placeholder='phone number'
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="address"
                        id=""
                        className='bg-[#F5F5F5] w-[330px] h-[49] px-4 py-2 rounded-md'
                        placeholder='address'
                        onChange={handleChange}
                        required
                    >

                    </textarea>
                    <input
                        type="text"
                        name='no_ktp'
                        className="bg-[#F5F5F5] w-[330px] h-[49] px-4 py-2 rounded-md"
                        placeholder='id number'
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
                        Daftar
                    </button>
                </form>
            </div>

            {/* Kanan: Login Prompt */}
            <div className="w-1/2 bg-primary-blue flex flex-col items-center justify-center text-white relative">
                <h2 className="text-xl font-semibold mb-2">Masuk ke</h2>
                <h1 className="text-3xl font-bold mb-6">UmrohHub</h1>
                <p className="text-sm">Sudah Punya Akun Di UmrohHub?</p>
                <p className="text-sm mb-4">Login Yuk</p>
                <button
                    onClick={onSwitch}
                    className="bg-white text-[#001A4D] font-semibold px-6 py-2 rounded-full"
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default Register