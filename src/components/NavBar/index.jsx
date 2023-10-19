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
  
    <nav className="sm:max-h-[110px] bg-[#0f0927] flex flex-col w-full   items-center fixed z-10 top-0 py-2  px-8  text-sm  font-semibold sm:py-1 sm:px-2 ">
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
    
      <ul className="menu-mobile sm:mt-8 sm:text-[1rem] sm:block   sm:w-full sm:text-start flex  gap-[30px]">
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

  


      <ul className="flex items-center gap-3 sm:hidden">
        <li className="text-black/60">
          Deisy Lorena
        </li>

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
       className="flex justify-center items-end border-none h-[50px] w-[55px] p-2 bg-[#0f0927] hover:bg-[#26eb6e] text-white font-semibold shadow-md transform hover:scale-105 transition duration-300">
        <svg
          
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-5 h-9 absolute   top-3 right-7 sm:top-0 sm:right-0 sm:w-full sm:h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>

        <p
       className=" ">
          {cartProducts.length}
          {/* {count} */}
        </p
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