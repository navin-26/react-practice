import { FaCheck } from "react-icons/fa";
import HeroImg from "../assets/pricingTable.png";


const commonBenefits = [
  "2 GB of space",
  "4 days of backups",
  "Social integrations",
  "Client billing",
  "Remote access",
  "Custom domain",
  "24 hours support",
  "Admin tools",
  "Collaboration tools",
  "User management",
];

function PriceTable({ plan, price, benefits }) {
  const greenBenefits = benefits.slice(
    0,
    plan === "Starter" ? 4 : plan === "Professional" ? 7 : 10
  );
  const remainingBenefits = benefits.slice(
    plan === "Starter" ? 4 : plan === "Professional" ? 7 : 10
  );

  return (
    <div className="border-white border-opacity-10 border-[2.5px] lg:px-14 lg:py-14 sm:px-8 sm:py-8  text-white mt-3 rounded-lg relative h-[740px] 2xl:w-[370px] xl:w-[300px] lg:w-[280px] md:w-[300px]  sm:w-[230px] max-lg:flex flex-col items-center ">
      <h6 className="font-medium text-[22px]">{plan}</h6>
      <div className="relative flex justify-start mt-5">
        <h3 className="font-semibold mr-2 lg:text-[58px] sm:text-[38px] text-center">
          {price}
        </h3>
        <h5 className="text-xl self-start">$</h5>
      </div>
      <div className="mt-[50px]">
        <ul>
          {greenBenefits.map((benefit, index) => (
            <li key={index} className="flex items-center mb-2">
              <FaCheck className="text-green-500 mr-2" />
              <p className="text-[16px]">{benefit}</p>
            </li>
          ))}
          {remainingBenefits.map((benefit, index) => (
            <li key={index} className="flex items-center mb-2">
              <FaCheck className="text-green-500 mr-2 opacity-0" />
              <p className="opacity-50">{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
      <button className="border-2 border-white border-opacity-35 xl:px-14 xl:py-3 lg:px-10 lg:py-2 sm:px-8 sm:py-2 rounded-full mt-8 xl:text-[20px] lg:text-[15px] sm:text-[14px] hover:bg-rose-500 transition duration-300 xl:h-[60px] xl:w-[230px] lg:h-[50px] lg:w-[180px] sm:h-[60px] sm:w-[150px]">
        Get Started
      </button>
    </div>
  );
}

function PriceTableSection() {
  return (
    <div
      id="pricing"
      className="relative overflow-hidden h-[1130px] max-lg:h-auto text-white overflow-y-auto"
    >
      <img
        src={HeroImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950 to-purple-800 opacity-45"></div>
      <div className="relative md:mx-[100px] md:my-[100px] sm:mx-[20px] sm:my-[70px]">
        <div className="flex flex-col h-[146px] mx-auto md:w-[586px]">
          <h3 className="lg:text-[42px] md:text-[32px] sm:text-[30px] font-semibold text-center leading-[52px]">
            Plans & Pricing
          </h3>
          <h6 className="text-center mt-4 lg:text-[22px] md:text-[18px] sm:text-[15px]">
            Startup Framework is free forever — you only pay for custom domain
            hosting or to export your site.
          </h6>
        </div>
        <div className="flex flex-row justify-evenly max-lg:flex-col items-center mt-4 lg:gap-5">
          <PriceTable plan="Starter" price={9.99} benefits={commonBenefits} />
          <PriceTable
            plan="Professional"
            price={19.99}
            benefits={commonBenefits}
          />
          <PriceTable plan="Team" price={49.99} benefits={commonBenefits} />
        </div>
      </div>
    </div>
  );
}

export default PriceTableSection;
