import {Menu} from "@mantine/core";
import UserButton from "../UserButton";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {handleLogoutAPI} from "../../api";
import {PiDotsThreeOutlineFill} from "react-icons/pi";
import {useState} from "react";

const UserMenu = () => {
  const navigate = useNavigate();
  const {userValue} = useSelector((state: RootState) => state.user);
  const [opened, setOpened] = useState(false);

  const handleLogout = async () => {
    const success = await handleLogoutAPI();
    if (success) {
      navigate("/login");
    }
  };

  return (
    <Menu withArrow opened={opened} onChange={setOpened}>
      <Menu.Target>
        <div onClick={() => setOpened((o) => !o)}>
          <UserButton
            image="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            name={userValue?.fullName || "Tên không xác định"}
            email={userValue?.email || "Email không xác định"}
            icon={
              <PiDotsThreeOutlineFill size={16} className="hidden sm:block" />
            }
            className="!mb-3"
          />
        </div>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item color="red" onClick={handleLogout}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
