import config from "../config";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Messages from "../pages/Messages";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

// undefined -> DefaultLayout
// null -> NoLayout
// somelayout -> Somelayout

const routes = [
  {
    path: config.routes.home,
    component: Home,
  },
  // Auth
  {
    path: config.routes.login,
    component: Login,
    layout: null
  },
  {
    path: config.routes.register,
    component: Register,
    layout: null
  },
  // User
  {
    path: config.routes.profile,
    component: Profile,
    protected: true,
  },
  {
    path: config.routes.messages,
    component: Messages,
    protected: true,
  },
  {
    path: config.routes.notifications,
    component: Notifications,
    protected: true,
  },
]

export default routes;