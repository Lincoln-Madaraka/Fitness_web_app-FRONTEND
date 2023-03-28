export default function loginForm(){
    return (
        <div className="relative bg-lavender w-full h-[1024px] overflow-hidden text-center text-11xl text-dimgray font-inter">
          <img
            className="absolute top-[510px] left-[537px] w-[618px] h-[555px]"
            alt=""
            src="/images/ellipse-1.svg"
          />
          <form
            className="absolute top-[200px] left-[815px] rounded-[30px] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[565px] h-[520px] overflow-hidden"
            id="form"
          >
            <div className="absolute top-[85px] left-[27px] font-semibold">
              Username
            </div>
            <input
              className="[border:none] bg-snow absolute top-[129px] left-[27px] rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[488px] h-[62px]"
              type="text"
            />
            <div className="absolute top-[222px] left-[30px] font-semibold text-plum">
              Password
            </div>
            <input
              className="[border:none] bg-snow absolute top-[274px] left-[30px] rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[488px] h-[62px]"
              type="text"
            />
            <button
              className="cursor-pointer [border:none]  bg-plum absolute top-[367px] left-[30px] rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[488px] h-[62px]"
              autoFocus
            >
            <h1 className="text-center font-bold text-white [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">Log In</h1>
            {/* <a >
              Log In
            </a> */}
            </button>
          </form>
          <img
            className="absolute top-[110px] left-[43px] w-[668px] h-[679px] object-cover"
            alt=""
            src="/images/personalized-workoutsamico-1@2x.png"
          />
          <div className="absolute top-[40px] left-[86px] text-[50px] font-light text-black text-left">
            HELPING YOU TO TAKE FITNESS TO THE TOP LEVEL !!
          </div>
        </div>
      );
}