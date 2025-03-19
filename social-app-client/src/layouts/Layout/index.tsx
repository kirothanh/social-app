import { ReactNode, useEffect } from 'react';
import Sidebar from '../Sidebar';
import { Widgets } from '../Widgets';
import { useLocation } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../store/slices/userSlice';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const {user} = useSelector((state: RootState) => state.user.userValue);

  useEffect(() => {
    if (!user || !user.fullName) {
      dispatch(getUserProfile()); 
    }
  }, [dispatch, user]);

  return (
    <div className="flex min-h-screen justify-center">
      <div className=" bg-white md:block">
        <Sidebar activePath={location.pathname}/>
      </div>
      <div className="w-full max-w-2xl border-x border-gray-200 p-2">
        {children}
      </div>
      <div className="w-[350px] hidden lg:block ml-4">
        <Widgets />
      </div>
    </div>
  );
};

export default Layout