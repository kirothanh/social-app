import { Route, Routes } from "react-router-dom"
import routes from "../../routes"
import ProtectedRoute from "../ProtectedRoute"
import { Fragment } from "react"
import DefaultLayout from "../../layouts/DefaultLayout"
import NoLayout from "../../layouts/NoLayout"

const AppRoutes = () => {
  return (
    <Routes>
      {
        routes.map((route) => {
          const Layout = route.layout === undefined ? DefaultLayout : route.layout || NoLayout
          const Component = route.component;
          const RouteElement = route.protected ? ProtectedRoute : Fragment

          return (
            <Route key={route.path} element={<Layout />}>
              <Route 
                path={route.path}
                element={
                  <RouteElement>
                    <Component />
                  </RouteElement>
                }
              />
            </Route>
          )
        })
      }
    </Routes>
  )
}

export default AppRoutes