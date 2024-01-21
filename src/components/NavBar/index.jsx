import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { PerfumesContext } from "../../Context"
import { useState } from "react"
import CheckOutSideMenu from "../CheckOutSideMenu"
import React from "react"

const NavBar = () => {

  const { count,closeCheckOutSideMenu, isCheckOutSideMenuOpen, setSearchByCategory, cartProducts, setSearchByTitle, openCheckOutSideMenu } = useContext(PerfumesContext);


  const activeStyle = 'relative left-1 before:content-[">"] before:mr-1 font-bold text-[#d69511]'
  // const activeStyle = 'underline underline-offset-4'

  const [isOpenMenu,setIsOpenMenu ]=useState(false);
  const openSideMenu=()=>setIsOpenMenu(true);
  const closeSideMenu=()=>setIsOpenMenu(false);


  return (
  
    <nav className="sm:max-h-[110px] bg-[#0f0927] flex flex-col w-full   items-center fixed z-10 top-0 py-2  px-20  text-sm  font-semibold sm:py-1 sm:px-2 ">
      <div className="sm:max-h-[55px] items-center w-full flex justify-between">
<button className="bg-[#0f0927] hidden  sm:w-[45px] sm:h-[45px] sm:flex" onClick={openSideMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button> 
        {/* fondo oscuro al abrir menu o CHECKOUT */}
     <div
     onClick={()=>{
      closeSideMenu()
      closeCheckOutSideMenu()
    }}
      className={`sm:bg-black sm:absolute sm:left-0 sm:top-0 sm:w-[100vw] sm:h-[100vh]  ${isOpenMenu || isCheckOutSideMenuOpen ?'sm:flex':'sm:hidden'} hidden opacity-50   items-start gap-3 sm:flex-col`}></div>
     <aside  className={`sm:bg-[#E5E0FF] sm:absolute sm:left-0 sm:top-0 sm:w-[70vw] sm:h-[80vh]  ${isOpenMenu?'sm:flex':'sm:hidden'}   items-start  sm:flex-col`}>

{/* boton CERRAR MENU */}
     <button
      className="bg-[transparent] sm:mt-1 sm:ml-1 sm:w-[45px] sm:h-[45px] hidden sm:flex"
      onClick={()=>closeSideMenu()}
      >
      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
</button>
    
      <ul className="menu-mobile sm:mt-8 sm:text-[1rem] sm:block   sm:w-full sm:text-start flex  gap-[20px]">
        <li className="sm:pl-2 sm:py-3 sm:border-b-[1px] sm:border-b-gray-400 sm:border-t-[1px] sm:border-t-gray-400">

          <NavLink
            to='/'

            onClick={() => {
              setSearchByTitle(null)
              setSearchByCategory()

            }}
            className={({ isActive }) =>
              isActive ? activeStyle : 'text-white sm:text-inherit'
            }>
            INICIO
          </NavLink>
        </li>

        <li className="sm:pl-2 sm:py-3 sm:border-b-[1px] sm:border-b-gray-400">
          <NavLink
            to='/Hombres'
            onClick={() => {
              setSearchByTitle(null)

              setSearchByCategory('hombre')
            }}

            className={({ isActive }) =>
              isActive ? activeStyle : 'text-white sm:text-inherit'
            }>
            HOMBRES
          </NavLink>
        </li>

        <li className="sm:pl-2 sm:py-3 sm:border-b-[1px] sm:border-b-gray-400">
          <NavLink
            to='/Mujeres'
            onClick={() => {
              setSearchByTitle(null)

              setSearchByCategory('mujer')
            }}

            className={({ isActive }) =>
              isActive ? activeStyle : 'text-white sm:text-inherit'
            }>
            MUJERES
          </NavLink>
        </li>

        <li className="sm:pl-2 sm:py-3 sm:border-b-[1px] sm:border-b-gray-400">
          <NavLink
            to='/Others'
            onClick={() => {
              setSearchByTitle(null)

              setSearchByCategory('vela')
            }}

            className={({ isActive }) =>
              isActive ? activeStyle : 'text-white sm:text-inherit'
            }>
            VELAS AROMÁTICAS
          </NavLink>
        </li>
      </ul>

      </aside>


     <div className="font-bold text-lg sm:w-[55%] w-[20%] ">
          <NavLink
            className='flex justify-center'
            to='/'
            onClick={() => {
              setSearchByTitle(null)
              setSearchByCategory()

            }}
          >
            <img className="sm:max-h-[84px] " src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/47f69a177918813.652dc0aac3da7.png" alt="" />
          </NavLink>
    </div>

  


      <ul className="nav-rigth flex items-center gap-3 sm:hidden">
       

        <li>
          <NavLink
            to='/MyOrders' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            MyOrders
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/MyAccount' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            MyAccount
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/SignIn' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            SignIn
          </NavLink>
        </li>
      </ul>

      <button
        onClick={() => {
        openCheckOutSideMenu()
        closeSideMenu()
         }}
        className="  flex items-center justify-center border-none min-h-[50px] min-w-[55px] h-[50px] w-[55px] p-1  bg-[#0f0927]  text-white font-semibold shadow-md transform hover:scale-105 transition duration-300">
  
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"  stroke="currentColor"  className="relative sm:top-0 sm:right-1 sm:w-full sm:h-[75%] text-[#26eb6e]">
          <path fill="#26eb6e" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
        <span
       className="absolute top-2.5 ">
          {cartProducts.length}
          {/* {count} */}
        </span
      >
      </button>
      
      <CheckOutSideMenu/>
      </div>
      <div className=" w-[100%]">
      <input 
    className="sm:mt-1 sm:mb-1 sm:w-[100%] mt-1 rounded-lg border-2 border-[#0f0927] w-100 p-2  focus:outline-none w-[400px]"
    onChange={(event)=>setSearchByTitle( event.target.value)}
    type="search" 
    placeholder="Busca tu perfume" />
      </div>
    </nav>
  )
}

export default NavBar;