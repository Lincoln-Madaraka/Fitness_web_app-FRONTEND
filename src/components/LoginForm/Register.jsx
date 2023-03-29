export default function Register(){
    return (
    <>
        <div 
        className="relative bg-white w-full h-[700px] overflow-hidden">
          
          <img
            className="absolute h-[600px] w-[30.01%] top-[11.72%] right-[-6.47%] bottom-[29.26%] left-[71.46%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/images/trainingathomerafiki@2x.png"
          />
          <img
            className="absolute h-[600px] w-[20.99%] top-[10.59%] right-[60.01%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/images/dumbbellexercisecuate@2x.png"
          />


          <form 
            className="absolute top-[50px] left-[387px] w-[500px] h-[500px]">
            <div 
              className="absolute top-[30px] left-[60px] rounded-[50px] bg-whitesmoke w-[600px] h-[500px]" 
            />

            <div 
                className="absolute top-[54px] left-[298px] text-[30px] tracking-[0.01em] capitalize font-bold font-inter text-black text-left flex items-center w-[124px] h-8">
                SIGN UP
            </div>

            <label for="username"
              className="absolute top-[105px] left-[180px] text-6xl tracking-[0.01em] capitalize font-medium font-inter text-black text-left flex items-center w-[124px] h-7">
              Username
            </label>
            <input
              className="[border:none] bg-gray-100 absolute top-[139px] left-[180px] rounded-3xs shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] w-[400px] h-[40px]"
              type="text"
              name="username"
            />

            <label
              for="password"
              className="absolute top-[222px] left-[180px] text-6xl tracking-[0.01em] capitalize font-medium font-inter text-black text-left flex items-center w-[119px] h-7">
              Password
            </label>
            <input
              className="[border:none] bg-gray-100 absolute top-[256px] left-[180px] rounded-3xs shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] w-[400px] h-[40px]"
              type="password"
              name="password"
              maxLength={16}
              minLength={8}
            />

            <button className="cursor-pointer [border:none] items-center bg-salmon absolute top-[361px] left-[180px] rounded-3xs shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] w-[400px] h-[40px]">
                <span className="text-6xl capitalize font-bold font-inter text-white">
                REGISTER
                </span>
            </button>

            <button className="cursor-pointer [border:none] items-center bg-gray-100 absolute top-[444px] left-[180px] rounded-3xs shadow-[0px_1px_4px_rgba(207,_155,_155,_0.5)] w-[400px] h-[40px]">
                <span className="text-6xl capitalize font-light font-inter text-gray-200">
                Continue with Google 
                <img
                className="w-[30px] pl-2"
                alt=""
                src="/images/phgooglelogobold@2x.png"
                />
            </span>
            
            </button>
          </form>
        </div>
    </>
      );
}