import React, { useState } from 'react'
import useReview from '../hooks/review/useReview';
// type ReviewProps = {
//     isVisible: boolean;
//     onClose: (isClose: boolean) => void;
// }

function AddReview() {
  const {
    rating, setRating,
    description, setDescription,
    handleSubmitReview,
  } = useReview();
  // const AddReview: React.FC<ReviewProps> = ({ isVisible, onClose }) => {
  //   if (!isVisible) return null;

  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const photoMultiple = Array.from(files);
      const previewPict = photoMultiple.map((file) => URL.createObjectURL(file));
      setPreviewImages(previewPict);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-6xl h-10/12 shadow-lg rounded-[12px] relative">

        <div className="bg-[#004492] rounded-t-[12px] w-full px-6 py-3 text-white text-[32px] font-medium relative flex items-center justify-center">
          <h1 className="text-center w-full">Form Ulasan</h1>
          <button
            // onClick={() => onClose(true)}
            className="absolute right-5 top-1/2 -translate-y-1/2 rounded-[10px] text-white bg-[#D20000] px-3 text-xl font-bold"
          >
            ×
          </button>
        </div>



        <div className="px-10 py-6 space-y-6">
          <div className="text-center text-[18px]">
            <p>Bagikan Pengalaman anda selama</p>
            <p>Melaksanakan umroh Bersama Hasanah Hana</p>
          </div>


          <div className="flex justify-center space-x-3">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              const isActive = starValue <= (rating ?? 0);
              return (
                <svg
                  key={index}
                  onClick={() => setRating(starValue)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={isActive ? '#FFD700' : 'none'}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={isActive ? '#FFD700' : '#777'}
                  className="w-10 h-10 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.202 4.464a.563.563 0 00.424.308l4.926.716a.563.563 0 01.312.96l-3.564 3.476a.563.563 0 00-.162.498l.841 4.903a.563.563 0 01-.818.593l-4.404-2.315a.563.563 0 00-.523 0l-4.404 2.315a.563.563 0 01-.818-.593l.84-4.903a.563.563 0 00-.162-.498L2.616 9.947a.563.563 0 01.312-.96l4.926-.716a.563.563 0 00.424-.308l2.202-4.464z"
                  />
                </svg>
              )
            })}
          </div>


          <div className="grid grid-cols-7 gap-4 bg-[#F4F4F4] p-6">

            <div className="flex flex-col col-span-2 space-y-3">
              <div className="bg-white w-full h-[215px] rounded-[5px] flex items-center justify-start overflow-x-scroll px-4 space-x-4">
                {previewImages.length === 0 ? (
                  <label htmlFor="uploadImages" className="cursor-pointer">
                    <div className="w-[80px] h-[80px] border border-dashed border-[#B7B7B7] rounded-[10px] bg-[#D9D9D9] flex items-center justify-center text-center text-[12px] text-[#4F4F4F]">
                      +<br />Tambah<br />Gambar
                    </div>
                  </label>
                ) : (
                  previewImages.map((src, id) => (
                    <img
                      key={id}
                      src={src}
                      alt={`preview-${id}`}
                      className="w-[100px] h-[100px] object-cover rounded-[5px]"
                    />
                  ))
                )}


                <input
                  type="file"
                  id="uploadImages"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>

              <h1 className="capitalize text-[#989898] text-[15px]">Maks 4 Foto</h1>
            </div>


            <div className="flex flex-col col-span-5 space-y-4">
              <textarea
                rows={8}
                placeholder="Deskripsi"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className=" bg-white placeholder:text-[#515151] placeholder:font-medium  py-3 px-5 w-full"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleSubmitReview}
              className="text-white rounded-full bg-gradient-to-r from-[#003CB4] to-[#3679FE] px-10 font-medium py-1 text-lg"
            >
              Kirim
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};


export default AddReview