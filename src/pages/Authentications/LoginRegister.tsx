import React, { useState } from 'react'
import Login from '../../components/Login';
import Register from '../../components/Register'
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';

const LoginRegister = () => {
    // const [isLogin, setIsLogin] = useState(true);

    // const toggleForm = () => setIsLogin(!isLogin);
    const [isAnimated, setIsAnimated] = useState(true);
    return (
       <div className="w-full h-screen flex items-center justify-center bg-[#DAFAFF]">
  <div className="relative w-9/12 bg-white h-[573px] overflow-hidden rounded-[10px] shadow-lg">

   {/* regsi teks */}
    <div
      id="register"
      className={`absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-500 ease-in-out will-change-transform ${
        isAnimated
          ? "translate-x-full opacity-100 scale-100 z-30"
          : "translate-x-0 opacity-0 scale-95 z-10"
      }`}
    >
      <div className="w-full h-full flex justify-center items-center">
        <Register isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
      </div>
    </div>

   {/* login teks */}
    <div
    id="login"
    className={`absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-500 ease-in-out will-change-transform
    ${isAnimated ? "translate-x-full opacity-0 scale-95 z-0" : "translate-x-0 opacity-100 scale-100 z-20"}`}
    >
    <div className="w-full h-full flex justify-center items-center">
        <Login isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
    </div>
    </div>


    <div
      id="overlay-container"
      className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-700 ease-in-out z-40 ${
        isAnimated ? "-translate-x-full" : ""
      }`}
    >
      <div
        id="overlay"
        className={`relative -left-full h-full w-[200%] transform transition-all duration-700 ease-in-out ${
          isAnimated ? "translate-x-1/2" : "translate-x-0"
        }`}
      >
     {/* login formulir */}
        <div
          id="login-form"
          className={`absolute w-1/2 h-full flex justify-center ms-[135px] items-center top-0 right-0 transition-all duration-700 ease-in-out ${
            isAnimated ? "translate-x-[50%] z-50" : "translate-x-0"
          }`}
        >
          <LoginForm />
        </div>

       {/* regis form */}
        <div
          id="register-form"
          className={`absolute w-1/2 h-full flex top-0 left-0 transition-all duration-700 ease-in-out ${
            isAnimated ? "translate-x-0 z-40" : "-translate-x-[50%]"
          }`}
        >
          <RegisterForm
            isAnimated={isAnimated}
            setIsAnimated={setIsAnimated}
          />
        </div>
      </div>
    </div>

  </div>
</div>

    )
}

export default LoginRegister
