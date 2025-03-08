import { ReactNode, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const AuthRoute = ({ children }: { children: ReactNode }) => {
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  return <>{!accessToken && children}</>;
}

export default AuthRoute