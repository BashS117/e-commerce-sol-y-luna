import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { PerfumesContext } from '../../Context'
// import OrderCard from '../OrderCard'
import OrderCard from '../OrderCart'

// import { totalPrice } from '../../utils'
import { totalPrice } from '../../utils'

const CheckOutSideMenu = () => {


    // const cart = {
    //     products: [
    //       { id: 1, name: 'Product 1', quantity: 2 },
    //       { id: 2, name: 'Product 2', quantity: 3 },
    //       // ...otros productos
    //     ],
    //     // ...otras propiedades del carrito
    //   };
      
    //   const cartJson = JSON.stringify(cart);
    //   const cartEncoded = encodeURIComponent(cartJson);
      
    //   const whatsappUrl = `https://api.whatsapp.com/send?phone=573022968978&text=${cart.products.map((produ)=>produ.name)}valor_total:`;



  
  const {isCheckOutSideMenuOpen,closeCheckOutSideMenu,cartProducts,setCartProducts,order,setOrder,setSearchByTitle}=useContext(PerfumesContext);

  //PRIMERA FORMA DE ENVIAR PEDIDO

   // const cart = {
    //     products: [
    //       { id: 1, name: 'Product 1', quantity: 2 },
    //       { id: 2, name: 'Product 2', quantity: 3 },
    //       // ...otros productos
    //     ],
    //     // ...otras propiedades del carrito
    //   };
      
    //   const cartJson = JSON.stringify(cart);
    //   const cartEncoded = encodeURIComponent(cartJson);
      
    //   const whatsappUrl = `https://api.whatsapp.com/send?phone=573022968978&text=${cart.products.map((produ)=>produ.name)}valor_total:`;



    // SEGUNDA FORMA DE ENVIAR PEDIDO
    // const cart = {
    //     products: [
    //       { id: 1, name: 'Product 1', quantity: 2 },
    //       { id: 2, name: 'Product 2', quantity: 3 },
    //       // ...otros productos
    //     ],
    //     // ...otras propiedades del carrito
    //   };
      
    //   const cartJson = JSON.stringify(cart);
    //   const cartEncoded = encodeURIComponent(cartJson);

    
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
  


  //Enviado Pedido:
      
  const productNames = cartProducts
  .map((product) => `${product.name} (V/U:  $${product.unit_price})%0A`);
  const productsText = productNames.join(', ');

  
  
  const whatsappUrl = `https://api.whatsapp.com/send?phone=573177400171&text=*¡Nuevo Pedido!*🛵%0A*Productos*: %0A ${productsText}*Valor total:* $${totalPrice(cartProducts)}`;



  

    return (
    <aside className={`${isCheckOutSideMenuOpen ? 'flex' : 'hidden'} bg-[#E5E0FF] flex-col absolute top-0 right-[0px] border  w-[360px] sm:w-[85vw] h-[90vh] z-20`}>

      <div className='flex justify-between items-center p-6 border-b-2 border-black'>
      <svg
         onClick={() => closeCheckOutSideMenu()}
         className='w-8'
         xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
       
        <h2 className='font-medium text-xl relative right-[30%]'>Tu Pedido</h2>
       
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

      <div className='px-6 mb-6 border-t-2 border-t-black '>
        <p className='flex justify-between items-center mb-2'> 
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
        </p>
        <Link to={whatsappUrl}>
          <button
      className='w-full bg-[#25d366] py-3 text-white rounded-lg'
       onClick={()=>handleCheckout()}>
        Enviar a WhatsApp
      </button>
        </Link>
      
      </div>
   
     
    </aside>
  )
}

export default CheckOutSideMenu;