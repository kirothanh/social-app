import { Outlet } from "react-router-dom"

const NoLayout = () => {
  return (
    <>
    <Outlet />
    <h1>hi</h1>
    </>
  )
}

export default NoLayout