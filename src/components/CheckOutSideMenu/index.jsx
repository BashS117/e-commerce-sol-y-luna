import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { PerfumesContext } from '../../Context'
// import OrderCard from '../OrderCard'
import OrderCard from '../OrderCart'

import { totalPrice } from '../../utils'

const CheckOutSideMenu = () => {

  const {isCheckOutSideMenuOpen,closeCheckOutSideMenu,cartProducts,setCartProducts,order,setOrder,setSearchByTitle,updateCartItemAmount}=useContext(PerfumesContext);
  
  const handleDelete=(id)=>{
    const filteredeProducts= cartProducts.filter(unproducto=>unproducto.id != id)
    setCartProducts(filteredeProducts);
  }

  //whatsapp
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
  
  //Enviado Pedido:
    
  const productNames = cartProducts
  .map((product) => `${product.name} (V/U:  $${product.price}),%0A`);
  const productsText = productNames.join(' ');
  
  const whatsappUrl = `https://api.whatsapp.com/send?phone=573177400171&text=*¡Nuevo Pedido!*🛵%0A*Productos*: %0A ${productsText}*Valor total:* $${totalPrice(cartProducts)}`;


  const cartItemTotal = cartProducts.map(item => item.amount).reduce((prevValue, currValue) => prevValue + currValue, 0);

    return (
    <aside className={`${isCheckOutSideMenuOpen ? 'flex' : 'hidden'} bg-white shadow-2xl flex-col absolute top-0 right-[30px] w-[360px] sm:w-[85vw] h-[90vh] z-30 sm:right-0 text-black`}>

      <div className='flex  items-center p-4  bg-orange '>
        <svg
         onClick={() => closeCheckOutSideMenu()}
         className='w-8 cursor-pointer'
         xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        <h2 className='font-medium text-xl ml-[30px] '>Resumen del pedido</h2>
        
      </div>
    
      <div className='px-6 overflow-y-scroll flex-1'>
      <Link to='/checkout' className=''>
          <button onClick={() => closeCheckOutSideMenu()}
            className='w-full bg-black hover:bg-purple py-2  mb-2 text-white rounded-[4px]'
             >
            Confirmar y Pagar
          </button>
        </Link>
        <div className='text-start'>
          <p >N° de artículos: {cartProducts.length}</p>
        <p >N° de productos: {cartItemTotal}</p>
        <div className='flex mt-2 justify-between items-center mb-2'> 
          <span className='font-bold'>Total:</span>
          <span className='font-medium text-[1.4rem]'>${totalPrice(cartProducts)}</span>
        </div></div>
        
      {cartProducts.map(product=>(
        <OrderCard 
        key={product.id}
        id={product.id}
        name={product.name}
        imageUrl={product.imageUrl}
        price={product.price}
        amount={product.amount}
        quantity={product.quantity}
        handleDelete={handleDelete}
        updateQuantity={updateCartItemAmount} // Nueva prop
        />
    ))}
      </div>

      <div className='px-6 py-4 text-center mr- border-t-2 border-t-black '>
        Te asesoramos con tu compra:
       

        

        <Link to={whatsappUrl}>
          <button
             className='w-full bg-[#25d366] py-2 text-white '
             onClick={()=>handleCheckout()}>
             Enviar pedido a WhatsApp
          </button>
        </Link>
      
      </div>
   
     
    </aside>
  )
}

export default CheckOutSideMenu;