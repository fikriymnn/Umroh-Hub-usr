import axios from 'axios'
import React, { useState } from 'react'
import { register } from '../services/authServices';

const RegisterForm = ({
    isAnimated,
    setIsAnimated,
}: {
    isAnimated: boolean;
    setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [ktp, setKtp] = useState('');

    async function Register() {
        try {
            const res = await register({
                name: name,
                email: email,
                password: password,
                phone_number: phone,
                address: address,
                no_ktp: ktp
            });

            console.log(res);
            setIsAnimated(!isAnimated);
            alert('Register berhasil');
            setName('');
            setEmail('');
            setPassword('');
            setPhone('');
            setAddress('');
            setKtp('');
        } catch (error) {
            console.error(`Error: ${error}`);
            alert('Register gagal');
        }
    }

    return (
        <div id="Register" className="w-full h-full px-10 py-12 overflow-y-auto ">
            <h2 className="text-[20px] font-medium mt-5 text-[#004492] ml-[80px]">Selamat Datang Di</h2>
            <h1 className="text-[36px] text-[#004492] ml-[80px] font-philosopher">Umroh<span className='font-bold'>Hub</span></h1>
            <p className="text-[15px] font-medium text-[#C0C0C0] mt-4 mb-2 ml-[80px]">Silahkan Isi Data Diri Anda Untuk Daftar</p>

            <div className="flex flex-col space-y-4 items-center">
                <input
                    type="text"
                    name='name'
                    value={name}
                    className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md"
                    placeholder='Nama Lengkap'
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    name='phone_number'
                    value={phone}
                    className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md"
                    placeholder='No Whatsapp'
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <input
                    type="email"
                    name='email'
                    value={email}
                    className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md"
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                {/* <textarea
               name="address"
               id=""
               value={address}
               className='bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md'
               placeholder='address'
               onChange={(e) => setAddress(e.target.value)}
               required
           >

           </textarea> */}
                {/* <input
               type="text"
               name='no_ktp'
               value={ktp}
               className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md"
               placeholder='id number'
               onChange={(e) => setName(e.target.value)}
               required
           /> */}
                <input
                    type="password"
                    name='password'
                    value={password}
                    className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md"
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="button"
                    onClick={Register}
                    className="bg-gradient-to-r font-bold from-[#004492] to-[#0A6BDB] text-white py-2 rounded-[20px] flex items-center justify-center w-[106px] h-[32px]"
                >
                    Daftar
                </button>
            </div>
        </div>
    )
}

export default RegisterForm