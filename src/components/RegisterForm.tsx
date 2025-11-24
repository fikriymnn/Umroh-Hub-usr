import useRegister from '../hooks/auth/useRegister';

type RegisterFormProps = {
    isAnimated: boolean;
    setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterForm = ({ isAnimated, setIsAnimated }: RegisterFormProps) => {
    const {
        name, setName,
        email, setEmail,
        password, setPassword,
        phone, setPhone,
        address, setAddress,
        ktp, setKtp,
        handleRegister
    } = useRegister({ isAnimated, setIsAnimated });

    return (
      <div id="Register" className="w-full h-full px-10 py-12 overflow-y-auto items-center">
        <div className="flex max-md:flex-row flex-col max-md:space-x-1">

        <h2 className="text-[20px] font-medium mt-5 text-[#004492]  max-md:text-[12px]">
          Selamat Datang Di
        </h2>

        <h1 className="text-[36px] text-[#004492] max-md:mt-[14px] font-philosopher max-md:text-[18px]">
          Umroh<span className="font-bold">Hub</span>
        </h1>
        </div>

  <p className="text-[15px] font-medium text-[#C0C0C0] mt-4 max-md:mt-1 mb-2 max-md:mb-1  max-md:text-[10px]">
    Silahkan Isi Data Diri Anda Untuk Daftar
  </p>

  <div className="flex flex-col space-y-4 max-md:space-y-3 items-center">
    <input
      type="text"
      name="name"
      value={name}
      className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md max-md:w-[250px] max-md:h-[40px] max-md:text-[9px]"
      placeholder="Nama Lengkap"
      onChange={(e) => setName(e.target.value)}
      required
    />

    <input
      type="tel"
      name="phone_number"
      value={phone}
      className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md max-md:w-[250px] max-md:h-[40px] max-md:text-[9px]"
      placeholder="No Whatsapp"
      onChange={(e) => setPhone(e.target.value)}
      required
    />

    <input
      type="email"
      name="email"
      value={email}
      className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md max-md:w-[250px] max-md:h-[40px] max-md:text-[9px]"
      placeholder="Email"
      onChange={(e) => setEmail(e.target.value)}
      required
    />

    <input
      type="password"
      name="password"
      value={password}
      className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md max-md:w-[250px] max-md:h-[40px] max-md:text-[9px]"
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
      required
    />

    <button
      type="button"
      onClick={handleRegister}
      className="bg-gradient-to-r font-bold from-[#004492] to-[#0A6BDB] text-white py-2 rounded-[20px] flex items-center justify-center w-[106px] h-[32px] max-md:w-[85px] max-md:h-[28px] max-md:text-[9px]"
    >
      Daftar
    </button>
  </div>
</div>

    )
}

export default RegisterForm