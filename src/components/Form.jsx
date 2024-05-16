
import HeroImg from "../assets/form.png";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
  const [isSignupActive, setIsSignupActive] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

 

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formErrors = validateForm(formData);
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
 
      console.log("Form submitted:", formData);
    } else {

      console.error("Form validation errors:", formErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    return errors;
  };

  return (
    <div
      id="form-section"
      className="relative overflow-hidden lg:h-[750px] sm:h-auto"
    >
      <img
        src={HeroImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <section className=" mx-auto px-4 py-[100px]  flex lg:flex-row sm:flex-col items-center justify-center text-center text-white relative z-10 gap-[80px]">
        <div className="lg:w-[369px] lg:h-[318px] sm:w-[260px] sm:h-[318px] px-5">
          <h2 className="lg:text-[42px] md:text-[28px] sm:text-[28px] font-semibold leading-tight text-left">
            We solve digital problems with an outstanding creative flare
          </h2>
          <p className="text-[16px] mt-4 leading-7 text-left font-thin">
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </p>
        </div>

        <div className="md:w-[480px] sm:w-[250px]  md:h-[550px] sm:h-auto  bg-white rounded-lg shadow-md  py-6 lg:ml-8 ">
          <div className="flex justify-between">
            <span
              className={`w-full border-b-4 pb-4 ${
                isSignupActive ? "border-purple-950" : "border-gray-400"
              }`}
            >
              <button
                onClick={() => {
                  setIsSignupActive(true);
                  setErrors({});
                  setFormData({});
                }}
                className={`text-[14px] font-semibold focus:outline-none tracking-widest ${
                  isSignupActive
                    ? "text-purple-950"
                    : "text-gray-400 hover:text-purple-950"
                }`}
              >
                SIGN UP
              </button>
            </span>
            <span
              className={`w-full border-b-4 pb-2 ${
                !isSignupActive ? "border-purple-950" : "border-gray-400"
              }`}
            >
              <button
                onClick={() => {
                  setIsSignupActive(false);
                  setErrors({});
                  setFormData({});
                }}
                className={`text-[14px] font-semibold focus:outline-none tracking-widest ${
                  !isSignupActive
                    ? "text-purple-950"
                    : "text-gray-400 hover:text-purple-950"
                }`}
              >
                LOGIN
              </button>
            </span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="md:px-16 md:pb-10 sm:px-8 sm:pb-8"
          >
            <h2 className="text-2xl font-bold text-center mb-6">
              {isSignupActive ? "Sign Up" : "Login"}
            </h2>
            <div className="md:space-y-8 sm:space-y-7">
              {isSignupActive && (
                <>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="shadow-sm py-2 px-5 md:w-[330px] sm:w-auto h-[50px] placeholder-gray-400
                     text-black border text-[18px] border-gray-300 rounded-3xl"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="text-red-700">{errors.email}</p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="shadow-sm py-2 px-5 md:w-[330px] sm:w-auto h-[50px] placeholder-gray-400
                     text-black border text-[18px] border-gray-300 rounded-3xl"
                      placeholder="Your password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <p className="text-red-700">{errors.password}</p>
                  </div>
                </>
              )}
              {!isSignupActive && (
                <>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="shadow-sm py-2 px-5 md:w-[330px] sm:w-auto h-[50px] placeholder-gray-400
                     text-black border text-[18px] border-gray-300 rounded-3xl"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <p className="text-red-700">{errors.email}</p>
                  </div>
                  <div className="flex flex-col ">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="shadow-sm py-2 px-5 md:w-[330px] sm:w-auto h-[50px] placeholder-gray-400
                     text-black border text-[18px] border-gray-300 rounded-3xl"
                      placeholder="Your password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <p className="text-red-700">{errors.password}</p>
                  </div>
                </>
              )}
              {!isSignupActive && (
                <div className="flex items-center justify-between mb-4 text-left">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="remember" className="w-4 h-4" />
                    <label
                      htmlFor="remember"
                      className="md:text-sm sm:text-[12px] text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="md:text-sm sm:text-[12px] text-gray-700 hover:text-indigo-700"
                  >
                    Forgot password?
                  </a>
                </div>
              )}
              <button className="bg-teal-400 text-white py-2 px-4 font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:w-[330px] sm:w-auto h-[50px] rounded-3xl">
                {isSignupActive ? "Create an Account" : "Login"}
              </button>
              <div className="flex items-center md:my-3">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-4 text-gray-400 ">or</span>
                <hr className="flex-grow border-gray-300" />
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:w-[330px] sm:w-auto h-[50px] rounded-3xl">
                {isSignupActive ? "Login via Twitter" : "Login via Twitter"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;