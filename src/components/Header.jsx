import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  function getPathName(path) {
    if (path === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white shadow-sm hover:shadow-md transition-all sticky top-0   ">
      <header className="flex max-w-6xl mx-auto justify-between px-6  items-center">
        <div className="logo cursor-pointer">
          <h1 className="text-2xl tracking-wide font-semibold ">
            easy <span className="text-red-700">home</span>
          </h1>
        </div>
        <div className="flex space-x-10 font-semibold text-gray-500 tracking-wide ">
          <Link to="/">
            <p
              className={` py-3 ${
                getPathName("/") && "border-b-2 border-red-600"
              }  `}
            >
              home
            </p>
          </Link>

          <Link to="/offers">
            <p
              className={` py-3 ${
                getPathName("/offers") && "border-b-2 border-red-600"
              }  `}
            >
              offers
            </p>
          </Link>

          <Link to='/signin' >
            <p
              className={` py-3 ${
                getPathName("/signin") && "border-b-2 border-red-600"
              }  `}
            >
              sign in
            </p>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
