import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const isAuthenticated = true;

  return (
    isAuthenticated ? children : <Navigate to="/" />
  )
}
