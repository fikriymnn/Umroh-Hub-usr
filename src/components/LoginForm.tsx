import useLogin from '../hooks/auth/useLogin';

function LoginForm() {
    const {
        email, setEmail,
        password, setPassword,
        handleLogin
    } = useLogin();

    return (
       <div className="w-full h-full px-10 py-12 items-center">
  <h2 className="text-[20px] font-medium mt-5 text-[#004492]  max-sm:text-[14px]">
    Selamat Datang Di
  </h2>

  <h1 className="text-[36px] text-[#004492]  font-philosopher max-sm:text-[22px]">
    Umroh<span className="font-bold">Hub</span>
  </h1>

  <div className="mt-[76px] max-sm:mt-5">
    <p className="text-sm text-gray-500  mb-1 max-sm:text-[10px]">
      Silahkan Isi Data Diri Anda Untuk Daftar
    </p>

    <div className="flex flex-col space-y-4 items-center">
      <input
        type="email"
        name="email"
        value={email}
        className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md max-sm:w-[250px] max-sm:h-[40px] max-sm:text-[10px]"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        name="password"
        value={password}
        className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md max-sm:w-[250px] max-sm:h-[40px] max-sm:text-[10px]"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button
        type="button"
        onClick={handleLogin}
        className="bg-gradient-to-r font-bold from-[#004492] to-[#0A6BDB] text-white py-2 flex items-center justify-center 
                   rounded-[20px] mt-2 w-[106px] h-[32px] max-sm:w-[85px] max-sm:h-[28px] max-sm:text-[10px]"
      >
        Login
      </button>
    </div>
  </div>
</div>

    )
}

export default LoginForm