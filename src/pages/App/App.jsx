import { useRoutes, BrowserRouter } from "react-router-dom"
import Home from "../Home"
import NotFound from "../NotFound"
import { PerfumesProvider } from "../../Context"
import NavBar from "../../components/NavBar"
import ProductDetail from "../../components/ProductDetail"

import './App.css'

const AppRoutes=()=>{
  let routes=useRoutes([
    {path: '/', element :<Home/>},
    {path: '/Hombres', element :<Home/>},
    {path: '/Mujeres', element :<Home/>},
    {path: '/Others', element :<Home/>},

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
        <AppRoutes />
        <ProductDetail/>

      </BrowserRouter>
    </PerfumesProvider>

  )
}

export default App
