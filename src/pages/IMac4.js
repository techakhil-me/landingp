import NavBar from "../components/NavBar";

const IMac4 = () => {
  return (
    <div className="relative bg-gray-300 w-full flex flex-col items-start justify-start text-left text-[64px] text-gray-200 font-montserrat">
      <NavBar />
      <div className="self-stretch h-[596px] shrink-0 flex flex-row p-[0px_80px] box-border items-center justify-start gap-[25px]">
        <div className="flex-1 h-[406px] flex flex-col items-start justify-start gap-[15px]">
          <div className="flex-1 self-stretch flex flex-col items-start justify-start gap-[20px]">
            <div className="flex-1 self-stretch relative tracking-[2px] leading-[70px] flex items-center md:text-[36px]">
              <span className="[line-break:anywhere]">
                <span className="font-semibold">{`The official `}</span>
                <b className="[background:linear-gradient(90deg,_#4cc0f1,_#9b86ff_48.96%,_#df57d5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Data Science
                </b>
                <span className="font-semibold"> club of DJSCE</span>
              </span>
            </div>
            <div className="self-stretch relative text-base tracking-[0.2px] leading-[24px] font-semibold text-gray-400 inline-block md:text-[12px]">
              We strive to encourage students to explore the real time
              applications of Data Science and acquaint themselves with the
              framework and apex techniques.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-[20px] text-gray-100">
            <div className="relative tracking-[0.2px] leading-[24px] font-medium inline-block">
              Explore More
            </div>
            <div className="rounded-[100px] [border:1px_solid_#fff] box-border relative flex flex-row p-[8px_20px] items-center justify-center gap-[10px] text-lg">
              <div className="relative tracking-[0.2px] leading-[24px] font-semibold inline-block">
                Watch our Events
              </div>
              <img
                className="relative w-[37px] h-[37px] shrink-0 overflow-hidden"
                alt=""
                src="../playcircle.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[535px] object-cover"
          alt=""
          src="../image-49@2x.png"
        />
      </div>
      <img
        className="relative w-[1708.12px] h-[1304.97px] shrink-0"
        alt=""
        src="../group-18.svg"
      />
    </div>
  );
};

export default IMac4;
