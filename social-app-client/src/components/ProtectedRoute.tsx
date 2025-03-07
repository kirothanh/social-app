import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const isAuthenticated = false;

  return (
    isAuthenticated ? children : <Navigate to="/login" />
  )
}
