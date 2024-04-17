import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"
// import { supabase } from '../../supabase/client'
import { Navigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useContext } from 'react'
import { PerfumesContext } from '../../Context'

const SettingsBar = () => {
//get User form localstorage
  const user = JSON.parse(localStorage.getItem('users'));
const {setSearchByCategory,openAcountSideMenu,closeAcountSideMenu,isAcountSideMenuOpen}=useContext(PerfumesContext)
  const navigate = useNavigate()

    const activeStyle = 'relative left-1    font-bold text-orange'

 const [isLogOutgButton,setIsLogOutButton]= useState(false)

const logout=()=>{
  localStorage.clear('users');
  navigate('/Login')
} 


  return (
    <div className="settings-bar px-20 w-full absolute top-0 py-[2px] justify-between 
    flex border-b border-b-white sm:flex sm:relative sm:px-2 sm:h-[48px] sm:py-0 sm:items-center sm:pb-1
    ">
        <ul className='flex text-[#878787] sm:hidden items-center'>
            <li className='flex'>Teléfono: 
              <p className=''> +57 317 740 0171</p>
              </li>
            <li> Email:
               <a className='text-[#878787]' href="mailto:sebasrm2000@gmail.com?subject=Job%20Offer&body=Hello%20there%2C%20we%20contacted%20you%20from%20your%20website">
               sebasrm2000@gmail.com</a>
            </li>
        </ul> 
        {/* //logo img */}
        <NavLink
            className='hidden sm:flex justify-center'
            to='/'
            onClick={() => {
              setSearchByTitle(null)
              setSearchByCategory(null)
              closeSideMenu()

            }}
          >
            <img className="sm:h-[50px] sm:w-[200px]  w-[280px]" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/47f69a177918813.652dc0aac3da7.png" alt="" />
          </NavLink>
       
       


      <div className={`${isAcountSideMenuOpen ? 'sm:flex' : 'hidden'} w-[200px] absolute flex flex-col gap-4 bg-black right-0 z-20  sm:flex-col sm:absolute sm:right-0 sm:top-0 sm:bg-black sm:z-20 sm:gap-6 p-2 py-4`}>
        <svg
        onClick={closeAcountSideMenu}
         className=' hover:cursor-pointer top-0 left-0 w-8 h-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

        {!user ? <li>
          <NavLink
            to='/registrarse' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Registrarse
          </NavLink>
        </li> : ''}

         {!user?  <li>
          <NavLink
            to='/Login' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Login
          </NavLink>
        </li>:''}
         {user?.role ==='user' && <li>
          <NavLink
            to='/cuenta' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Cuenta
          </NavLink>
        </li>}


        {user?.role ==='admin' && <li>
          <NavLink
            to='/Productos' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            onClick={() => {
              setSearchByTitle(null)
              setSearchByCategory(null)
              closeSideMenu()

            }}
            >
            Productos
          </NavLink>
        </li>}
         {user?.role ==='admin' && <li>
          <NavLink
            to='/pedidos' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Pedidos
          </NavLink>
        </li>}
         {user && <li>
          <NavLink onClick={logout}
            to='/Productos' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            LogOut
          </NavLink>
        </li>}
        </div>
       


        {/* <ul className="nav-rigth flex gap-3  ">   
        {user? <li>
          <NavLink
            to='/pedidos' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Mis pedidos
          </NavLink>
        </li>:null}

      {user? 
        <li>
          <NavLink
            to='/Productos' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Productos
          </NavLink>
        </li>:null}

        {isLogOutgButton? <li> <NavLink onClick={()=>supabase.auth.signOut()} to='/' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            } >logout</NavLink> </li>:(<li>
          <NavLink
            to='/LogIn' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            LogIn
          </NavLink>
        </li>)}


      </ul> */}
</div>
  )
}

export default SettingsBar