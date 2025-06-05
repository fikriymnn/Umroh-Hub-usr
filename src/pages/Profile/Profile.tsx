import React, { useState, useEffect } from 'react'
import profileExample from "../../assets/images/profile_placeholder.png"
import Sidebar from '../../components/Sidebar'
import { getMe } from '../../services/authServices';
import { updateUser } from '../../services/userSevices';

function Profile() {
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    email: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getMe();
        console.log(res.data);
        const userData = res.data.data;

        setUser(userData);
        setFormData({
          name: userData.name || '',
          phone_number: userData.phone_number || '',
          email: userData.email || ''
        })
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    }

    fetchUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formData) return;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!user?.id) return;

    try {
      await updateUser(user.id, formData);
      alert('Data berhasil diperbarui!');
      setUser((prev: any) => ({ ...prev, ...formData }));
    } catch (error) {
      console.error(`Error: ${error}`);
      alert('Gagal memperbarui')
    }
  };

  return (
    <div className='w-full h-screen flex space-x-2 bg-gradient-to-b from-[#004492] to-[#00152C]'>
      <div className='w-2/12'>
        <Sidebar />
      </div>
      {user && (
        <div className='w-10/12 flex h-screen bg-white'>
          <div className="w-8/12 h-full p-[39px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <div className="mt-[18px] flex flex-col space-y-1">
              <label htmlFor="Nama" className='capitalize ms-1 font-semibold'>Nama</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className='w-10/12 rounded-[5px] bg-[#EFEFEF] h-[51px] px-[20px] py-[15px]' />
            </div>
            <div className="mt-[18px] flex flex-col space-y-1">
              <label htmlFor="Phone" className='capitalize ms-1 font-semibold'>No Telepon/whatsApp</label>
              <input
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className='w-10/12 rounded-[5px] bg-[#EFEFEF] h-[51px] px-[20px] py-[15px]' />
            </div>
            <div className="mt-[18px] flex flex-col space-y-1">
              <label htmlFor="Email" className='capitalize ms-1 font-semibold'>Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='w-10/12 rounded-[5px] bg-[#EFEFEF] h-[51px] px-[20px] py-[15px]' />
            </div>
            <button
              onClick={handleSave}
              className="rounded-full font-semibold text-white mt-[36px] px-6 py-2 bg-gradient-to-br capitalize from-[#3C9BFF] to-[#10F5EA]">
              simpan
            </button>
          </div>
          <div className="w-4/12 px-[39px] py-[55px] flex flex-col items-center">
            <img src={profileExample} alt="profile picture" className='w-[173px] h-[173px] rounded-full' />
            <div className="flex w-full flex-col space-y-[26px] mt-[37px]">
              <div className="">
                <h1 className='font-medium'>Nama</h1>
                <h1 className='font-light capitalize'>{user.name}</h1>
              </div>
              <div className="">
                <h1 className='font-medium'>No Telepon/whatsApp</h1>
                <h1 className='font-light capitalize'>{user.phone_number}</h1>
              </div>
              <div className="">
                <h1 className='font-medium'>Email</h1>
                <h1 className='font-light capitalize'>{user.email}</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile