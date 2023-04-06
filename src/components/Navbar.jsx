const Navbar = () => {
  return (
    <nav className="self-stretch relative bg-royalblue h-[85px] shrink-0">
      <div className="absolute top-[34px] left-[221px] text-11xl leading-[80px] font-bold font-inter text-white text-left flex items-center w-[133px] h-[21px]">
        befit
      </div>
      <img
        className="absolute top-[calc(50%_-_8.5px)] right-[288.11px] w-[48.89px] h-[40.14px] object-cover"
        alt=""
        src="/vector@2x.png"
      />
    </nav>
  );
};

export default Navbar;
