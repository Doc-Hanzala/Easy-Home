import { FcGoogle } from "react-icons/fc";

const GoogleBtn = () => {
  return (
    <button
      className="bg-slate-500 w-full rounded text-xl text-white uppercase py-2  hover:bg-slate-600 active:bg-green:700 transition-all my-3 shadow-md hover:shadow-lg flex justify-center items-center "
      type="submit"
    >
      <FcGoogle className="text-2xl mx-3 bg-white rounded-full" /> continue with google
    </button>
  );
};

export default GoogleBtn;
