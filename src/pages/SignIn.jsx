import ShowCardForm from "../components/ShowCardForm";

const SignIn = () => {
  
  return (
    <div className="relative bg-white w-full h-[891.38px] overflow-hidden text-left text-[56px] text-sienna font-roboto">
      <div className="absolute top-[36px] left-[calc(50%_-_195px)] rounded-[10px] [background:linear-gradient(180deg,_rgba(33,_31,_136,_0.02),_rgba(134,_36,_36,_0))] w-[390px] h-[780px] flex flex-col py-0 px-[5px] box-border items-center justify-center gap-[15px]">
        <div className="relative leading-[67.2px] font-extralight flex items-center w-[369px] h-[210px] shrink-0">
          Welcome to your health coach
        </div>
        <ShowCardForm
          productId="18x18x925649663"
          googlePosition="relative"
          googleFlexShrink="0"
        />
      </div>
    </div>
  );
};

export default SignIn;
