const Height = () => {
    return (
      <form className="relative bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[199px] flex flex-col pt-[38px] pb-12 pr-[38px] pl-[42px] box-border items-center justify-start gap-[27px]">
        <label className="cursor-pointer self-stretch relative text-11xl font-inter text-black text-left">
          What is your height (in ft)?
        </label>
        <div className="w-[309px] h-10 shrink-0 flex flex-row items-start justify-start gap-[27px]">
          <input
            className="bg-[transparent] self-stretch rounded-3xs box-border w-[141px] shrink-0 border-[1px] border-solid border-black"
            type="text"
          />
          <input
            className="bg-[transparent] self-stretch flex-1 rounded-3xs border-[1px] border-solid border-black"
            type="text"
          />
        </div>
      </form>
    );
  };
  
  export default Height;
  