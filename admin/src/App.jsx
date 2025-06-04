import {createBrowserRouter , RouterProvider, Outlet} from "react-router-dom"
import Menu from "./components/Menu"
import Home from "./pages/Home"
import Product from "./pages/Products"
import User from "./pages/User"
import Order from "./pages/Orders"
import Banners from "./pages/Banners"

const App = () => {
  const Layout = () => {
        return (
          <div className="flex">

            <div>
              <Menu/>
            </div>

            <div>
              <Outlet/>
            </div>

          </div>
        )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/user",
          element: <User/>
        },
        {
          path: "/products",
          element: <Product/>
        },
        {
          path: "/orders",
          element: <Order/>
        },
        {
          path: "/banner",
          element: <Banners/>

        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App