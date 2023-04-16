import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();

  const handleClick=()=>{
    navigate('/register');
  }


  return (
    <div className="self-stretch [background:linear-gradient(200deg,_#0066ee_60%,_#9383fb)] flex flex-row py-[90px] px-0 items-center justify-center text-white lg:w-auto lg:h-auto lg:flex-col lg:gap-[0px] lg:p-[50px] lg:box-border md:w-auto md:h-auto md:flex-col md:p-[50px] md:box-border sm:w-auto sm:h-auto sm:flex-col sm:gap-[60px] sm:py-[50px] sm:px-[30px] sm:box-border">
    <div className="w-[504.28px] shrink-0 flex flex-col items-start justify-center gap-[23px] lg:w-auto lg:h-auto md:flex-1 md:self-stretch md:h-auto md:pt-5 md:pb-[30px] md:box-border sm:w-auto sm:self-stretch sm:h-auto sm:flex-col sm:gap-[20px] sm:items-start sm:justify-between">
      
      <span className="self-stretch relative leading-[24px] font-semibold text-gainsboro-200 flex items-center h-5 shrink-0">
        #1 Low-Calorie recipe suggesting app
      </span>
     
      <p className="m-0 self-stretch relative text-49xl leading-[80px] flex items-center h-48 shrink-0 lg:self-stretch lg:w-auto lg:flex-1 sm:text-21xl sm:text-left sm:self-stretch sm:w-auto sm:flex-1">
        <span className="[line-break]">
          <b>{`Reach your goals `}</b>
          <span className="font-light">with BeFit</span>
        </span>
      </p>

      <span className="self-stretch relative leading-[30px] sm:self-stretch sm:w-auto sm:flex-1">
        Build healthy habits with the all-in-one low-calorie-food and exercise suggestions according to your need.
      </span>

      <button 
      className="cursor-pointer [border:none] py-3 pr-[42.296875px] pl-[49.296875px] bg-white rounded-11xl w-[292.81px] flex flex-row box-border items-start justify-start gap-[4.41px]"
      onClick={handleClick}
      >
        <a className="[text-decoration:none] relative text-base tracking-[0.25px] leading-[24px] uppercase font-bold font-inter text-royalblue text-center">
          Start Today
        </a>
        <img
          className="relative w-5 h-6 shrink-0 object-cover"
          alt=""
          src="/forward-arrow@2x.jpg"
        />
      </button>
    </div>

    <img
      className="relative w-[433px] h-[389px] shrink-0 object-cover sm:w-[300px] sm:h-[300px]"
      alt=""
      src="/LandingPage/pana-1@2x.png"
    />
  </div>
  );
};

export default Hero;
