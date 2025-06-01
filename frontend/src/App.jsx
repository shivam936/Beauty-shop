import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Cart from "./page/Cart.jsx"
import Myaccount from "./page/Myaccount.jsx"
import Home from "./page/Home.jsx"
import {RouterProvider , createBrowserRouter, Outlet} from "react-router-dom"
import Announcement from './components/Announcement.jsx'
import Product from './page/Product.jsx'
import Login from "./page/Login.jsx"
import Register from "./page/Register.jsx"
import Productlist from './page/Productlist.jsx'
import Order from './page/Order.jsx'

const App = () => {

  const Layout = () => {
    return (
      <div>
      <Announcement/>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    )
  }
  const router =  createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout/>,
        children: [
          {
            path: "/",
            element: <Home/>
          },
          {
            path: "/Cart",
            element: <Cart/>
          },
          {
            path: "/Myaccount",
            element: <Myaccount/>
          },
          {
            path: "/product/:productId",
            element: <Product/>
          },
          {
            path: "/Login",
            element: <Login/>
          },
          {
            path: "/Register",
            element: <Register/>
          },
          {
            path: "/products/:searchterm",
            element: <Productlist/>
          },
          {
            path: "/order",
            element: <Order/>
          }
        ]
      }    
    ]  
  )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App