import Link from "next/link";
import Image from "next/image";
import ccLogo from "@/assets/CodeChef-VIT_Logo.svg";

const Footer = () => {
  return (
    <div>
      <div className="h-[40vh] max-h-[40vh] bg-black flex items-center justify-between px-4 sm:px-6 md:px-20 lg:px-40">
        <div className="flex-shrink-0 ml-2 sm:ml-4 md:ml-10">
          <Image
            className="Codechef_Logo max-w-full"
            src={ccLogo}
            alt="Codechef_Logo"
            width={60}
            height={60}
            sizes="(max-width: 768px) 50px, (max-width: 1024px) 80px, 100px"
          />
        </div>

        <div className="ml-4 sm:ml-6 md:ml-20 grid grid-cols-2 gap-4 sm:gap-6 md:gap-10">
          {["WEBSITE", "EVENTS", "SP", "HOME"].map((item) => (
            <div key={item} className="relative group">
              <div className="absolute inset-0 bg-black border-4 border-[#D9D9D9] transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative bg-[#D9D9D9] text-black border-black border-2 font-bold py-1 sm:py-1.5 px-2 sm:px-3 md:px-6 cursor-pointer text-center text-[3.2vw] sm:text-[2.4vw] md:text-[1.5vw] ibm-plex-mono-bold hover:bg-black hover:text-white hover:border-white">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[15vh] bg-black flex items-center justify-between px-4 sm:px-6 md:px-20 text-white">
        <div className="flex items-center ml-2 sm:ml-4 md:ml-10">
          <span className="px-2 sm:px-4 md:px-8 text-sm sm:text-lg md:text-3xl">
            Powered By :
          </span>
          <span className="font-bold text-lg sm:text-xl md:text-2xl">
            musclemind
          </span>
        </div>

        <div className="flex space-x-3 sm:space-x-6 md:space-x-11 mr-2 sm:mr-4 md:mr-10">
          {["Facebook", "Twitter", "Youtube", "insta", "Linkedin"].map(
            (platform) => (
              <Link key={platform} href="/">
                <Image
                  className="footer-logo max-w-full"
                  src={`${platform}.svg`}
                  alt={`${platform} Logo`}
                  width={24}
                  height={24}
                />
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
