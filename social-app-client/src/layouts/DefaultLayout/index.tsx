import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import Chat from "../../components/Chat";
import { Widgets } from "../Widgets";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getUserProfile } from "../../store/slices/userSlice";

const DefaultLayout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const {user} = useSelector((state: RootState) => state.user.userValue);

  useEffect(() => {
    if (!user || !user.fullName) {
      dispatch(getUserProfile());
    }
  }, [dispatch, user]);

  return (
    <div className="flex min-h-screen justify-center max-w-[1500px] mx-auto">
      <div className=" bg-white md:block">
        <Sidebar activePath={location.pathname} />
      </div>
      <div className="w-full max-w-2xl border-x border-gray-200 p-2">
        <Outlet />
      </div>
      {location.pathname === "/messages" ? (
        <div>
          <Chat />
        </div>
      ) : (
        <div className="w-[350px] hidden lg:block ml-4">
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default DefaultLayout