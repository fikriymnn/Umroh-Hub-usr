
import bg from "../assets/images/Group (1).png"
// interface switchProps {
//     onSwitch: () => void;
// }

const Register= ({
    isAnimated,
    setIsAnimated,
  }: {
    isAnimated: boolean;
    setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    
    return (
      <div
        id="register"
        className="w-full h-full bg-gradient-to-br from-[#3C97FF] to-primary-blue text-white relative overflow-hidden"
      >
        {/* Background image */}
        <img
          src={bg}
          alt="background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        />

        {/* Konten */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-10 text-center">
          <h2 className="text-[30px] font-medium max-sm:text-[20px]">Masuk ke</h2>
          <h1 className="text-[64px] mb-6 font-philosopher max-sm:text-[38px]">
            Umroh<span className="font-bold">Hub</span>
          </h1>
          <p className="text-[15px] max-sm:text-[12px]">Sudah Punya Akun Di UmrohHub?</p>
          <p className="text-sm mb-4 max-sm:text-[12px]">Login Yuk</p>
          <button
            type="submit"
            onClick={() => setIsAnimated(!isAnimated)}
            className="bg-white text-[#001A4D] font-semibold px-7 py-1 rounded-full 
                      max-sm:text-[9px] max-sm:px-4 max-sm:py-[2px]"
          >
            Login
          </button>
        </div>
      </div>
    )
}

export default Register