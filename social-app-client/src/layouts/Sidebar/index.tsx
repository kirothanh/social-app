import {FaHome, FaUser} from "react-icons/fa";
import {IoNewspaper, IoNotificationsSharp} from "react-icons/io5";
import {RiMessage2Fill} from "react-icons/ri";
import {Link} from "react-router-dom";
import UserMenu from "../../components/UserMenu";

interface ISidebarProps {
  activePath: string;
}

const Sidebar = ({activePath}: ISidebarProps) => {
  const menuItems = [
    {path: "/", label: "Home", icon: <FaHome className="text-2xl" />},
    {path: "/profile", label: "Profile", icon: <FaUser className="text-2xl" />},
    {
      path: "/messages",
      label: "Messages",
      icon: <RiMessage2Fill className="text-2xl" />,
    },
    {
      path: "/notifications",
      label: "Notifications",
      icon: <IoNotificationsSharp className="text-2xl" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="p-4 max-w-[275px] flex flex-col justify-between h-full">
        <div>
          <h1 className="text-xl font-bold mb-6 p-2 cursor-pointer">X Clone</h1>
          <ul className="space-y-4 ">
            {menuItems.map((item) => (
              <li
                key={item.path}
                className={`flex items-center p-2 rounded-full cursor-pointer hover:bg-gray-200 ${
                  activePath === item.path ? "bg-gray-300 font-bold" : ""
                }`}
              >
                <Link to={item.path} className="flex items-center justify-center md:justify-start w-full">
                  {item.icon}
                  <span className="hidden md:block ml-4 text-lg font-medium">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="md:hidden mt-6  flex items-center justify-center p-2 rounded-full cursor-pointer bg-black text-white hover:opacity-80">
            <IoNewspaper className="text-2xl" />
          </div>
          <button className="hidden md:block mt-6 w-full bg-black text-white py-2 rounded-full hover:opacity-80 cursor-pointer">
            Post
          </button>
        </div>
      </div>
      <UserMenu />
    </div>
  );
};

export default Sidebar;
