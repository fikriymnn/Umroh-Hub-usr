import React, { useState, useEffect, use } from 'react'
import axios from 'axios'

function Register() {
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
    <div className='w-full h-screen flex items-center justify-center'>
      <div className="w-11/12 h-10/12 flex bg-[#DAFAFF] rounded-[10px]">
        <form onSubmit={handleRegister} className="w-7/12 flex flex-col items-center justify-center space-y-4">

          <input
            type="text"
            name='name'
            className="bg-white w-8/12"
            placeholder='full name'
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name='email'
            className="bg-white w-8/12"
            placeholder='email'
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name='phone_number'
            className="bg-white w-8/12"
            placeholder='phone number'
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            id=""
            className='bg-white w-8/12'
            onChange={handleChange}
            required
          >

          </textarea>
          <input
            type="text"
            name='no_ktp'
            className="bg-white w-8/12"
            placeholder='id number'
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
            Register
          </button>
        </form>
        <div className="w-5/12 h-full bg-gradient-to-br rounded-r-[10px] flex justify-self-end from-[#3C97FF] to-primary-blue" />

      </div>
    </div>
  )
}

export default Register