const GoalsCard = () => {
  return (
    <div className="self-stretch flex flex-col py-[100px] px-[377px] items-center justify-start gap-[50px] text-center text-29xl text-gray-1000 font-inter lg:pl-[377px] lg:box-border md:pl-[100px] md:pr-[100px] md:box-border sm:py-[50px] sm:px-2.5 sm:box-border">
      <div className="overflow-hidden flex flex-row items-start justify-start bg-[url(/public/span@3x.png)] bg-cover bg-no-repeat bg-[top]">
        <div className="relative w-[30px] h-[33px] shrink-0">
          <div className="absolute top-[calc(50%_-_16.5px)] left-[calc(50%_-_15px)] w-[30px] h-[33px] overflow-hidden" />
        </div>
      </div>
      <div className="relative leading-[48px] font-semibold flex items-center justify-center w-[671.39px] h-[59px] shrink-0 sm:text-11xl sm:self-stretch sm:w-auto sm:flex-1">
        Hit your health goals in 1-2-3
      </div>
      <div className="w-[922px] flex flex-col items-center justify-center gap-[40px] text-left text-49xl text-royalblue">
        <div className="self-stretch flex flex-row py-[25px] px-[18px] items-center justify-start gap-[29px] lg:flex-row md:flex-col sm:flex-col">
          <img
            className="relative w-[509.47px] h-[451.98px] shrink-0 object-cover sm:w-[300px] sm:h-[250px]"
            alt=""
            src="/fitnessstatsbro@2x.jpg"
          />
          <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[8px] md:items-center md:justify-center md:flex-[unset] md:self-stretch sm:items-center sm:justify-center sm:flex-[unset] sm:self-stretch">
            <span className="relative leading-[102px] font-semibold">1</span>
            <span className="relative text-17xl leading-[48px] font-semibold text-gray-1000 flex items-center w-[282.28px]">{`Track food, fitness & fasting`}</span>
            <span className="relative text-base leading-[28px] text-dimgray flex items-center w-[343.9px]">
              Tracking calories and macros is easy with our barcode scanner and
              device integration.
            </span>
          </div>
        </div>
        <div className="self-stretch flex flex-row py-[9px] px-0 items-center justify-start gap-[20px] text-right lg:flex-row md:flex-col sm:flex-col">
          <img
            className="relative w-[512px] h-[504.73px] shrink-0 object-cover sm:w-[300px] sm:h-[250px]"
            alt=""
            src="/dietamico@2x.jpg"
          />
          <div className="self-stretch flex-1 flex flex-col items-center justify-center md:flex-[unset] md:self-stretch sm:items-center sm:justify-center sm:flex-[unset] sm:self-stretch">
            <span className="relative leading-[102px] font-semibold">2</span>
            <span className="relative text-17xl leading-[48px] font-semibold text-gray-1000">
              Learn what works
            </span>
            <span className="relative text-base leading-[28px] text-dimgray flex items-center w-[331.04px]">
              Personalized nutrition insights reveal what's working so you can
              make smarter choices.
            </span>
          </div>
        </div>
        <div className="self-stretch flex flex-row py-0 px-[26px] items-center justify-start gap-[26px] lg:flex-row md:flex-col sm:flex-col">
          <img
            className="relative w-[504px] h-[507px] shrink-0 object-cover sm:w-[300px] sm:h-[250px]"
            alt=""
            src="/healthyhabitbro@2x.jpg"
          />
          <div className="self-stretch flex flex-col items-center justify-center gap-[10px] sm:items-center sm:justify-center">
            <span className="relative leading-[102px] font-semibold">3</span>
            <span className="relative text-17xl leading-[48px] font-semibold text-gray-1000 flex items-center w-[363.03px]">
              Change your habits and reach your goals
            </span>
            <span className="relative text-base leading-[28px] text-dimgray flex items-center w-[317.28px]">
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
