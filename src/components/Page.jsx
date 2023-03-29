import { redirect, useNavigate } from "react-router-dom";

function Page(){
  const navigate = useNavigate();

  const handleClick = ()=>{
      navigate("/form");
  }

    return (
        <div className="relative bg-white w-full h-[600px] overflow-hidden text-left text-6xl text-midnightblue font-inter">
          <div className="absolute top-[0px] left-[60px] bg-white w-full h-[1024px] overflow-hidden">
          <button onClick={handleClick} className="cursor-pointer [border:none] p-0 bg-lavender absolute top-[24px] right-[320px] rounded-3xs w-[117px] h-[62px] hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              <h2 className=" tracking-[0.01em] capitalize font-bold mix-blend-normal">
                  Sign Up
              </h2>
            </button>
            <button onClick={handleClick} className="cursor-pointer [border:none] p-0 bg-lavender absolute top-[24px] right-[150px] rounded-3xs  w-[139px] h-[62px] hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              <h2 className=" tracking-[0.01em] capitalize font-bold mix-blend-normal">
                  Log In
              </h2>
            </button>
            <div className="absolute top-[185px] left-[481px] text-[20px] tracking-[0.01em] capitalize font-medium text-gray indent-[2px] inline-block w-[382px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </div>
            <button onClick={handleClick} className="cursor-pointer [border:none] p-0 bg-lavender absolute top-[449px] left-[481px] rounded-3xs  w-56 h-[62px] hover:mix-blend-darken hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              <h2 className=" tracking-[0.01em] capitalize font-bold mix-blend-normal">
                JOIN NOW
              </h2>
            </button>
            <img
              className="absolute h-[23.09%] w-[17.45%] top-[47.46%] right-[69.43%] bottom-[29.45%] left-[13.13%] max-w-full overflow-hidden max-h-full object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in]"
              alt=""
              src="/images/coachesamico@2x.png"
              data-animate-on-scroll
            />
            <img
              className="absolute h-[24.39%] w-[17.45%] top-[13.57%] right-[76.23%] bottom-[62.03%] left-[6.32%] max-w-full overflow-hidden max-h-full object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in]"
              alt=""
              src="/images/breathingexercisecuate@2x.png"
              data-animate-on-scroll
            />
            <img
              className="absolute h-[22.54%] w-[17.45%] top-[12.4%] right-[18.73%] bottom-[65.06%] left-[63.82%] max-w-full overflow-hidden max-h-full object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in]"
              alt=""
              src="/images/workoutcuate@2x.png"
              data-animate-on-scroll
            />
            <img
              className="absolute h-[24.02%] w-[16.94%] top-[39.55%] right-[15.07%] bottom-[36.42%] left-[67.99%] max-w-full overflow-hidden max-h-full object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in]"
              alt=""
              src="/images/dietcuate@2x.png"
              data-animate-on-scroll
            />
          </div>
        </div>
      );
}

export default Page;