import {
  FaDribbble,
  FaTwitter,
  FaFacebook,
  FaGooglePlus,
} from "react-icons/fa";
import { Link } from "react-scroll"; 

function Footer() {
  return (
    <div className="h-[240px] relative overflow-hidden">
      <div className="grid grid-rows-3 text-white my-[49.4px] mx-[115px] gap-5">
        <div className="flex justify-between">
          <h4 className="text-[24px] font-medium">Startup 3</h4>
          <div>
            <span className="flex gap-6 text-[16px]">
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
        <div className="line w-full border-t-2 border-white border-opacity-50 my-4"></div>
        <div className="flex justify-between">
          <span className="flex gap-6 cursor-pointer ">
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
          <div>
            <span>
              <h6>© 2017 Designmodo. All rights reserved.</h6>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
