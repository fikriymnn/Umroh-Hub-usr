/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import arrowIcons from "../../../src/assets/icons/Vector 664.svg"
import profileIcon from "../../../src/assets/icons/iconamoon_profile-circle-fill.svg"
import payTypeIcon from '../../assets/icons/Vector.svg'
function PaymentData() {
    const [jamaahList, setJamaahList] = useState([
        {
            nama: '',
            gender: '',
            telepon: '',
            email: '',
            ktp: '',
            passport: '',
            kk: ''
        }
    ]);
    const [fileName, setFileName] = useState("Belum ada file");

    const handleChangeFile = (e: any) => {
        setFileName(e.target.files[0]?.name || "Belum ada file");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setJamaahList({ ...jamaahList, [e.target.name]: e.target.value })
    };

    const handleDataJamaah = () => {
        setJamaahList([
            ...jamaahList,
            {
                nama: '',
                gender: '',
                telepon: '',
                email: '',
                ktp: '',
                passport: '',
                kk: ''
            }
        ]);
    };

    const handleRemoveJamaah = (index: number) => {
        if (jamaahList.length === 1) return;
        const updatedList = [...jamaahList];
        updatedList.splice(index, 1);
        setJamaahList(updatedList);
    };

    return (
        <DefaultLayout>
            <div className='w-full min-h-screen pt-[200px] flex flex-col items-center space-y-[34px] background-div'>
                <div className="w-4/12 flex items-center space-x-3">
                    <div className="bg-[#5C9FED61] border-[1px] border-white rounded-full w-[37px] h-[37px]
                    flex items-center justify-center font-semibold text-white">1</div>
                    <h1 className='text-white font-semibold'>Data Pesanan</h1>
                    <img src={arrowIcons} alt="arrow" className='w-[60px] h-2' />
                    <div className="bg-[#FFFFFF61] border-[1px] border-white rounded-full w-[27px] h-[27px]
                    flex items-center justify-center font-semibold text-white">1</div>
                    <h1 className='text-white font-semibold'>Data Pesanan</h1>
                </div>
                <div className="w-10/12 flex mt-[px] justify-self-center space-x-3">
                    <div className=" w-5/12 flex flex-col space-y-[21px] ">
                        <div className="bg-white flex w-full h-[101px] space-x-4 px-7 py-5 rounded-[5px]">
                            <img src={profileIcon} alt="profile" className='w-[38px] h-[38px]' />
                            <div className="flex flex-col">
                                <h1 className='text-[20px] font-bold'>Nama Pemesan</h1>
                                <h1 className='text-[20px] font-medium'>Rudi Kustandi</h1>
                            </div>
                        </div>
                        <div className="bg-white px-7 py-5 w-full h-[269px] rounded-[5px]">
                            <div className="flex space-x-4">

                                <img src={payTypeIcon} alt="payment icon" className='w-[18px] h-[14px]' />
                                <h1 className="font-bold text-[15px] -translate-y-1">
                                    Tipe Pembayaran
                                </h1>
                            </div>
                            <div className="bg-[#000000DE] rounded-[10px] h-[40px] ms-5 mt-6 flex items-center justify-center w-11/12">
                                <h1 className='text-[15px] text-[#10F5EA] font-medium'>Uang Muka Sebesar Rp 6.000.000</h1>
                            </div>
                            <table className="w-11/12 ms-5 border border-separate rounded-[10px] mt-[15px] border-gray-300">
                                <tr className='text-center text-[10px] font-semibold border-b-1 border rounded-t-[10px]'>
                                    <th className='text-center p-2 text-[10px] font-medium'>Tahap</th>
                                    <th className='text-center p-2 text-[10px] font-medium'>Tanggal Pembayaran</th>
                                    <th className='text-center p-2 text-[10px] font-medium'>Jumlah</th>
                                </tr>
                                <tr>
                                    <td className='text-center p-2 text-[10px] font-medium'>Uang Muka</td>
                                    <td className='text-center p-2 text-[10px] font-medium'>16 September 2002</td>
                                    <td className='text-center p-2 text-[10px] font-medium'>Rp. 2.000.000</td>
                                </tr>
                                <tr>
                                    <td className='text-center p-2 text-[10px] font-medium'>Tahap ke-3</td>
                                    <td className='text-center p-2 text-[10px] font-medium'>16 September 2002</td>
                                    <td className='text-center p-2 text-[10px] font-medium'>Rp. 2.000.000</td>
                                </tr>
                            </table>
                        </div>
                        <div className="bg-gradient-to-r from-[#10F5EA] to-[#0A6BDB] w-full
                         h-[58px] rounded-full text-[30px] font-bold text-white flex items-center justify-center">
                            Lanjut Pembayaran
                        </div>
                    </div>
                    <div className="bg-white rounded-[5px] w-7/12 py-6 px-10">
                        {jamaahList.map((jamaah, index) => (
                            <div key={index} className='mb-4 border-b'>
                                <div className="flex space-x-3 w-full items-center">
                                    <img src={profileIcon} alt="profile" className='w-[30px] h-[30px]' />
                                    <h1 className='text-[15px] font-bold'>Jamaah ke - {index + 1}</h1>
                                    <button
                                        onClick={() => handleRemoveJamaah(index)}
                                        className='font-bold text-red-500'
                                    >
                                        -
                                    </button>
                                </div>
                                <div className="w-full flex space-x-[15px] mt-[20px]">
                                    <div className="flex flex-col space-y-[13px]">
                                        <label htmlFor="Gender" className='font-semibold text-[15px]'>Gender</label>
                                        <select
                                            name="Gender"
                                            className='text-[#959595] border-[1px] rounded-[10px] border-[#959595] px-2 py-[9px] text-[13px] font-semibold'
                                            value={jamaah.gender}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled >Pilih Gender</option>
                                            <option value="Pria">Pria</option>
                                            <option value="Wanita">Wanita</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col space-y-[13px]">
                                        <label htmlFor="Fullname" className='font-semibold text-[15px]'>Nama Lengkap</label>
                                        <input
                                            type="text"
                                            name='Fullname'
                                            placeholder="Ketik Nama Lengkap..."
                                            className='text-[#959595] border-[1px] w-[400px] rounded-[10px] border-[#959595] p-2 text-[13px] font-semibold'
                                            value={jamaah.nama}
                                            onChange={handleChange}
                                        />
                                        <h1 className='text-[11px] font-semibold text-[#3C97FF] text-center'>(Sesuai dengan KTP/ Paspor tanpa gelar)</h1>
                                    </div>
                                </div>
                                <div className="w-full flex space-x-[15px] mt-[18px]">
                                    <div className="flex flex-col space-y-[13px]">
                                        <label htmlFor="Phone" className='font-semibold text-[15px]'>Nomor Telepon</label>
                                        <input
                                            type="text"
                                            name='Phone'
                                            placeholder="Ketik Nomor Telepon..." className='text-[#959595] border-[1px] w-[203px] rounded-[10px] border-[#959595] p-2 text-[13px] font-semibold'
                                            value={jamaah.telepon}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-[13px]">
                                        <label htmlFor="Email" className='font-semibold text-[15px]'>Email</label>
                                        <input
                                            type="text"
                                            name='Email'
                                            placeholder="Ketik Email..." className='text-[#959595] border-[1px] w-[350px] rounded-[10px] border-[#959595] p-2 text-[13px] font-semibold'
                                            value={jamaah.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="w-full flex space-x-[15px] mt-[18px]">
                                    <div className="flex flex-col space-y-[13px]">
                                        <label className="block text-lg font-semibold mb-2">Lampiran Foto KTP</label>
                                        <div className="flex space-x-2 border-[1px] border-[#959595] rounded-[10px] p-2 w-[300px]">

                                            <div className="relative">
                                                <input
                                                    id="fileUpload"
                                                    type="file"
                                                    value={jamaah.ktp}
                                                    onChange={handleChangeFile}
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor="fileUpload"
                                                    className="inline-block whitespace-nowrap bg-[#D9D9D9] text-sm font-semibold py-2 px-4 rounded-md hover:bg-gray-300 cursor-pointer"
                                                >
                                                    Pilih File
                                                </label>
                                            </div>

                                            <p className="text-sm w-[80%] mt-2 text-gray-600 overflow-hidden">{fileName}</p>
                                        </div>

                                    </div>
                                    <div className="flex flex-col space-y-[13px]">
                                        <label className="block text-lg font-semibold mb-2">Lampiran Foto Passport</label>
                                        <div className="flex space-x-2 border-[1px] border-[#959595] rounded-[10px] p-2 w-[300px]">

                                            <div className="relative">
                                                <input
                                                    id="fileUpload"
                                                    type="file"
                                                    value={jamaah.passport}
                                                    onChange={handleChangeFile}
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor="fileUpload"
                                                    className="inline-block whitespace-nowrap bg-[#D9D9D9] text-sm font-semibold py-2 px-4 rounded-md hover:bg-gray-300 cursor-pointer"
                                                >
                                                    Pilih File
                                                </label>
                                            </div>

                                            <p className="text-sm w-[80%] mt-2 text-gray-600 overflow-hidden">{fileName}</p>
                                        </div>

                                    </div>

                                </div>
                                <div className="flex flex-col mt-[20px] space-y-[13px] mb-6">
                                    <label className="block text-lg font-semibold mb-2">Lampiran Foto KKs</label>
                                    <div className="flex space-x-2 border-[1px] border-[#959595] rounded-[10px] p-2 w-[300px]">

                                        <div className="relative">
                                            <input
                                                id="fileUpload"
                                                type="file"
                                                value={jamaah.kk}
                                                onChange={handleChangeFile}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            />
                                            <label
                                                htmlFor="fileUpload"
                                                className="inline-block whitespace-nowrap bg-[#D9D9D9] text-sm font-semibold py-2 px-4 rounded-md hover:bg-gray-300 cursor-pointer"
                                            >
                                                Pilih File
                                            </label>
                                        </div>

                                        <p className="text-sm w-[80%] mt-2 text-gray-600 overflow-hidden">{fileName}</p>
                                    </div>

                                </div>
                            </div>
                        ))}
                        <button
                            onClick={handleDataJamaah}
                            className="flex items-center w-[243px] h-[45px] gap-2 border border-blue-500 text-blue-600 py-2 rounded-full hover:bg-blue-50 transition"
                        >
                            <div className="w-[39px] h-[39px] rounded-full border border-blue-500 flex items-center justify-center ml-0.5">
                                <span className="text-blue-500 text-[39px] font-bold">+</span>
                            </div>
                            <span className="font-medium ml-4">Tambah Jamaah</span>
                        </button>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default PaymentData