import { FaCheck } from "react-icons/fa";
import HeroImg from "../assets/pricingTable.jpeg";
import ScrollIndicator from "./ScrollIndicator";


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
    <div className="border-white border-opacity-10 border-4 px-14 py-14 h-auto text-white mt-3 rounded-lg relative">
      <p className="font-medium">{plan}</p>
      <div className="relative flex justify-start mt-5">
        <h3 className="text-5xl mr-2">{price}</h3>
        <h5 className="text-xl self-start">$</h5>
      </div>
      <div className="mt-6">
        <ul>
          {greenBenefits.map((benefit, index) => (
            <li key={index} className="flex items-center mb-2">
              <FaCheck className="text-green-500 mr-2" />
              <p>{benefit}</p>
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
      <button className="border-2 border-white border-opacity-35 px-14 py-3 rounded-full mt-8 text-lg hover:bg-rose-500 transition duration-300">
        Get Started
      </button>
    </div>
  );
}

function PriceTableSection() {
  return (
    <div className="relative overflow-hidden h-full text-white overflow-y-auto">
      <img
        src={HeroImg}
        alt=""
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950 to-purple-800 opacity-45"></div>
      <div className="relative mx-40 my-12  ">
        <div className="flex flex-col w-96 h-full mx-auto">
          <h3 className="text-4xl font-bold text-center">Plans & Pricing</h3>
          <h6 className="text-center mt-4">
            Startup Framework is free forever — you only pay for custom domain
            hosting or to export your site.
          </h6>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <PriceTable plan="Starter" price={9.99} benefits={commonBenefits} />
          <PriceTable
            plan="Professional"
            price={19.99}
            benefits={commonBenefits}
          />
          <PriceTable plan="Team" price={49.99} benefits={commonBenefits} />
        </div>
        <ScrollIndicator />
      </div>
    </div>
  );
}

export default PriceTableSection;
