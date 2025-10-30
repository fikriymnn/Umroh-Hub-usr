import React, { useEffect, useState } from 'react'
import Login from '../../components/Login';
import Register from '../../components/Register'
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';

const LoginRegister = () => {
    // const [isLogin, setIsLogin] = useState(true);

    // const toggleForm = () => setIsLogin(!isLogin);
  const [isAnimated, setIsAnimated] = useState(true);
   useEffect(() => {
    if (window.location.hash === '#login') {
      setIsAnimated(false) 
    } else if (window.location.hash === '#register') {
      setIsAnimated(true) 
    }
  }, [])

    return (
    <div className="w-full h-screen flex items-center justify-center bg-[#DAFAFF]">
      <div
        className="relative md:w-9/12 w-10/12 md:h-[573px] h-[600px] bg-white overflow-hidden 
                  rounded-[10px] shadow-lg flex md:flex-row max-sm:flex-col"
      >
        <div
          id="register"
          className={`absolute flex justify-center items-center transition-all duration-500 ease-in-out will-change-transform
            md:top-0 md:left-0 md:h-full md:w-1/2
            max-sm:top-0 max-sm:left-0 max-sm:w-full max-sm:h-[50%]
            ${
              isAnimated
                ? "md:translate-x-full md:opacity-100 md:scale-100 md:z-30 max-sm:translate-y-full max-sm:opacity-100 max-sm:scale-100 max-sm:z-30"
                : "md:translate-x-0 md:opacity-0 md:scale-95 md:z-10 max-sm:translate-y-0 max-sm:opacity-0 max-sm:scale-95 max-sm:z-10"
            }`}
        >
          <div className="w-full h-full flex justify-center items-center">
            <Register isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
          </div>
        </div>

        <div
          id="login"
          className={`absolute flex justify-center items-center transition-all duration-500 ease-in-out will-change-transform
            md:top-0 md:left-0 md:h-full md:w-1/2
            max-sm:top-0 max-sm:left-0 max-sm:w-full max-sm:h-1/2
            ${
              isAnimated
                ? "md:translate-x-full md:opacity-0 md:scale-95 md:z-0 max-sm:translate-y-full max-sm:opacity-0 max-sm:scale-95 max-sm:z-0"
                : "md:translate-x-0 md:opacity-100 md:scale-100 md:z-20 max-sm:translate-y-0 max-sm:opacity-100 max-sm:scale-100 max-sm:z-20"
            }`}
        >
          <div className="w-full h-full flex justify-center items-center">
            <Login isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
          </div>
        </div>

        <div
          id="overlay-container"
          className={`absolute overflow-hidden transition-all duration-700 ease-in-out z-40
            md:top-0 md:left-1/2 md:w-1/2 md:h-full
            max-sm:top-1/2 max-sm:left-0 max-sm:w-full max-sm:h-1/2
            ${isAnimated ? "md:-translate-x-full max-sm:-translate-y-full" : ""}`}
        >
          <div
            id="overlay"
            className={`relative transform transition-all duration-700 ease-in-out
              md:-left-full md:h-full md:w-[200%]
              max-sm:-top-full max-sm:h-[200%] max-sm:w-full
              ${isAnimated ? "md:translate-x-1/2 max-sm:translate-y-1/2" : "md:translate-x-0 max-sm:translate-y-0"}`}
          >

            <div
              id="login-form"
              className={`absolute transition-all duration-700 ease-in-out
                md:w-1/2 md:h-full md:flex md:justify-center md:items-center md:top-0 md:right-0
                max-sm:w-full max-sm:h-1/2 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:bottom-0
                ${
                  isAnimated
                    ? "md:translate-x-[50%] md:z-50 max-sm:translate-y-[50%] max-sm:z-50"
                    : "md:translate-x-0 max-sm:translate-y-0"
                }`}
            >
              <div className="max-sm:scale-95">
                <LoginForm />
              </div>
            </div>

            <div
              id="register-form"
              className={`absolute transition-all duration-700 ease-in-out
                md:w-1/2 md:h-full md:flex md:top-0 md:left-0 
                max-sm:w-full max-sm:h-1/2 max-sm:flex max-sm:justify-center max-sm:items-center
                ${
                  isAnimated
                    ? "md:translate-x-0 md:z-40 max-sm:translate-y-0 max-sm:z-40"
                    : "md:-translate-x-[50%] max-sm:-translate-y-[50%]"
                }`}
            >
              <div className="max-sm:scale-95">
                <RegisterForm isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default LoginRegister
