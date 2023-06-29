import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { PerfumesContext } from '../../Context'
// import OrderCard from '../OrderCard'
import OrderCard from '../OrderCart'

// import { totalPrice } from '../../utils'
import { totalPrice } from '../../utils'

const CheckOutSideMenu = () => {

  const {isCheckOutSideMenuOpen,closeCheckOutSideMenu,cartProducts,setCartProducts,order,setOrder,setSearchByTitle}=useContext(PerfumesContext);

  const handleDelete=(id)=>{
    const filteredeProducts= cartProducts.filter(unproducto=>unproducto.id != id)
    setCartProducts(filteredeProducts);

  }
  const handleCheckout=()=>{
    const orderToAdd={
      date: "01.02.23",
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    }
    setOrder([...order, orderToAdd])
    setCartProducts([])
    setSearchByTitle(null)
  }
  

    return (
    <aside className={`${isCheckOutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-[20px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] `}>

      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <svg onClick={() => closeCheckOutSideMenu()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
      {cartProducts.map(product=>(
        <OrderCard 
        key={product.id}
        id={product.id}
        title={product.name}
        imageUrl={product.image}
        price={product.unit_price}
        handleDelete={handleDelete}
        />



    ))}
      </div>

      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'> 
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
        </p>
        <Link to='/MyOrders/last'>
          <button
      className='w-full bg-black py-3 text-white rounded-lg'
       onClick={()=>handleCheckout()}>
        CheckOut
      </button>
        </Link>
      
      </div>
   
     
    </aside>
  )
}

export default CheckOutSideMenu;