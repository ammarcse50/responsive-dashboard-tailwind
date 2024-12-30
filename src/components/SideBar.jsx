import { FaHome } from "react-icons/fa";

const SideBar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-gray-800 fixed h-full px-4 py-4`}>
      <div>
        <h2 className="text-2xl text-white font-bold">Admin-Dashboard</h2>{" "}
      </div>
      <hr />
      <ul className="text-white mt-3 font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-red-500 py-2">
          <a href="" className="px-3">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2 " />
            Home
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-red-500 py-2">
          <a href="" className="px-3">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2 " />
            Home
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-red-500 py-2">
          <a href="" className="px-3">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2 " />
            Home
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-red-500 py-2">
          <a href="" className="px-3">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2 " />
            Home
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
