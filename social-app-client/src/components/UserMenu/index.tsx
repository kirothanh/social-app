import {Menu} from "@mantine/core";
import UserButton from "../UserButton";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {handleLogoutAPI} from "../../api";

const UserMenu = () => {
  const navigate = useNavigate();
  const userValue = useSelector((state: RootState) => state.user.userValue);
  console.log("first", userValue);

  const handleLogout = async () => {
    const success = await handleLogoutAPI();
    if (success) {
      navigate("/login");
    }
  };

  return (
    <Menu withArrow>
      <Menu.Target>
        <UserButton
          image="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          name="Harriette Spoonlicker"
          email="hspoonlicker@outlook.com"
        />
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
