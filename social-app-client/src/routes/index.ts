import config from "../config";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

const routes = [
  {
    path: config.routes.home,
    component: Home
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
    layout: null,
  }

]

export default routes;