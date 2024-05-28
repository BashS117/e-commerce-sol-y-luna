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


  const activeStyle = 'underline underline-offset-4 flex  border-b-8 border-b-blue-ligth sm:border-b-0 sm:border-r-8 sm:border-r-blue-ligth '



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

      <div className={`${isOpenMenu ? 'sm:flex  ' : 'sm:hidden'} sm:absolute sm:z-30 sm:left-0 sm:top-0 sm:w-[auto]  bg-white w-full mb-2 items-start `}>
        <ul className={`menu-desktop categories  flex px-20   text-[16px]  justify-start  
           sm:text-[1rem]   
           sm:text-start sm:px-0 sm:w-[60vw] sm:h-full  sm:fixed sm:top-0 sm:bg-white  sm:flex-col
           
          `}>



          <div className={`hidden text-black relative sm:flex text-start text-[1.4rem] py-[10px] sm:w-full  bg-white font-bold mr-2 sm:px-4 `}>
            <button
              className="sm:w-[40px] sm:h-[40px] sm:flex sm:absolute right-[-40px] top-0 rounded-tl-none  shadow-[inset_02px_-0px_02px_rgba(255,255,255,0.6)]  bg-black hidden "
              onClick={() => closeSideMenu()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            Categorías</div>


            <details name="editar" className=' text-black hover:bg-[#8CD8EF] w-full relative border-none open:z-30 items-center'>
              <summary  
              className='cursor-pointer sm:pl-4 gap-[2px] h-full text-start flex items-center sm:p-3  text-[18px] font-medium  sm:border-t'>
                <img width="30" height="30" src="https://img.icons8.com/glyph-neue/64/perfume-bottle.png" alt="perfume-bottle"/>
                Perfumes Premium
                </summary>
              <div className="absolute shadow-xl shadow-black sm:left-20 top-14 left-0 w-[220px] bg-white">
             <li className="p-0">
                 <NavLink
                  to='/category/premium-hombre'
                  onClick={() => {
                    setSearchByTitle(null)
                    closeSideMenu()
                    setSearchByCategory('premium-hombre')
                  }}

                  className={({ isActive }) =>
                    isActive ? activeStyle : 'flex sm:text-inherit'
                  }>
                  <figure className="flex items-center">
                  <svg fill="#000000" height="34px" width="38px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 442 442" xml:space="preserve">
<g>
	<path d="M231.5,50.5c0-5.79-4.71-10.5-10.5-10.5c-5.79,0-10.5,4.71-10.5,10.5S215.21,61,221,61C226.79,61,231.5,56.29,231.5,50.5z"
		/>
	<path d="M346,163.682h-60V122c0-5.522-4.478-10-10-10h-10V10c0-5.523-4.478-10-10-10h-70c-5.523,0-10,4.477-10,10v102h-10
		c-5.523,0-10,4.478-10,10v41.682H96c-11.028,0-20,8.972-20,20V422c0,11.028,8.972,20,20,20h250c11.028,0,20-8.972,20-20V183.682
		C366,172.653,357.028,163.682,346,163.682z M196,20h50v92h-50V20z M96,422V183.682h70c5.523,0,10-4.477,10-10V132h35v71.682h-85
		c-5.523,0-10,4.478-10,10V392c0,5.522,4.477,10,10,10h190c5.522,0,10-4.478,10-10v-60.892c0-5.522-4.478-10-10-10s-10,4.478-10,10
		V382H136V223.682h75V352c0,5.522,4.477,10,10,10c5.523,0,10-4.478,10-10V223.682h75V297c0,5.522,4.478,10,10,10s10-4.478,10-10
		v-83.318c0-5.522-4.478-10-10-10h-85V132h35v41.682c0,5.523,4.478,10,10,10h70L346.002,422H96z"/>
</g>
</svg>                  
 <figcaption className="ml-4 text-black">
  Premium Hombre
  </figcaption>
                  </figure>           
                  
                   </NavLink>
                   </li>

              <li className="p-0">
              <NavLink
                  to='/category/premium-mujer'
                  onClick={() => {
                    setSearchByTitle(null)
                    closeSideMenu()
                    setSearchByCategory('premium-mujer')
                  }}

                  className={({ isActive }) =>
                    isActive ? activeStyle : 'flex  sm:text-inherit'
                  }>
                  <figure className="flex items-center relative">
                  <svg fill="#000000" width="38px" height="38px" viewBox="0 0 512 512" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

<g id="perfume-bottle-heart-love-valentine">

<path d="M433.68,105.666l-19.952,20.46c-3.14,3.22-8.315,3.22-11.455,0l-19.952-20.46c-7.017-7.196-8.387-18.749-2.104-26.593   c7.145-8.922,20.021-9.403,27.784-1.442c7.763-7.96,20.64-7.479,27.784,1.442C442.067,86.917,440.697,98.47,433.68,105.666z    M365.793,220.137c13.734,17.879,18.281,40.629,12.473,62.418l-36.199,135.754C337.398,435.789,321.508,448,303.414,448h-94.828   c-18.094,0-33.984-12.211-38.652-29.691l-36.199-135.754c-5.809-21.789-1.262-44.539,12.473-62.418   c13.06-17,32.535-26.992,53.793-27.949V168c0-10.416,6.708-19.213,16-22.526V88c0-13.234,10.766-24,24-24h32   c13.234,0,24,10.766,24,24v57.474c9.292,3.313,16,12.11,16,22.526v24.188C333.258,193.145,352.733,203.137,365.793,220.137z    M232,88v56h48v-18.219c-4.762-2.771-8-7.874-8-13.781s3.238-11.009,8-13.78V88c0-4.41-3.59-8-8-8h-32C235.59,80,232,83.59,232,88z    M264,360c0-4.418-3.582-8-8-8c-4.418,0-8,3.582-8,8c0,4.418,3.582,8,8,8C260.418,368,264,364.418,264,360z M264,400   c0,8.836,7.164,16,16,16c8.837,0,16-7.164,16-16c0-8.837-7.163-16-16-16C271.164,384,264,391.163,264,400z M248,312   c0-4.418-3.582-8-8-8c-4.418,0-8,3.582-8,8c0,4.418,3.582,8,8,8C244.418,320,248,316.418,248,312z M312,360c4.418,0,8-3.582,8-8   c0-4.418-3.582-8-8-8c-4.418,0-8,3.582-8,8C304,356.418,307.582,360,312,360z M224,352c0-8.837-7.163-16-16-16   c-8.836,0-16,7.163-16,16c0,8.836,7.164,16,16,16C216.837,368,224,360.836,224,352z M192,296c0-4.418-3.582-8-8-8   c-4.418,0-8,3.582-8,8c0,4.418,3.582,8,8,8C188.418,304,192,300.418,192,296z M353.105,229.883   C342.418,215.977,326.234,208,308.695,208H304h-96h-4.695c-17.539,0-33.723,7.977-44.41,21.883   c-10.684,13.906-14.219,31.602-9.699,48.547l1.754,6.58C178.349,248.323,233.337,250.402,256,264   c36.68,22.215,59.46,56.165,98.594,45.22l8.21-30.79C367.324,261.484,363.789,243.789,353.105,229.883z M320,104h16   c13.234,0,24-10.766,24-24v-8c0-4.418-3.582-8-8-8s-8,3.582-8,8v8c0,4.41-3.59,8-8,8h-16c-4.418,0-8,3.582-8,8S315.582,104,320,104   z M360,120h-40c-4.418,0-8,3.582-8,8s3.582,8,8,8h40c4.41,0,8,3.59,8,8v8c0,4.418,3.582,8,8,8s8-3.582,8-8v-8   C384,130.766,373.234,120,360,120z"/>

</g>

<g id="Layer_1"/>

</svg>
                  <figcaption className="ml-4 text-black">Premium Mujer</figcaption>

                </figure>
                   </NavLink>
              </li>

              
              </div>
            </details>
        

          <li className="sm:pl-3 sm:flex sm:gap-2 p-0  sm:border-b-[1px]  sm:border-t-[1px] sm:border-t-gray-400">
                    <NavLink

              to='/category/perfumes-para-hombre'
              onClick={() => {
                setSearchByTitle(null)
                closeSideMenu()
                setSearchByCategory('perfumes-para-hombre')
              }}
              className={({ isActive }) =>
                isActive ? activeStyle : 'flex items-center justify-center sm:text-inherit sm:justify-start'
              }>
                            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#000000" d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" /></svg>             

                <p  className="flex items-center " >Perfumes para Hombre</p>
            </NavLink>
          </li>

          <li className="sm:flex sm:gap-2 sm:pl-3 p-0  sm:border-b-[1px] sm:border-b-gray-400">
              <NavLink

              to='/category/perfumes-para-mujer'
              onClick={() => {
                setSearchByTitle(null)
                closeSideMenu()
                setSearchByCategory('perfumes-para-mujer')
              }}

              className={({ isActive }) =>
                isActive ? activeStyle : 'flex sm:text-inherit justify-center sm:justify-start'
              }>    
              <svg className=" h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#020203" d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H152v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z" /></svg>                       
              <p className="flex items-center">Perfumes para Mujer</p>
            </NavLink>
          </li>

          <li className="sm:flex sm:gap-1 sm:pl-3  p-0  sm:border-b-[1px] sm:border-b-gray-400">

            <NavLink
              to='/category/perfumes-unisex'
              onClick={() => {
                setSearchByTitle(null)
                closeSideMenu()
                setSearchByCategory('perfumes-unisex')
              }}

              className={({ isActive }) =>
                isActive ? activeStyle : 'flex  sm:text-inherit justify-center sm:justify-start'
              }>
                            <img className="ml-1 sm:ml-0 mb-[2px]" width="32" height="36" src="https://img.icons8.com/ios-filled/50/unisex.png" alt="sneakers" />

              <p className="flex items-center ml-2 sm:ml-0">Perfumes Unisex</p>
            </NavLink>
          </li>

          <li className="sm:pl-3 sm:flex sm:gap-1 p-0  sm:border-b-[1px] sm:border-b-gray-400">
              <NavLink
              to='/category/ofertas'
              onClick={() => {
                setSearchByTitle(null)
                closeSideMenu()

                setSearchByCategory('ofertas')
              }}

              className={({ isActive }) =>
                isActive ? activeStyle : 'flex justify-center sm:text-inherit sm:justify-start'
              }>
                            <img className="ml-1 sm:ml-0 mb-[2px]" width="30" height="3 0" src="https://img.icons8.com/color/48/discount--v1.png" alt="sneakers" />            

             <p  className="flex items-center ml-2 sm:ml-1 " > Ofertas</p>
            </NavLink>
          </li>



        </ul>

      </div>
    </nav>
  )
}

export default NavBar;