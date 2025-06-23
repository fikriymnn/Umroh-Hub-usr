/* eslint-disable @typescript-eslint/no-explicit-any */
import DefaultLayout from "../../layout/DefaultLayout";
import bg from "../../assets/images/makkah-3986709.png"
import CardPackage from '../../components/Card/CardPackage';
import departureCity from "../../assets/icons/Group 28 (1).svg"
import departureType from "../../assets/icons/Group 206.svg";
import departureTime from "../../assets/icons/Group 207.svg";
import usePackages from '../../hooks/packages/usePackages';

function UmrohPackagePage() {
    const {
        packages,
        category,
        location,
        type,
        setCurrentPage,
        totalPages,
        filters,
        setFilters,
        handleChangeFilter
    } = usePackages();

    return (
        <DefaultLayout>
            <div className='w-full pb-20'>
                <div className="w-full h-[445px] relative">
                    <img src={bg} alt="background" className='w-full h-fit' />
                    <div className="w-full h-full z-10 absolute top-0 bg-gradient-to-br from-black/0 to-black/45">
                        <div className="relative w-full h-full flex justify-center">
                            <div className="w-[70%] h-[200px] absolute bottom-0 rounded-[10px] translate-y-1/2
                          bg-gradient-to-bl from-[#004492] to-[#00152C] shadow-[0px_4px_4px] shadow-black/25">
                                <div className="w-full grid grid-cols-2">
                                    <div className="grid grid-cols-2 gap-3 border-e-[2px] w-full h-full mt-[40px] px-10 justify-center ">
                                        <div className="flex flex-col">
                                            <label htmlFor="departure-city" className="text-white text-[12px] ms-4">
                                                Kota Keberangkatan
                                            </label>
                                            <div className="relative">
                                                <img
                                                    src={departureCity}
                                                    alt="City Icon"
                                                    className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                                                />
                                                <select
                                                    id="departure-city"
                                                    name="departure city"
                                                    onChange={(e) => handleChangeFilter('id_location_departure', e.target.value)}
                                                    className="bg-white w-full ps-9 pe-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]"
                                                >
                                                    <option value="">Semua Lokasi</option>
                                                    {location?.map((l) => (
                                                        <option value={l.id}>{l.location_name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="departure city" className='text-white text-[12px] ms-4'>Jenis Keberangkatan</label>
                                            <div className="relative w-full">
                                                <img
                                                    src={departureType}
                                                    alt="City Icon"
                                                    className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                                                />
                                                <select
                                                    onChange={(e) => handleChangeFilter('id_type_departure', e.target.value)}
                                                    className='bg-white w-full ps-9 pe-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure city" id=""
                                                >
                                                    <option value="">Semua Jenis</option>
                                                    {type.map((t) => (
                                                        <option value={t.id}>{t.type_name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex flex-col -translate-y-1/6">
                                            <label htmlFor="departure time" className='text-white text-[12px] ms-4'>Tanggal Keberangkatan</label>
                                            {/* <select className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure time" id="">
                                        <div className="flex flex-col">
                                            <label htmlFor="departure city" className='text-white text-[12px] ms-4'>Jenis Keberangkatan</label>
                                            <select className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure city" id="">
                                                <option value="Cepat">Cepat</option>
                                                <option value="Lambat">Lambat</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col -translate-y-1/6">
                                            <label htmlFor="departure time" className='text-white text-[12px] ms-4'>Waktu Keberangkatan</label>
                                            {/* <select className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure time" id="">
                                                    <option value="Bandung">Bandung</option>
                                                    <option value="Bandung">Bandung</option>
                                                </select> */}
                                            <div className="relative w-full">
                                                <img
                                                    src={departureTime}
                                                    alt="City Icon"
                                                    className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                                                />
                                                <input
                                                    type='date'
                                                    value={filters.date_departure ? filters.date_departure.slice(0, 10) : ""}
                                                    onChange={(e) => handleChangeFilter('date_departure', e.target.value)}
                                                    className='bg-white w-full ps-9 pe-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure time" id=""
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col -translate-y-1/6">
                                            <label htmlFor="departure city" className='text-white text-[12px] ms-4'>Durasi Perjalanan</label>
                                            <div className="relative w-full">
                                                <img
                                                    src={departureTime}
                                                    alt="City Icon"
                                                    className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                                                />
                                                <select
                                                    onChange={(e) => handleChangeFilter('duration', e.target.value)}
                                                    className='bg-white ps-9  w-full pe-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure city" id=""
                                                >
                                                    <option value="">Semua Durasi Perjalanan</option>
                                                    <option value="1">1 Jam</option>
                                                    <option value="2">2 Jam</option>
                                                    <option value="3">3 Jam</option>
                                                    <option value="4">4 Jam</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 w-full h-full items-start mt-[40px] px-10 justify-center ">
                                        <div className="flex flex-col">
                                            <label htmlFor="departure city" className='text-white text-[12px] ms-4'>Kategori Paket Umroh</label>
                                            <select
                                                onChange={(e) => handleChangeFilter('id_category_departure', e.target.value)}
                                                className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure city" id=""
                                            >
                                                <option value="">Semua Kategori</option>
                                                {category.map((c) => (
                                                    <option value={c.id}>{c.category_name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="departure city" className='text-white text-[12px] ms-4'>Estimasi Biaya</label>
                                            <select
                                                onChange={(e) => handleChangeFilter('price', e.target.value)}
                                                className='bg-white px-4 py-1.5 rounded-[20px] text-[12px] text-[#5E5E5E]' name="departure city" id=""
                                            >
                                                <option value="">Semua Harga</option>
                                                <option value="3500000">3.5 Juta</option>
                                                <option value="35000000">35 Juta</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-fit background-div">

                        <div className=" mt-[150px] w-full flex flex-col items-center">
                            <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
                                {packages?.map((item: any, index: number) => (
                                    <CardPackage
                                        key={index}
                                        packages={item}
                                    />
                                ))}
                            </div>
                            <div className='flex justify-center mt-10 space-x-4 text-white'>
                                <button
                                    onClick={() => setCurrentPage(filters.page - 1)}
                                    disabled={filters.page === 1}
                                    className='px-3 py-1'
                                >
                                    &lt;
                                </button>

                                {totalPages > 0 &&
                                    [...Array(totalPages)].map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentPage(index + 1)}
                                            className={`px-3 py-1 rounded ${filters.page === index + 1
                                                ? 'bg-gradient-to-b from-[#109FF5] to-[#0A5D8F] text-white font-bold rounded-2xl'
                                                : ''
                                                }`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))
                                }

                                <button
                                    onClick={() => setCurrentPage(filters.page + 1)}
                                    disabled={filters.page === totalPages}
                                    className='px-3 py-1'
                                >
                                    &gt;
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default UmrohPackagePage