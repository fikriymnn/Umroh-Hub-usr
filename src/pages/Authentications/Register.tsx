import React from 'react'

function Register() {
  return (
      <div className='w-full h-screen flex items-center justify-center'>
          <div className="w-11/12 h-10/12 flex bg-[#DAFAFF] rounded-[10px]">
              <div  className="w-7/12 flex flex-col items-center justify-center space-y-4">
                
                    <input type="text" name='fullname' className="bg-white w-8/12" placeholder='full name' />
                    <input type="email" name='email' className="bg-white w-8/12" placeholder='email' />
                    <input type="tel" name='phone number' className="bg-white w-8/12" placeholder='phone number' />
                    <textarea name="address" id="" className='bg-white w-8/12'></textarea>
                    <input type="text" name='id number' className="bg-white w-8/12" placeholder='id number' />
                    <input type="password" name='password' className="bg-white w-8/12" placeholder='password' />
                    <button className='rounded-[10px] py-2 px-6 bg-white'>Submit</button>
                  
              </div>
                    <div className="w-5/12 h-full bg-gradient-to-br rounded-r-[10px] flex justify-self-end from-[#3C97FF] to-primary-blue" />

                </div>
    </div>
  )
}

export default Register