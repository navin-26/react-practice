import {
  FaDribbble,
  FaTwitter,
  FaFacebook,
  FaGooglePlus,
} from "react-icons/fa";
import { Link } from "react-scroll"; 

function Footer() {
  return (
    <div className="lg:h-[240px] sm:h-auto relative overflow-hidden">
      <div className="flex flex-col text-white md:my-[49.4px] md:mx-[115px] sm:my-[40px] sm:mx-[30px] gap-5 max-md:items-center">
        <div className="flex max-md:flex-col max-md:gap-3 justify-between">
          <h4 className="md:text-[24px] sm:text-[18px] font-medium">
            Startup 3
          </h4>
          <div>
            <span className="flex gap-6 md:text-[16px] sm:text-[12px] max-md:my-3">
              <Link
                to="policies"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-400"
              >
                Privacy Policy
              </Link>
              <Link
                to="terms"
                smooth={true}
                duration={500}
                className="cursor-pointer  hover:text-gray-400"
              >
                Terms
              </Link>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaGooglePlus />
              </a>
            </span>
          </div>
        </div>
        <div className="line w-auto border-t-2 border-white border-opacity-50 my-4 h-1 max-md:hidden"></div>
        <div className="flex flex-row  justify-between">
          <span
            className="flex xl:gap-6 lg:gap-5 md:gap-3
          max-lg:flex-col cursor-pointer max-md:hidden "
          >
            <Link
              to="tour"
              smooth={true}
              duration={500}
              className="hover:text-gray-400"
            >
              Tour
            </Link>
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="hover:text-gray-400"
            >
              Features
            </Link>
            <Link
              to="pricing"
              smooth={true}
              duration={500}
              className="hover:text-gray-400"
            >
              Pricing Plans
            </Link>
            <Link
              to="works"
              smooth={true}
              duration={500}
              className="hover:text-gray-400"
            >
              Our Works
            </Link>
            <Link
              to="brands"
              smooth={true}
              duration={500}
              className="hover:text-gray-400"
            >
              Brands
            </Link>
            <Link
              to="contacts"
              smooth={true}
              duration={500}
              className="hover:text-gray-400"
            >
              Contacts
            </Link>
          </span>
          <div className="flex ">
            <span className="content-end md:text-[16px] sm:text-[12px]">
              <h6>© 2017 Designmodo. All rights reserved.</h6>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
