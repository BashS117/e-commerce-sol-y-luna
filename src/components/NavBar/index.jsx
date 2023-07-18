import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { PerfumesContext } from "../../Context"

const NavBar =()=>{

    const {count,setSearchByCategory,cartProducts,setSearchByTitle,openCheckOutSideMenu}= useContext(PerfumesContext);


    const activeStyle = ' relative left-1 before:content-[">"] before:mr-1 font-bold'
    // const activeStyle = 'underline underline-offset-4'


    return(
        <nav className=" bg-[#03001C] flex w-full justify-between items-center fixed z-10 top-0 py-5  px-8  text-sm  font-semibold sm:py-1 sm:px-2 ">
            <ul className="flex  items-start gap-3 sm:flex-col sm:gap-1 ">
             

                <li className="">
                
                <NavLink 
                to='/'   

                onClick={()=>{
                  setSearchByTitle(null)
                  setSearchByCategory()

                }}
                  className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                   Todo
                </NavLink>
                </li> 

                <li>
                <NavLink 
                to='/Hombres'   
                onClick={()=>{
                  setSearchByTitle(null)

                  setSearchByCategory('hombre')
              }}

                 className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    Hombres
                </NavLink>
                </li> 

                <li>
                <NavLink 
                to='/Mujeres'   
                onClick={()=>{
                  setSearchByTitle(null)

                  setSearchByCategory('mujer')
              }}

                 className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    Mujeres
                </NavLink>
                </li> 

                <li>
                <NavLink 
                to='/Others'  
                onClick={()=>{
                  setSearchByTitle(null)

                  setSearchByCategory('otros')
              }}

                  className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    Others
                </NavLink>
                </li> 
            </ul>

            <ul>
               <li className="font-bold text-lg">
                <NavLink 
                to='/'
                >
                  SOL Y LUNA
                </NavLink>
                </li> 
            </ul>


            <ul className="flex items-center gap-3 sm:hidden">
               <li className="text-black/60">
                Deisy Lorena
                </li> 

                <li>
                <NavLink 
                to='/MyOrders'    className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    MyOrders
                </NavLink>
                </li> 

                <li>
                <NavLink 
                to='/MyAccount'    className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    MyAccount
                </NavLink>
                </li> 

                <li>
                <NavLink 
                to='/SignIn'    className={({isActive})=>
                isActive? activeStyle:undefined
              }>
                    SignIn
                </NavLink>
                </li> 

              
                
                
            </ul>

        <button class="flex items-center border-none h-[45px] w-[45px] p-2 bg-[#21ae55] hover:bg-[#26eb6e] text-white font-semibold shadow-md transform hover:scale-105 transition duration-300">
          <svg
            onClick={() => openCheckOutSideMenu()}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-5 h-9 absolute   top-3 right-7 sm:top-0 sm:right-0 sm:w-full sm:h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>

          <div className="pr-5 sm:p-0 sm:top-5 sm:right-[18px] absolute z-10">
            {cartProducts.length}
            {/* {count} */}
          </div>

        </button>
            
        </nav>
    )
}

export default NavBar;