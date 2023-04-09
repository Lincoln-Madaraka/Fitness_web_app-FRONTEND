function Name({name, setName}){
    const handleChange = (e) =>{
        setName(e.target.value);
    }

    return(
        <form className="absolute top-[calc(50%_-_309px)] left-[calc(50%_-_240px)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[481px] h-[423px]">
          <label 
            htmlFor="name"
            className="cursor-pointer absolute top-[48px] left-[49px] text-11xl font-inter text-black text-left">
            What is your name?
          </label>
          <input
            name="name"
            className="bg-[transparent] absolute top-[111px] left-[49px] rounded-3xs box-border w-[390px] h-10 border-[1px] border-solid border-black"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </form> 
    )
}

export default Name;