const NavBar = () => {
  return (
    <div className="self-stretch h-[124px] shrink-0 flex flex-row p-[0px_80px] box-border items-center justify-between text-left text-base text-gray-100 font-montserrat">
      <img
        className="relative w-[80px] h-[80px] shrink-0 object-cover"
        alt=""
        src="../logo-png-2@2x.png"
      />
      <div className="flex flex-row items-start justify-start gap-[33px]">
        <div className="relative tracking-[0.2px] leading-[24px] font-semibold inline-block">
          Events
        </div>
        <div className="relative tracking-[0.2px] leading-[24px] font-semibold inline-block">
          Sponsors
        </div>
        <div className="relative tracking-[0.2px] leading-[24px] font-semibold inline-block">
          News
        </div>
        <div className="relative tracking-[0.2px] leading-[24px] font-semibold inline-block">
          Contact
        </div>
      </div>
      <div className="rounded-[100px] [background:linear-gradient(90deg,_#4cc0f1,_#9b86ff_48.96%,_#df57d5)] shadow-[0px_8px_20px_rgba(115,_3,_192,_0.4)] flex flex-row p-[8px_20px] box-border items-center justify-start text-lg text-gray-300">
        <b className="relative tracking-[0.2px] leading-[24px] inline-block">
          Contact Us
        </b>
      </div>
    </div>
  );
};

export default NavBar;
