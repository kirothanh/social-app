import { Outlet } from "react-router-dom"

const NoLayout = () => {
  return (
    <>
    <Outlet />
    <h1>NoLayout</h1>
    </>
  )
}

export default NoLayout