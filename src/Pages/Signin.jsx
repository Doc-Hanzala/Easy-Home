import { useState } from "react";
import Lock from "../assets/lock.jpg";

import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import GoogleBtn from "../components/GoogleBtn";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-bold tracking-wide text-center  my-6">
        signin
      </h1>
      <div className=" my-10 flex flex-wrap items-center">
        <div className="w-full md:w-[80%] mx-auto lg:w-[50%]">
          <img className="rounded w-full" src={Lock} alt="sign-in" />
        </div>
        <form className="w-full mx-auto  md:w-[80%]  lg:w-[40%] my-8">
          <input
            className=" text-2xl capitalize  w-full py-2 px-4 rounded border-gray-500 border my-4  "
            placeholder="email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <input
              className=" text-2xl capitalize  w-full py-2 px-4 rounded border-gray-500 border my-4"
              placeholder="password "
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaRegEye
                onClick={() => setShowPassword(!showPassword)}
                className=" cursor-pointer absolute top-8 right-2 text-xl text-red-700"
              />
            ) : (
              <FaEyeSlash
                className=" cursor-pointer absolute top-8 right-2 text-xl text-red-700"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          <div className="flex justify-between items-center my-3">
            <p>
              don't have an account?
              <Link to="/signup">
                <span className="text-red-700 font-semibold cursor-pointer mx-1">
                  register
                </span>
              </Link>
            </p>
            <Link to="/forgot-password">
              <p className="text-blue-700 font-semibold cursor-pointer mx-1">
                forgot password?
              </p>
            </Link>
          </div>
          <button
            className="bg-green-500 w-full rounded text-xl text-white uppercase py-2  hover:bg-green-600 active:bg-green:700 transition-all my-3 shadow-md hover:shadow-lg "
            type="submit"
          >
            sign in
          </button>
          <div className="before:border-t before:border-red-700 flex before:flex-1 after:border-t after:flex-1  after:border-red-700 items-center">
            <h1 className="uppercase font-semibold text-xl text-center mx-4 ">
              or
            </h1>
          </div>
          <GoogleBtn />
        </form>
      </div>
    </div>
  );
};

export default Signin;
 