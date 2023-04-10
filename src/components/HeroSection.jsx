function HeroSection(){
  return (
    <div className="self-stretch [background:linear-gradient(200deg,_#0066ee_60%,_#9383fb)] flex flex-row py-[91px] px-[24px] md:px-[80px] items-center justify-center gap-[38px] text-left text-base text-white font-inter lg:flex-col md:self-stretch md:w-auto md:flex-1 md:flex-col md:pl-[100px] md:pr-[100px] md:box-border sm:self-stretch sm:w-auto sm:flex-col sm:gap-[60px] sm:py-[100px] sm:px-2.5 sm:box-border">
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[23px] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch sm:h-auto sm:flex-col sm:gap-[20px] sm:items-start sm:justify-between">
        <span className="relative leading-[24px] font-semibold text-gainsboro-200 flex items-center w-[188.82px] h-5 shrink-0">
          #1 nutrition tracking app
        </span>
        <p className="m-0 relative text-49xl leading-[80px] flex items-center w-[576.28px] sm:text-21xl sm:text-left sm:self-stretch sm:w-auto sm:flex-1">
          <span className="[line-break:anywhere] w-full">
            <b>{`Reach your goals `}</b>
            <span className="font-light">with BeFit</span>
          </span>
        </p>
        <span className="relative leading-[30px] flex items-center w-[555.64px] h-5 shrink-0 sm:self-stretch sm:w-auto sm:flex-1">
          Build healthy habits with the all-in-one food, exercise, and calorie
          tracker.
        </span>
        <button className="cursor-pointer [border:none] py-3 pr-[42.296875px] pl-[49.296875px] bg-white rounded-113xl w-[292.81px] flex flex-row box-border items-start justify-start gap-[4.41px]">
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
        src="/pana-1@2x.png"
      />
    </div>
  );
};

export default HeroSection;
