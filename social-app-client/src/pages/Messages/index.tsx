import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getUserProfile } from "../../store/slices/userSlice";

const Messages = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userValue = useSelector((state: RootState) => state.user.userValue);
  console.log('user: ', userValue)

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <div>Messages</div>
  )
}

export default Messages