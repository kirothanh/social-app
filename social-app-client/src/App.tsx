import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="auth" element={<Auth />} />
      </Routes>
    </div>
  )
}
