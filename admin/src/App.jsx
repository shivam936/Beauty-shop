import {createBrowserRouter , RouterProvider, Outlet} from "react-router-dom"
import Menu from "./components/Menu"
import Home from "./pages/Home"
import Products from "./pages/Products"
import User from "./pages/User"
import Order from "./pages/Orders"
import Banners from "./pages/Banners"
import Product from "./pages/Product"
import NewProduct from "./pages/NewProduct"

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
          element: <Products/>
        },
        {
          path: "/orders",
          element: <Order/>
        },
        {
          path: "/banner",
          element: <Banners/>
        },
        {
          path: "/product/:productId",
          element: <Product/>
        },
        {
          path: "/newProduct",
          element: <NewProduct/>
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