import React from 'react';

const EventPage: React.FC = () => {
  return (
    <div className="bg-black text-white py-12 text-center font-['IBM_Plex_Mono'] min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-[4vw] mb-[3vw] font-bold ibm-plex-mono-bold">OUR EVENTS</h2>
      <p className="max-w-7xl mx-auto mb-[5vw] leading-relaxed text-xl ibm-plex-mono-regular">
        Lorem ipsum dolor sit amet consectetur. Enim quis <strong className="text-[#B7AB98]">COOKOFF</strong> sed magna est. Elit tellus tempor amet accumsan sit pellentesque <strong className="text-[#B7AB98]">CLUEMINATI</strong>. Velit lectus amet nunc at ultrices volutpat. Pellentesque arcu malesuada ac egestas justo blandit. Elit tellus tempor amet accumsan sit pellentesque feugiat. Velit lectus amet nunc at ultrices volutpat. Pellentesque arcu malesuada ac egestas justo blandit.
      </p>
      <div className="flex justify-center gap-8 flex-wrap">
        <div className="text-center">
          <div className="bg-[#D9D9D9] w-[579px] h-[246px] border-4 border-black flex items-center justify-center p-5 mb-5 relative">
            <div className="flex items-center">
              <img src="/Group 66.svg" alt="CookOff Logo" className="max-h-full" />
            </div>
            <div className="absolute inset-0 border-4 border-black pointer-events-none"></div>
            <div className="absolute inset-4 border-4 border-black pointer-events-none"></div>
          </div>
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-black border-4 border-[#D9D9D9] transform transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-3"></div>
            <div className="relative bg-[#D9D9D9] text-black border-black border-2 font-bold py-2 px-8 cursor-pointer w-full text-[1.5vw] ibm-plex-mono-bold hover:bg-black hover:text-white hover:border-white hover:border-2">
              REGISTER
            </div>
          </div>
        </div>

        <div className="text-center ">
          <div className="bg-black w-[579px] h-[246px] border-2 border-white flex items-center justify-center p-5 mb-5 relative">
            <img src="/Group 65.svg" alt="Clueminati Logo" className="max-h-full" />
          </div>
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-black border-4 border-[#D9D9D9] transform transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-3"></div>
            <div className="relative bg-[#D9D9D9] text-black border-black border-2 font-bold py-2 px-8 cursor-pointer w-full text-[1.5vw] ibm-plex-mono-bold hover:bg-black hover:text-white hover:border-white hover:border-2">
              REGISTER
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
