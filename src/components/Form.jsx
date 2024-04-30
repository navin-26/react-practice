import HeroImg from "../assets/form.png";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
  const [isSignupActive, setIsSignupActive] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div id="form-section" className="relative overflow-hidden h-[750px]">
      <img
        src={HeroImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <section className="container mx-auto px-4 py-[100px]  flex flex-col md:flex-row items-center justify-center text-center text-white relative z-10 gap-[80px]">
        <div className="w-[369px] h-[318px] pr-8">
          <h2 className="text-[42px] font-semibold leading-tight text-left">
            We solve digital problems with an outstanding creative flare
          </h2>
          <p className="text-[16px] mt-4 leading-7 text-left font-thin">
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[480px] h-[550px] md:w-1/2 bg-white rounded-lg shadow-md px-0 py-6 max-w-md ml-8 "
        >
          <div className="flex justify-between">
            <span
              className={`w-full border-b-4 pb-4 ${
                isSignupActive ? "border-purple-950" : "border-gray-400"
              }`}
            >
              <button
                onClick={() => setIsSignupActive(true)}
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
                onClick={() => setIsSignupActive(false)}
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
          <div className="px-16 pb-10">
            <h2 className="text-2xl font-bold text-center mb-6">
              {isSignupActive ? "Sign Up" : "Login"}
            </h2>
            <div className="space-y-8">
              <div className="flex flex-col">
                <input
                  type="email"
                  id="email"
                  className="shadow-sm py-2 px-5 w-[330px] h-[50px] placeholder-gray-400
                     text-black border text-[18px] border-gray-300 rounded-3xl"
                  placeholder="Your email"
                  {...register("email", {
                    required: "Username is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "This is not a valid email",
                    },
                  })}
                />
                <p className="text-red-700">{errors.email?.message}</p>
              </div>
              {isSignupActive && (
                <div className="flex flex-col">
                  <input
                    type="password"
                    id="password"
                    className="shadow-sm py-2 px-5 w-[330px] h-[50px] placeholder-gray-400
                     text-black border text-[18px] border-gray-300 rounded-3xl"
                    placeholder="Your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be more than 8 characters",
                      },
                    })}
                  />
                  <p className="text-red-700">{errors.password?.message}</p>
                </div>
              )}
              {!isSignupActive && (
                <div className="flex flex-col ">
                  <input
                    type="password"
                    id="password"
                    className="shadow-sm py-2 px-3 w-full  placeholder-gray-500 text-black border border-gray-300 rounded-3xl"
                    placeholder="Your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be more than 8 characters",
                      },
                    })}
                  />
                  <p className="text-red-700">{errors.password?.message}</p>
                </div>
              )}
              {!isSignupActive && (
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="remember" className="w-4 h-4" />
                    <label htmlFor="remember" className="text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-purple-950 hover:text-indigo-700"
                  >
                    Forgot password?
                  </a>
                </div>
              )}
              <button
                type="submit"
                className="bg-teal-400 text-white py-2 px-4 font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-[330px] h-[50px] rounded-3xl"
              >
                {isSignupActive ? "Create an Account" : "Login"}
              </button>
              <div className="flex items-center my-3">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-4 text-gray-400 ">or</span>
                <hr className="flex-grow border-gray-300" />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-[330px] h-[50px] rounded-3xl"
              >
                {isSignupActive ? "Login via Twitter" : "Login via Twitter"}
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Form;
