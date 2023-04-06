function AgreeAndJoinForm(){
  return (
    <form className="absolute top-[100px] left-[calc(50%_-_200px)] rounded-t-lg rounded-b-none bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col p-6 items-center justify-center gap-[15px]">
      <label className="self-stretch relative text-sm leading-[20px] font-roboto text-gray-500 text-left flex items-center h-[22px] shrink-0">
        Email
      </label>
      <input
        className="bg-white relative rounded box-border w-[352px] h-8 shrink-0 border-[1px] border-solid border-gray-500"
        type="text"
      />

      <label className="self-stretch relative text-sm leading-[20px] font-roboto text-gray-500 text-left flex items-center h-[22px] shrink-0">
        Password (6 or more characters)
      </label>
      <input
        className="bg-white relative rounded box-border w-[352px] h-8 shrink-0 border-[1px] border-solid border-gray-500"
        type="password"
      />

      <button className="cursor-pointer [border:none] p-0 bg-dodgerblue relative rounded-3xl w-[352px] h-12 shrink-0 overflow-hidden">
        <div className="absolute top-[11px] left-[129.25px] text-base leading-[40px] font-medium font-roboto text-white text-center flex items-center justify-center w-[93.7px] h-[25px]">{`Agree & Join`}</div>
      </button>

      <div className="relative bg-lightgray w-[325px] h-px shrink-0" />
      <p className="m-0 relative text-mini leading-[24px] font-roboto text-gray-600 text-center">
        or
      </p>

      <button className="cursor-pointer p-0 bg-white relative rounded-xl box-border w-[325px] h-10 shrink-0 overflow-hidden border-[1px] border-solid border-gainsboro-100">
        <div className="absolute top-[13.5px] left-[104.83px] text-smi tracking-[0.25px] font-medium font-inter text-darkslategray text-center">
          Continue with Google
        </div>
        <img
          className="absolute h-[45%] w-[5.54%] top-[30%] right-[71.13%] bottom-[25%] left-[23.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/google.svg"
        />
      </button>

      <div className="relative text-base leading-[24px] text-center flex items-center w-[208.32px] h-[25px] shrink-0">
        <span className="[line-break:anywhere] w-full">
          <span className="font-roboto text-gray-600">{`Already on BeFit? `}</span>
          <a
            className="text-[inherit]"
            href="/register"
          >
            <span className="font-semibold font-roboto text-dodgerblue">
              Sign in
            </span>
          </a>
        </span>
      </div>
    </form>
  );
};

export default AgreeAndJoinForm;
