import { useState } from "react";

import Lock from "../assets/lock.jpg";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email sent")
    } catch (error) {
      toast.error("Something went wrong with the action");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-bold tracking-wide text-center  my-6">
        forgot password
      </h1>
      <div className=" my-10 flex flex-wrap items-center">
        <div className="w-full md:w-[80%] mx-auto lg:w-[50%]">
          <img className="rounded w-full" src={Lock} alt="sign-in" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full mx-auto  md:w-[80%]  lg:w-[40%] my-8"
        >
          <input
            className=" text-2xl capitalize  w-full py-2 px-4 rounded border-gray-500 border my-4  "
            placeholder="email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative"></div>
          <div className="flex justify-between sm:text-lg items-center my-3">
            <p>
              don't have an account?
              <Link to="/signup">
                <span className="text-red-700 font-semibold cursor-pointer mx-1">
                  register
                </span>
              </Link>
            </p>
            <Link to="/signin">
              <p className="text-blue-700 font-semibold cursor-pointer">
                sign in instead
              </p>
            </Link>
          </div>
          <button
            className="bg-green-500 w-full rounded text-xl text-white uppercase py-2  hover:bg-green-600 active:bg-green:700 transition-all my-3 shadow-md hover:shadow-lg "
            type="submit"
          >
            send reset email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
