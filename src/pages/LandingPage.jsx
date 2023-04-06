import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import GoalsCard from "../components/GoalsCard";
import DailyPlanCard from "../components/DailyPlanCard";
import QuestionAnswer from "../components/QuestionAnswer";
import Footer from "../components/Footer";

function LandingPage(){
  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start text-left text-base text-gray-1000 font-inter">
      <Navbar />
      <HeroSection />
      <GoalsCard />
      <div className="self-stretch flex flex-row py-[150px] px-[60px] items-center justify-center gap-[58px] sm:flex-col sm:pt-[100px] sm:pb-[100px] sm:box-border">
        <img
          className="relative w-[210px] h-[284px] shrink-0 object-cover"
          alt=""
          src="/foodpexels@2x.jpg"
        />
        <div className="flex flex-col items-start justify-start gap-[16px] sm:flex-1 sm:self-stretch sm:h-auto sm:gap-[16px]">
          <p className="m-0 relative leading-[24px] font-semibold text-dimgray">
            Our Philosophy
          </p>
          <h1 className="m-0 relative text-29xl tracking-[-1px] leading-[60px] font-semibold font-inherit sm:text-11xl sm:self-stretch sm:w-auto sm:flex-1">
            Knowledge is power
          </h1>
          <p className="m-0 flex flex-row py-0 pr-[0.04998779296875px] pl-0 items-start justify-start sm:self-stretch sm:w-auto sm:flex-1">
            <p className="m-0 relative leading-[28px] flex items-center w-[455.95px] shrink-0 sm:flex-1 sm:self-stretch sm:h-auto">
              <span className="[line-break:anywhere] w-full">
                <span className="block">
                  “Studies show people who keep a food diary are more likely to
                  hit their goals. MyFitnessPal simplifies nutrition and calorie
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
          </p>
        </div>
      </div>
      <div className="self-stretch h-[363px] shrink-0 flex flex-col py-[100px] px-0 box-border items-center justify-start gap-[27px] text-center text-[29px] text-gray-200 md:gap-[20px] md:pl-[50px] md:pr-[50px] md:box-border sm:self-stretch sm:w-auto sm:flex-1 sm:gap-[20px] sm:pt-0 sm:px-5 sm:pb-[100px] sm:box-border">
        <p className="m-0 self-stretch relative leading-[36px] font-medium">
          Flexible Training Plans Tailored to You
        </p>
        <h2 className="m-0 relative text-xl leading-[28px] font-normal font-inherit text-left flex items-center w-[889.51px] h-[106px] shrink-0 md:flex-1 sm:self-stretch sm:w-auto">
          Start training with a personal plan that guides you—while adjusting to
          your progress, schedule and other activities. With NTC, you get access
          to four 4–6 week training plans. Whether you have access to a full gym
          or are training from the comfort of your home, there's a routine that
          fits you and your schedule so that you can reach your goals.
        </h2>
      </div>
      <DailyPlanCard />
      <QuestionAnswer />
      <Footer />
    </div>
  );
};

export default LandingPage;
