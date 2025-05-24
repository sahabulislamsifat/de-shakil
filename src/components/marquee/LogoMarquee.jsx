import Marquee from "react-fast-marquee";
// import BrandCard from "./BrandCard";

import logo1 from "../../assets/image/logo/first-logo.png";
import logo2 from "../../assets/image/logo/second-logo.png";
import logo3 from "../../assets/image/logo/third-logo.png";
import logo4 from "../../assets/image/logo/forth-logo.png";
import logo5 from "../../assets/image/logo/fifth-logo.png";
import logo6 from "../../assets/image/logo/sixth-logo.webp";
import logo7 from "../../assets/image/logo/seventh-logo.webp";
import logo8 from "../../assets/image/logo/eight-logo.webp";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const LogoMarquee = () => {
  return (
    <div className="bg-[#000000] py-8 px-36 space-y-12">
      {/* Top Row - Left to Right */}
      <Marquee pauseOnHover speed={40} gradient={false}>
        {logos.concat(logos).map((logo, idx) => (
          <div key={`top-${idx}`} className="mx-8">
            <img
              src={logo}
              alt={`logo-${idx}`}
              className="h-12 md:h-16 object-contain"
            />
          </div>
        ))}
      </Marquee>

      {/* Bottom Row - Right to Left */}
      <Marquee pauseOnHover speed={40} gradient={false} direction="right">
        {logos.concat(logos).map((logo, idx) => (
          <div key={`bottom-${idx}`} className="mx-8">
            <img
              src={logo}
              alt={`logo-${idx}`}
              className="h-12 md:h-16 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
