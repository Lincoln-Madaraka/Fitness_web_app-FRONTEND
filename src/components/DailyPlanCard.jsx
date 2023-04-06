function DailyPlanCard(){
  return (
    <div className="self-stretch [background:linear-gradient(200deg,_#0066ee_60%,_#9383fb)] overflow-hidden flex flex-row py-[100px] px-[275px] items-center justify-start gap-[55px] text-left text-base text-whitesmoke font-inter md:flex-col sm:flex-col sm:py-[50px] sm:px-[30px] sm:box-border">
      <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[18px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch sm:h-auto">
        <p className="m-0 relative leading-[24px] font-semibold">
          Have 2 mins?
        </p>
        <div className="self-stretch relative text-29xl tracking-[-1px] leading-[60px] text-white sm:self-stretch sm:w-auto sm:flex-1">
          <span className="font-light">{`Get your `}</span>
          <b>personalized daily plan</b>
        </div>
        <button className="cursor-pointer py-3.5 pr-[47.109375px] pl-[46.109375px] bg-white rounded-25xl flex flex-row items-start justify-start gap-[0.78px] border-[2px] border-solid border-royalblue">
          <b className="relative text-base tracking-[0.5px] leading-[24px] uppercase font-inter text-royalblue text-center">
            Take the quiz
          </b>
          <img
            className="relative w-6 h-6 shrink-0 overflow-hidden object-cover"
            alt=""
            src="/arrow@2x.jpg"
          />
        </button>
      </div>
      <img
        className="relative w-[627.17px] h-[435px] shrink-0 object-cover sm:w-[300px] sm:h-[250px]"
        alt=""
        src="/schedulebro@2x.jpg"
      />
    </div>
  );
};

export default DailyPlanCard;
