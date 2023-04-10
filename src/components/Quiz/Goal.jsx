const Goal = ({goal, setGoal}) => {
    const handleChange = (e)=>{
        setGoal(e.currentTarget.value);
    }

    return (
      <form className="relative bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full flex flex-col pt-[38px] pb-12 pr-[38px] pl-[42px] box-border items-center justify-start gap-[27px]">
        <label className="cursor-pointer self-stretch relative text-11xl font-inter text-black text-left">
          What is your Goal?
        </label>
        <div className="flex flex-col items-center justify-start gap-[10px]">
          
          <button
          type="button" 
          value="be fit"
          onClick={handleChange}
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-xl w-[287px] h-14 shrink-0 overflow-hidden bg-[url(/public/frame-5@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <span
            className="absolute top-[10px] left-[97px] text-11xl font-extrabold font-inter text-orange text-left">
              BE FIT
            </span>
          </button>
          
          <button
          type="button"
          value="weight loss"
          onClick={handleChange}
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-xl w-[287px] h-[57px] shrink-0 bg-[url(/public/pexelsphotobytotalshape@3x.png)] bg-cover bg-no-repeat bg-[top]" />
        </div>
      </form>
    );
  };
  
  export default Goal;
  