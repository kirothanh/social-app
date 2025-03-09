import { Menu } from "@mantine/core"
import UserButton from "../UserButton"
import authorizedAxiosInstance from "../../config/authorizedAxios";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";

const UserMenu = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await authorizedAxiosInstance.delete("/auth/logout");
    const {success, message, error} = res.data;
    console.log('res', res.data);
    if (success) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      notifications.show({
        title: "Logout Successful",
        message: message,
        color: "teal",
        autoClose: 3000,
        position: 'top-right',
      });

      navigate("/login");
    } else {
      notifications.show({
        title: message || "Logout Error",
        message:  error || "An error occurred",
        color: "red",
        autoClose: 3000,
        position: 'top-right',
      });
    }
  }

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
        <Menu.Item color="red" onClick={handleLogout}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default UserMenu