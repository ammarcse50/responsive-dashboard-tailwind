import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const Navbar = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <div className="bg-gray-800  px-4  py-3 flex justify-between ">
      <div className="flex items-center  text-white text-nowrap">
        <FaBars className="text-white me-4 cursor-pointer" onClick={()=>setSidebarToggle(!sidebarToggle)} />
        <span className="font-bold text-xl">E-commerce</span>
      </div>
      <div className="flex items-center w-full gap-x-5">
        <div className="relative md:w-65  text-nowrap">
          <span className="">
            <button>
              <FaSearch className="text-white  mx-2" />
            </button>
          </span>
          <input type="text" className="w-full hidden md:block" />
        </div>
      </div>

      <div className="text-white">
        <FaBell className="h-6 w-6" />
      </div>

      <div className="relative">
        <button className="text-white group">
          <FaUserCircle className="w-6 h-6 " />

          <div className="z-10 hidden absolute shadow rounded-lg w-32 group-focus:block top-full right-0">
            <ul className="py-2 text-sm text-gray-950">
              <li>
                <a href="">Profile</a>
              </li>
              <li>
                <a href="">Setting</a>
              </li>
              <li>
                <a href="">Log Out</a>
              </li>
            </ul>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
