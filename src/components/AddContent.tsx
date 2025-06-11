import React from 'react'
import AddImageIcon from "../assets/icons/Img_load-box.svg"

type ContentProps = {
    isVisible: boolean;
    onClose: (isClose: boolean) => void;
}
const AddContent: React.FC<ContentProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-8/12 h-8/12 shadow-lg p-[60px] relative">
        <button
          onClick={() => onClose(true)}
          className="absolute top-0 right-0 -translate-y-3 translate-x-3 rounded-[10px] text-white bg-[#004492] px-3 text-xl font-bold"
        >
          ×
        </button>
              <div className="w-full h-full grid grid-cols-7 gap-4">
                  <div className="flex flex-col col-span-2 space-y-3">             
                    <div className="bg-[#F2F2F2]  w-full p-5 h-[200px] rounded-[5px]">
                            <div className="w-full h-full items-center justify-center flex flex-col border-2 border-dashed border-[#004492]">
                                    <img src={AddImageIcon} alt="image icon" className='w-[40px] h-[40px]' />
                                    <h1 className='text-[#989898]  text-center text-[24px]'>Upload 
                                        Gambar Disini</h1>
                          </div>
                    </div>
                          <h1 className='capitalize text-[#989898] text-[15px]'>Maks 4 Foto</h1>
                  </div>
                  <div className="flex flex-col col-span-5 space-y-4">
                      
                    <textarea rows={13} placeholder="Deskripsi" className="placeholder:text-[32px] placeholder:text-[#B7B7B7] py-3 px-5
                    rounded-[5px] col-span-5 w-full  h-fit shadow-[0px_4px_21.3px] shadow-black/25">
                        
                      </textarea>
                      <div className="relative w-full">
                          
                      <button className='text-white absolute right-0 rounded-[5px] w-fit bg-[#004492] px-3 py-1'>Posting</button>
                      </div>
                  </div>
        </div>
      </div>
    </div>
  );
};


export default AddContent