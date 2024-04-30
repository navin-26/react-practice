import { FaPhoneAlt, FaEnvelope, FaBuilding } from "react-icons/fa";
import HeroImg from "../assets/contact.jpeg";
import ScrollIndicator from "./ScrollIndicator";

function ContactForm() {
  return (
    <div className="relative overflow-hidden h-[770px] text-white">
      <img
        src={HeroImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950 to-purple-800 opacity-45"></div>
      <div className="relative mx-48 my-20 flex  justify-between h-auto">
        <div className="py-[50px] w-96">
          <h3 className="text-[42px] font-medium">Let’s Keep in Touch</h3>
          <p className="my-6 text-left font-medium text-[22px]">
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </p>
          <div className="grid grid-rows-3 gap-6 ">
            <div className="flex items-center gap-4 ">
              <FaPhoneAlt className="text-white" />
              <h6>+1 555 505 5050</h6>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-white" />
              <h6>info@designmodo.com</h6>
            </div>
            <div className="flex items-center gap-4">
              <FaBuilding className="text-white" />
              <p className="text-balance">
                San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco,
                230909
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-white rounded-lg shadow-md px-[50px] py-[58px] w-[470px] h-[570px]">
          <form className="text-indigo-950  font-medium ">
            <div className="grid grid-cols-1 gap-y-4 text-sm">
              <div className="flex  gap-4">
                <div className="w-full ">
                  <label
                    htmlFor="name"
                    className="block font-bold tracking-widest text-[14px]"
                  >
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="First name"
                    className="input-field gray-300 border-gray-300 text-black rounded-3xl
                    px-4 py-2 border-2 mt-2
                    w-[200px] h-[50px]
                    placeholder-text
                    "
                  />
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block font-bold tracking-widest text-[14px]"
                  >
                    BUDGET
                  </label>
                  <select
                    id="budget"
                    className="mt-2 input-field font-bold 
                    border-2 border-gray-300 text-indigo-950 rounded-3xl py-2 px-3 w-[140px] h-[50px] text-[18px]"
                  >
                    <option value="">500$</option>
                    <option value="low">700$</option>
                    <option value="medium">800$</option>
                    <option value="high">1000$</option>
                  </select>
                </div>
              </div>
              <div className="w-full mt-2 mb-2">
                <label
                  htmlFor="email"
                  className="block font-bold tracking-widest"
                >
                  INPUT FIELD
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder=" name@mail.com"
                  className="input-field input-field gray-300 border-gray-300 text-black rounded-3xl
                    px-4 py-2 border-2  mt-2 w-[370px] h-[50px] placeholder-text"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="message"
                  className="block font-bold tracking-widest"
                >
                  YOUR MESSAGE
                </label>
                <textarea
                  id="message"
                  placeholder=" Message "
                  className="mt-2 input-field  border-2 border-gray-300 w-[370px] h-[110px] px-3 py-5 placeholder-text"
                ></textarea>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-teal-600"
                />
                <span className="ml-2 text-gray-400 text-[18px]">
                  Send me a copy
                </span>
              </label>
              <button
                type="submit"
                className="bg-teal-400 text-white py-2 px-6 rounded-full h-[50px] w-[120px] text-[18px]"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <ScrollIndicator />
      </div>
    </div>
  );
}

export default ContactForm;
