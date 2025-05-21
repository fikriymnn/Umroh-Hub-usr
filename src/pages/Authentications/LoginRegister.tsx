import React, { useState } from 'react'
import Login from '../../components/Login';
import Register from '../../components/Register'

const LoginRegister = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => setIsLogin(!isLogin);

    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#DAFAFF]">
            <div className="relative w-[1127px] h-[573px] overflow-hidden rounded-[10px] shadow-lg">
                <div
                    className={`
                        absolute top-0 left-0 flex w-[200%] h-full transition-transform duration-700 ease-in-out 
                        ${isLogin ? 'translate-x-0' : '-translate-x-1/2'}`}
                >
                    {/* Register section */}
                    <div className="w-1/2 h-full">
                        <Register onSwitch={toggleForm} />
                    </div>

                    {/* Login section */}
                    <div className="w-1/2 h-full">
                        <Login onSwitch={toggleForm} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginRegister
