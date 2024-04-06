import { useRoutes, BrowserRouter, useNavigate } from "react-router-dom"
import Home from "../Home"
import NotFound from "../NotFound"
import { PerfumesProvider } from "../../Context"
import NavBar from "../../components/NavBar"
import Login from "../Login/Login"

import './App.css'
import AdminProducts from "../../components/AdminProducts"
import Footer from "../../components/Footer"
import Checkout from "../Checkout"
import Pedidos from "../Pedidos"
import ContactoVentasPorMayor from "../VentasPorMayor"
import ScrollToTopOnRouteChange from "../../components/ScrollTop"
import {Toaster} from 'react-hot-toast'
import Signup from "../Signup"
import { ProtectedRouteForAdmin } from "../../ProtectedRoute/ProtectedRouteForAdmin"
import Cuenta from "../Cuenta"
import ProductDetail from "../../components/ProductDetail"
import FeedBack from "../FeedBack"

const AppRoutes=()=>{
  let routes=useRoutes([
    {path: '/', element :<Home/>},
    {path: '/Productos', element :<ProtectedRouteForAdmin><AdminProducts/></ProtectedRouteForAdmin>},
    {path: '/category/:categoryname', element :<Home/>},
  
    {path: '/Login', element :<Login/>},
    {path: '/checkout', element :<Checkout/>},
    {path: '/pedidos', element :<ProtectedRouteForAdmin><Pedidos/></ProtectedRouteForAdmin>},
    {path: '/registrarse', element :<Signup/>},
    {path: '/cuenta', element :<Cuenta/>},
    {path: '/productdetail/:id', element :<ProductDetail/>},
    {path: '/feedback', element :<FeedBack/>},


    // {path:'/MyAccount',element: <MyAccount/>},
    // {path:'/MyOrder',element: <MyOrder/>},
    // {path:'/MyOrders',element: <MyOrders/>},
    // {path:'/MyOrders/last',element: <MyOrder/>},
    // {path:'/MyOrders/:id',element: <MyOrder/>},

    // {path:'/SignIn',element: <SignIn/>},
    {path:'/*',element: <NotFound/>},
  ])
  return routes;
}

const App=()=> {

 

  return (
    <PerfumesProvider>
      <BrowserRouter>
      
        <NavBar />
        <ScrollToTopOnRouteChange/>
        <AppRoutes />
        <Toaster/>
        <Footer/>

      </BrowserRouter>
    </PerfumesProvider>

  )
}

export default App
