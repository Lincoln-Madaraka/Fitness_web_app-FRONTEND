function Footer(){
  return (
    <footer className="self-stretch bg-gray-200 flex flex-col py-10 px-[154px] items-center justify-center text-left text-2xs text-gray-100 font-inter lg:self-stretch lg:w-auto md:self-stretch md:w-auto sm:self-stretch sm:w-auto sm:h-auto">
    <div className="relative w-[168px] h-[37px] shrink-0">
      <img
        className="absolute top-[0px] right-[138px] w-[30px] h-[30px] overflow-hidden object-cover"
        alt=""
        src="/LandingPage/Twitter.png"
      />
      <img
        className="absolute top-[0px] right-[69px] w-[30px] h-[30px] overflow-hidden object-cover"
        alt=""
        src="/LandingPage/Facebook.png"
      />
      <img
        className="absolute top-[0px] right-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
        alt=""
        src="/LandingPage/Instagram.png"
      />
    </div>
    <div className="flex flex-row py-0 px-1.5 items-center justify-start gap-[6px] sm:flex-col">
      <div className="w-[329px] shrink-0 flex flex-row py-0 px-[76px] box-border items-start justify-start sm:flex-1">
        <p className="m-0 flex-1 relative leading-[12px]">
          © 2023 BeFit. All Rights Reserved
        </p>
      </div>
      <div className="flex-1 flex flex-row py-2 px-[34px] items-center justify-end gap-[28px] text-right sm:flex-col sm:gap-[10px] sm:flex-[unset] sm:self-stretch">
        <div className="flex-1 relative leading-[28px] text-center sm:flex-[unset] sm:self-stretch">
          Guides
        </div>
        <a
          className="relative leading-[28px] text-[inherit] flex items-center w-[71px] shrink-0 [text-decoration:none]"
          href="https://www.eshopworld.com/shoppers/help/retailer/nike/terms-and-conditions-of-sale-en/"
          target="_blank"
        >
          Terms of Sale
        </a>
        <p className="m-0 relative leading-[28px] flex items-center w-[70px] shrink-0">
          Terms of Use
        </p>
        <p className="m-0 relative leading-[28px] flex items-center w-[76px] shrink-0">
          {" "}
          Privacy Policy
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
