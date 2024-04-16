import { useContext } from "react"
import { PerfumesContext } from "../../Context"
import { NavLink } from "react-router-dom"

import { useState } from "react"
import CheckOutSideMenu from "../CheckOutSideMenu"
import React from "react"
import SettingsBar from "../SettingsBar"
import InputSearch from "../InputSearch"

const NavBar = () => {

  const { count, closeCheckOutSideMenu, isCheckOutSideMenuOpen,isOpenMenu, setSearchByCategory, cartProducts, setSearchByTitle, openCheckOutSideMenu, closeSideMenu, openSideMenu,openAcountSideMenu } = useContext(PerfumesContext);


  const activeStyle = 'underline underline-offset-4 flex  border-b-8 border-b-blue-ligth  '



  return (

    <nav className="sm:max-h-[auto]  flex flex-col   items-center  z-10 top-0  pt-10   text-sm  font-semibold sm:py-1 sm:px-2 ">
      <SettingsBar />

      <div className="items-center px-8 pr-10 sm:h-[100%] sm:px-2  w-full flex pt-0  justify-between ">
        <button className=" bg-none hidden flex-col sm:h-[56px]  sm:flex"
          onClick={()=>openSideMenu()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8338EC" className="w-10 h-10 relative top-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <p>        
              Menú
          </p>
        </button>
        
        {/* fondo oscuro al abrir menu o CHECKOUT */}
        {/* <div
     onClick={()=>{
      closeSideMenu()
      closeCheckOutSideMenu()
    }}
      className={`sm:bg-black sm:absolute sm:left-0 sm:top-0 sm:w-[100vw] sm:h-[100vh]  ${isOpenMenu || isCheckOutSideMenuOpen ?'sm:flex':'sm:hidden'} hidden opacity-50   items-start gap-3 sm:flex-col`}>

      </div> */}


        <div className=" sm:w-[60%] sm:hidden ">
          <NavLink
            className='flex justify-center'
            to='/'
            onClick={() => {
              setSearchByTitle(null)
              setSearchByCategory(null)
              closeSideMenu()

            }}
          >
            <img className="sm:h-[60px] sm:w-full w-[280px]" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/47f69a177918813.652dc0aac3da7.png" alt="" />
          </NavLink>
        </div>


        <div className="flex sm:w-full sm:mx-2 items-center rounded-sm bg-white ">
          <InputSearch />
          <span className="bg-transparent rounded-md  cursor-pointer">
            <svg width="28px" height="28px" className="my-2 mx-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
              <g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
           
          </span>
        </div>
            <svg 
    onClick={openAcountSideMenu}
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 text-purple  hover:cursor-pointer">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
        <button
          onClick={() => {
            openCheckOutSideMenu()
            closeSideMenu()
          }}
          className="flex items-center justify-center 
          border-none  h-[50px] w-[80px] p-1  bg-purple  text-white font-semibold 
          shadow-md transform hover:scale-105 transition duration-300 
          sm:absolute sm:top-2 sm:right-4 sm:w-[60px] sm:h-[35px] sm:gap-2
           "
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" stroke="currentColor"
            className="absolute h-6 w-6 sm:relative  sm:top-0 top-5
             text-[white] sm:right-0
           sm:h-6 sm:w-5
           ">
            <path fill="#F4F4F4" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
          <span className="hidden sm:block">:{cartProducts.length}</span>


          <span className="absolute top-1 sm:hidden">{cartProducts.length} </span>



        </button>

        <CheckOutSideMenu />
      </div>

      <div className={`${isOpenMenu ? 'sm:flex ' : 'sm:hidden'} sm:absolute sm:z-30   sm:left-0 sm:top-0 sm:w-[auto] bg-white w-full mt-2 items-start `}>
        <ul className={`menu-desktop flex px-40   text-[16px]  justify-between  categories 
           sm:text-[1rem]   
           sm:text-start sm:px-0 sm:w-[60vw]  sm:fixed sm:top-0 sm:bg-purple  sm:flex-col
           
          `}>



          {/* <div className={`  sm text-start text-[1.4rem] py-[10px]  bg-orange font-bold mr-2 sm:px-4 `}>
            <button
              className="bg-[transparent] sm:w-[45px] sm:h-[45px]  hidden sm:flex"
              onClick={() => closeSideMenu()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            Categorias</div> */}

          {/* <li className="sm:pl-2 px-0     sm:py-3 sm:border-b-[1px] sm:border-b-gray-400">
       
            <details name="editar" className=' p-[10px] w-full relative border-none open:text-white open:z-20  open:bg-orange'>
              <summary  
              className='cursor-pointer  h-full text-start text-white hover:text-black text-[18px] font-medium'>Bienestar</summary>
              <div className="absolute shadow-xl shadow-black sm:left-20 top-14 left-0 w-[240px] bg-purple">
                <NavLink
                  to='/category/suplementos'
                  onClick={() => {
                    setSearchByTitle(null)
                    closeSideMenu()
                    setSearchByCategory('suplementos')
                  }}

                  className={({ isActive }) =>
                    isActive ? activeStyle : 'flex hover:bg-blue-ligth sm:text-inherit'
                  }>
                  <figure className="flex items-center">
                    <img width="40" height="40" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-protein-fitness-kiranshastry-solid-kiranshastry.png" alt="Suplementos" />
                    <figcaption className="flex justify-center">Suplementos</figcaption>
                  </figure>           
                  
                   </NavLink>
                <NavLink
                  to='/category/implementosdeportivos'
                  onClick={() => {
                    setSearchByTitle(null)
                    closeSideMenu()
                    setSearchByCategory('implementosdeportivos')
                  }}

                  className={({ isActive }) =>
                    isActive ? activeStyle : 'flex hover:bg-blue-ligth sm:text-inherit'
                  }>
                  <figure className="flex items-center relative">
                  <img width="30" height="30" src="https://img.icons8.com/pulsar-line/48/sports.png" alt="Implementos deportivos" />
                  <img className="absolute top-2.5 transform rotate-45  left-3.5" width="30" height="30" src="https://img.icons8.com/dotty/80/000000/rubber-gloves.png" alt="Implementos deportivos" />
                  <figcaption className="ml-4">Implementos deportivos</figcaption>

                </figure>
                   </NavLink>

              
              </div>
            </details>
           
          </li> */}

          <li className="sm:pl-3 sm:flex sm:gap-2 p-0 sm:py-3 sm:border-b-[1px] hover:bg-blue-ligth sm:border-t-[1px] sm:border-t-gray-400">
                    <NavLink

              to='/category/perfumes-para-hombre'
              onClick={() => {
                setSearchByTitle(null)
                closeSideMenu()
                setSearchByCategory('perfumes-para-hombre')
              }}
              className={({ isActive }) =>
                isActive ? activeStyle : 'flex items-center justify-center sm:text-inherit'
              }>
                            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#000000" d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" /></svg>             

                <p  className="flex items-center " >Perfumes para Hombre</p>
            </NavLink>
          </li>

          <li className="sm:flex sm:gap-2 sm:pl-3 p-0 sm:py-3 sm:border-b-[1px] sm:border-b-gray-400">
              <NavLink

              to='/category/perfumes-para-mujer'
              onClick={() => {
                setSearchByTitle(null)
                closeSideMenu()
                setSearchByCategory('perfumes-para-mujer')
              }}

              className={({ isActive }) =>
                isActive ? activeStyle : 'flex sm:text-inherit justify-center'
              }>    
              <svg className=" h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#020203" d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H152v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z" /></svg>                       
              <p className="flex items-center">Perfumes para Mujer</p>
            </NavLink>
          </li>

          <li className="sm:flex sm:gap-1 sm:pl-3  p-0 sm:py-3 sm:border-b-[1px] sm:border-b-gray-400">

            <NavLink
              to='/category/perfumes-unisex'
              onClick={() => {
                setSearchByTitle(null)
                closeSideMenu()
                setSearchByCategory('perfumes-unisex')
              }}

              className={({ isActive }) =>
                isActive ? activeStyle : 'flex  sm:text-inherit justify-center'
              }>
                            <img className="ml-1 mb-[2px]" width="36" height="36" src="https://img.icons8.com/ios-filled/50/unisex.png" alt="sneakers" />

              <p className="flex items-center ml-2">Perfumes Unisex</p>
            </NavLink>
          </li>

          <li className="sm:pl-3 sm:flex sm:gap-1 p-0 sm:py-3 sm:border-b-[1px] sm:border-b-gray-400">
              <NavLink
              to='/category/ofertas'
              onClick={() => {
                setSearchByTitle(null)
                closeSideMenu()

                setSearchByCategory('ofertas')
              }}

              className={({ isActive }) =>
                isActive ? activeStyle : 'flex justify-center sm:text-inherit'
              }>
                            <img className="ml-1 mb-[2px]" width="30" height="3 0" src="https://img.icons8.com/color/48/discount--v1.png" alt="sneakers" />            

             <p  className="flex items-center ml-2 " > Ofertas</p>
            </NavLink>
          </li>



        </ul>

      </div>
    </nav>
  )
}

export default NavBar;