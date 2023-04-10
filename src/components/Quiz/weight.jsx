function Weight({weight, setWeight}){
    const handleChange = (e) =>{
        setWeight(e.target.value);
    }

    return(
      <form className="bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[367px] h-[199px] shrink-0 flex flex-col pt-[38px] pb-12 pr-[38px] pl-[42px] box-border items-center justify-start gap-[27px]">
      <label 
      htmlFor="weight"
      className="cursor-pointer self-stretch relative text-11xl font-inter text-black text-left">
        What is your weight?
      </label>
      <input
        className="bg-[transparent] self-stretch rounded-3xs border-[1px] border-solid border-black"
        type="numberr"
        name="weight"
        value={weight}
        onChange={handleChange}
      />
    </form>
    )
}

export default Weight;