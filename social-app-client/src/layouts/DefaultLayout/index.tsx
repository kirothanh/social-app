import {Outlet, useLocation} from "react-router-dom";
import Sidebar from "../Sidebar";
import Chat from "../../components/Chat";
import {Widgets} from "../Widgets";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";
import {useEffect} from "react";
import {getUserProfile} from "../../store/slices/userSlice";
import {LoadingOverlay} from "@mantine/core";
import WhoToFollow from "../../components/WhoToFollow";

const DefaultLayout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const {userValue, loading} = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    if(userValue) {
      localStorage.setItem("userId", userValue._id);
    }
  }, [userValue]);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <div className="flex min-h-screen justify-center max-w-[1500px] mx-auto">
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />

      <div className=" bg-white md:block">
        <Sidebar activePath={location.pathname} />
      </div>
      <div className="w-full max-w-2xl border-x border-gray-200 p-2 h-screen">
        <Outlet />
      </div>
      {location.pathname === "/messages" ? (
        <div className="w-[350px] hidden lg:block space-y-5 h-screen">
          <Chat />
        </div>
      ) : (
        <div className="w-[350px] hidden lg:block ml-4 mt-5 space-y-5">
          <Widgets />
          <WhoToFollow />
        </div>
      )}
    </div>
  );
};

export default DefaultLayout;
