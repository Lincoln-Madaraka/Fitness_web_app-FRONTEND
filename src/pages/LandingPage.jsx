import Navbar from "../components/LandingPage/Navbar";
import HeroSection from "../components/LandingPage/HeroSection";
import Features from "../components/LandingPage/Features";
import QuizBox from "../components/LandingPage/QuizBox";
import QuestionAnswer from "../components/LandingPage/QuestionAnswer";
import Footer from "../components/LandingPage/Footer";

const LandingPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-center text-left text-base text-gray-1000 font-inter">
      <Navbar/>
      
      <HeroSection/>

      <Features/>




      <div className="w-[824px] flex flex-row p-[100px] box-border items-center justify-center gap-[58px] lg:w-auto lg:h-auto md:flex-col md:py-[50px] md:px-[100px] md:box-border sm:flex-col sm:p-[30px] sm:box-border">
        <img
          className="relative w-[210px] h-[284px] shrink-0 object-cover"
          alt=""
          src="/LandingPage/foodpexels@2x.jpg"
        />
        <div className="flex flex-col items-center justify-center gap-[16px] lg:flex-1 md:items-center md:justify-center sm:flex-1 sm:self-stretch sm:h-auto sm:gap-[16px]">
          <p className="m-0 relative leading-[24px] font-semibold text-dimgray lg:self-stretch lg:w-auto md:self-stretch md:w-auto">
            Our Philosophy
          </p>
          <h1 className="m-0 relative text-29xl tracking-[-1px] leading-[60px] font-semibold font-inherit lg:self-stretch lg:w-auto sm:text-11xl sm:self-stretch sm:w-auto sm:flex-1">
            Knowledge is power
          </h1>
          <div className="m-0 self-stretch flex flex-col items-center justify-center sm:self-stretch sm:w-auto sm:flex-1">
            <p className="m-0 flex-1 relative tracking-[-1px] leading-[28px] flex items-center w-[455.95px] lg:self-stretch lg:w-auto sm:self-stretch sm:w-auto sm:flex-1">
              <span className="[line-break] w-full">
                <span className="block">
                  “Studies show people who keep a food diary are more likely to
                  hit their goals. BeFit simplifies nutrition and calorie
                  tracking, provides the data you want, and helps you make sense
                  of it all.
                </span>
                <span className="block">&nbsp;</span>
                <span className="block">
                  Healthy eating is a continuous journey of self-discovery. And
                  the more you track, the more empowered you’ll become to make
                  healthy choices that support your goals.”
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="self-stretch flex flex-col py-[100px] px-[250px] items-center justify-center gap-[27px] text-center text-10xl text-gray-200 md:gap-[20px] md:pl-[50px] md:pr-[50px] md:box-border sm:self-stretch sm:w-auto sm:flex-1 sm:gap-[20px] sm:py-[100px] sm:px-5 sm:box-border">
        <p className="m-0 self-stretch relative leading-[36px] font-bold">
          Flexible Training Plans Tailored to You
        </p>
        <h2 className="m-0 self-stretch relative text-xl leading-[28px] font-normal font-inherit text-left lg:self-stretch lg:w-auto md:self-stretch md:w-auto md:flex-1 sm:self-stretch sm:w-auto">
          Start training with a personal plan that guides you—while adjusting to
          your progress, schedule and other activities. With BeFit, you get access
          to four 4–6 week training plans. Whether you have access to a full gym
          or are training from the comfort of your home, there's a routine that
          fits you and your schedule so that you can reach your goals.
        </h2>
      </div>


      <QuizBox/>

      {/* <QuestionAnswer/> */}

      <Footer/>
    </div>
  );
};

export default LandingPage;




