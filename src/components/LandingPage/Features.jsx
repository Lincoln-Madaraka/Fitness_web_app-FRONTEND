function GoalsCard(){
  return (
    <div className="self-stretch flex flex-col py-[250px] px-[377px] items-center justify-center gap-[100px] text-center text-29xl lg:w-auto lg:h-auto lg:gap-[100px] lg:pl-[377px] lg:pt-[100px] lg:pb-[200px] lg:box-border md:pl-[100px] md:pr-[100px] md:box-border sm:gap-[3px] sm:pt-[50px] sm:px-[50px] sm:pb-[150px] sm:box-border">
    <img
      className="max-w-full overflow-hidden max-h-full object-cover lg:w-auto lg:h-auto lg:pt-[100px] lg:box-border"
      alt=""
      src="/LandingPage/span@3x.png"
    />
    <div className="self-stretch relative leading-[48px] font-semibold flex items-center justify-center h-px shrink-0 sm:text-11xl sm:self-stretch sm:w-auto sm:flex-1">
      Hit your health goals in 1-2-3
    </div>
    <div className="flex flex-col items-center justify-center gap-[40px] text-left text-49xl text-royalblue sm:gap-[80px] sm:pl-[50px] sm:pr-[50px] sm:box-border">
      <div className="self-stretch flex flex-row py-[25px] px-[18px] items-center justify-start gap-[29px] lg:flex-row md:flex-col sm:flex-col">
        <img
          className="relative w-[509.47px] h-[451.98px] shrink-0 object-cover sm:w-[300px] sm:h-[250px]"
          alt=""
          src="/LandingPage/fitnessstatsbro@2x.jpg"
        />
        <div className="self-stretch flex-1 flex flex-col items-center justify-center gap-[8px] md:items-center md:justify-center md:flex-[unset] md:self-stretch sm:items-center sm:justify-center sm:flex-[unset] sm:self-stretch">
          <span className="self-stretch relative leading-[102px] font-semibold">
            1
          </span>
          <span className="self-stretch relative text-17xl leading-[48px] font-semibold text-gray-1000">{`Track food, fitness & fasting`}</span>
          <span className="self-stretch relative text-base leading-[28px] text-dimgray">
            Tracking calories and macros is easy with our barcode scanner
            and device integration.
          </span>
        </div>
      </div>
      <div className="self-stretch flex flex-row py-[9px] px-0 items-center justify-start gap-[20px] lg:flex-row md:flex-col sm:flex-col">
        <img
          className="relative w-[512px] h-[504.73px] shrink-0 object-cover sm:w-[300px] sm:h-[250px]"
          alt=""
          src="/LandingPage/dietamico@2x.jpg"
        />
        <div className="self-stretch flex-1 flex flex-col items-center justify-center md:flex-[unset] md:self-stretch sm:items-center sm:justify-center sm:flex-[unset] sm:self-stretch">
          <span className="self-stretch relative leading-[102px] font-semibold flex items-center h-[102px] shrink-0">
            2
          </span>
          <span className="self-stretch relative text-17xl leading-[48px] font-semibold text-gray-1000">
            Learn what works
          </span>
          <span className="self-stretch relative text-base leading-[28px] text-dimgray">
            Personalized nutrition insights reveal what's working so you can
            make smarter choices.
          </span>
        </div>
      </div>
      <div className="self-stretch flex flex-row py-0 px-[26px] items-center justify-start gap-[26px] lg:flex-row md:flex-col sm:flex-col">
        <img
          className="relative w-[504px] h-[507px] shrink-0 object-cover sm:w-[300px] sm:h-[250px]"
          alt=""
          src="/LandingPage/healthyhabitbro@2x.jpg"
        />
        <div className="self-stretch w-[317.28px] shrink-0 flex flex-col items-center justify-center gap-[10px] sm:items-center sm:justify-center">
          <span className="self-stretch relative leading-[102px] font-semibold">
            3
          </span>
          <span className="self-stretch relative text-17xl leading-[48px] font-semibold text-gray-1000">
            Change your habits and reach your goals
          </span>
          <span className="self-stretch relative text-base leading-[28px] text-dimgray">
            Now you have the tools and knowledge to build healthy habits for
            life.
          </span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default GoalsCard;
