import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate('/signin')
  }

  return (
    <nav className="self-stretch bg-royalblue h-[88px] shrink-0 flex flex-col py-1 px-[292px] box-border items-center justify-center lg:w-auto lg:gap-[600px] lg:pt-5 lg:px-0 lg:pb-0 lg:box-border md:w-auto md:flex-row md:gap-[384px] md:pt-5 md:px-0 md:pb-0 md:box-border sm:gap-[50px] sm:items-center sm:justify-start sm:pt-5 sm:px-px sm:pb-0 sm:box-border">
        <div className="self-stretch flex flex-row items-center justify-between lg:self-stretch lg:w-auto lg:pl-[100px] lg:pr-[100px] lg:box-border md:gap-[200px] md:items-center md:justify-center md:pl-0 md:pr-0 md:box-border">
          <div className="relative text-11xl leading-[80px] font-bold font-inter text-white text-left">
            befit
          </div>
          <img
            onClick={handleClick}
            className="relative w-[50px] h-10 shrink-0 object-cover"
            alt=""
            src="/LandingPage/profile.png"
          />
        </div>
      </nav>
  );
}

export default Navbar;
