import { useNavigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
  }, [accessToken, navigate]);

  return <>{accessToken ? children : null}</>;
}
