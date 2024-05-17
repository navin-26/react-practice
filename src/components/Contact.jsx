import { FaPhoneAlt, FaEnvelope, FaBuilding } from "react-icons/fa";
import HeroImg from "../assets/contact.png";

import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      id="contacts"
      className="relative overflow-hidden lg:h-[770px] sm:h-auto text-white "
    >
      <img
        src={HeroImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="relative mx-auto my-20 flex  lg:justify-evenly lg:flex-row sm:flex-col sm:items-center">
        <div className="py-[50px] md:w-96 sm:w-[200px]">
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
        <div className=" bg-white rounded-lg shadow-md md:px-[50px] md:py-[58px] sm:px-[30px] sm:py-[38px] md:w-[470px] sm:w-[275px] h-auto">
          <form
            className="text-indigo-950  font-medium "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 gap-y-4 text-sm">
              <div className="flex md:flex-row sm:flex-col gap-4">
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
                    className={`input-field gray-300 border-gray-300 text-black rounded-3xl px-4 py-2 border-2 mt-2 md:w-[200px] sm:w-auto h-[50px] placeholder-text ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    {...register("name", {
                      required: "Name is required",
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Name can only contain letters",
                      },
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
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
                    className="mt-2 input-field font-bold border-2 border-gray-300 text-indigo-950 rounded-3xl py-2 px-3 md:w-[140px]  h-[50px] text-[18px]"
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
                  className="block font-bold tracking-widest text-[14px]"
                >
                  INPUT FIELD
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder=" name@mail.com"
                  className={`input-field gray-300 border-gray-300 text-black rounded-3xl px-4 py-2 border-2 mt-2 md:w-[370px] sm:w-auto h-[50px] placeholder-text ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
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
                  className="mt-2 input-field border-2 border-gray-300 md:w-[370px] sm:w-auto h-[110px] px-3 py-5 placeholder-text "
                  required
                ></textarea>
              </div>
            </div>
            <div className="mt-4 flex md:flex-row sm:flex-col justify-between">
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
                className="bg-teal-400 text-white py-2 px-6 rounded-full h-[50px] w-[120px] text-[18px] max-md:mt-4"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
