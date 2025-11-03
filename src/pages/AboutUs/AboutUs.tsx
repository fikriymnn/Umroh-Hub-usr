import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'

function AboutUs() {
  return (
    <DefaultLayout>
      <div className='w-full min-h-screen background-div-inwhite pt-[200px] flex flex-col items-center bg-white'>
        <div className="w-10/12 h-full mt-[113px] max-sm:mt-[30px]">
          <div className="w-full h-full grid grid-cols-2">
            <div className='w-full h-full flex justify-center items-center'>
              <p className="w-11/12 text-[32px] max-sm:text-[10px] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
            <div className="bg-gray-200 w-full h-full max-sm:h-auto"></div>
            <div className="bg-gray-200 w-full h-full max-sm:h-auto"></div>
            <div className='w-full h-full flex justify-center items-center'>
              <p className="w-11/12 text-[32px] max-sm:text-[10px] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
            <div className='w-full h-full flex justify-center items-center'>
              <p className="w-11/12 text-[32px] max-sm:text-[10px] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
            <div className="bg-gray-200 w-full h-full max-sm:h-auto"></div>
          </div>
          <div className="mt-[121px] max-sm:mt-[50px] w-full flex flex-col items-center h-[200px] max-sm:h-[100px] px-4">
            <p className='text-[20px] max-sm:text-[10px] text-center leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default AboutUs
