import axios from 'axios'
import React, { useState } from 'react'

const RegisterForm = ({
    isAnimated,
    setIsAnimated,
  }: {
    isAnimated: boolean;
    setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
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
            setIsAnimated(!isAnimated);
            alert('Register berhasil');
        } catch (error) {
            console.error(error);
            alert('Register gagal');
        }
    }

  return (
       <div id="Register" className="w-full h-full px-10 py-12 overflow-y-auto ">
       <h2 className="text-[20px] font-medium mt-5 text-[#004492] ml-[80px]">Selamat Datang Di</h2>
       <h1 className="text-[36px] text-[#004492] ml-[80px] font-philosopher">Umroh<span className='font-bold'>Hub</span></h1>
       <p className="text-[15px] font-medium text-[#C0C0C0] mt-4 mb-2 ml-[80px]">Silahkan Isi Data Diri Anda Untuk Daftar</p>

       <form onSubmit={handleRegister} className="flex flex-col space-y-4 items-center">
           <input
               type="text"
               name='name'
               className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md"
               placeholder='Nama Lengkap'
               onChange={handleChange}
               required
           />
             <input
               type="tel"
               name='phone_number'
               className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md"
               placeholder='No Whatsapp'
               onChange={handleChange}
               required
           />
           <input
               type="email"
               name='email'
               className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md"
               placeholder='Email'
               onChange={handleChange}
               required
           />
         
           {/* <textarea
               name="address"
               id=""
               className='bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md'
               placeholder='address'
               onChange={handleChange}
               required
           >

           </textarea> */}
           {/* <input
               type="text"
               name='no_ktp'
               className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md"
               placeholder='id number'
               onChange={handleChange}
               required
           /> */}
           <input
               type="password"
               name='password'
               className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md"
               placeholder='Password'
               onChange={handleChange}
               required
           />
           <button
               type="submit"
               className="bg-gradient-to-r font-bold from-[#004492] to-[#0A6BDB] text-white py-2 rounded-[20px] flex items-center justify-center w-[106px] h-[32px]"
           >
               Daftar
           </button>
       </form>
   </div>
  )
}

export default RegisterForm