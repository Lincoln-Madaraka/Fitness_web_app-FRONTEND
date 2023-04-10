function Name({name, setName}){
    const handleChange = (e) =>{
        setName(e.target.value);
    }

    return (
    <form className="bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[367px] h-[199px] shrink-0 flex flex-col pt-[38px] pb-12 pr-[38px] pl-[42px] box-border items-center justify-start gap-[27px]">
      <label 
      htmlFor="name"
      className="cursor-pointer self-stretch relative text-11xl font-inter text-black text-left">
        What is your name?
      </label>
      <input
        className="bg-[transparent] self-stretch rounded-3xs border-[1px] border-solid border-black"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
    </form>
    );
}

export default Name;