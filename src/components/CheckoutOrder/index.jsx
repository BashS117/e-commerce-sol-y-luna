import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { PerfumesContext } from '../../Context'
// import OrderCard from '../OrderCard'
import OrderCard from '../OrderCart'
import { totalPrice } from '../../utils'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios'
import { useState } from 'react'
import { fireDB } from "../../firebase/Firebaseconfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Loader from '../Loader'

const CheckOutOrder = ({ handleSubmit }) => {


  const[preferenceId,setPreferenceId]=useState(null)
  const {createPedidoInFirebase,cartProducts,setOrdenRecivida,setOpenAsideOrdenRecivida,AlertPedidoNotCreated}=useContext(PerfumesContext);
//produccion key
const [loading, setLoading] = useState(false);

  initMercadoPago('TEST-1c061231-86e5-4113-ac6a-0f20dae1e96a',{locale:"es-CO"});

  const createPreference = async()=>{
    try {
        const response = await axios.post("https://server-blue-fashion.vercel.app/create_preference",{
            title: "Productos",
            quantity:1,
            price:totalPrice(cartProducts),

        });
        const {id} = response.data;
        return id;
        
    } catch (error) {
        console.log(error);
    }
  };

  const handleBuy = async ()=>{
    const id = await createPreference();
    if(id){
        setPreferenceId(id);
       
    }
return id
  }

  const [confirmButton1, setConfirmButton1] = useState(false);
  const [confirmButton2, setConfirmButton2] = useState(false);
  const handleToggle1 = () => {
    setConfirmButton1(!confirmButton1);
    setConfirmButton2(false); // Desactivar el otro checkbox
    
  };

  const handleToggle2 = () => {
    setConfirmButton2(!confirmButton2);
    setConfirmButton1(false); // Desactivar el otro checkbox
  
  };

  const updateProducts = async (id,product,newStock) => {
   
    try {
        await setDoc(doc(fireDB, 'products', id),  {
          name: product.name,
          price: product.price,
          category: product.category,
          description: product.description,
          quantity: newStock,
          imageUrl: product.imageUrl,
          imageUrl2: product.imageUrl2,
          imageUrl3: product.imageUrl3,
          time: product.time,
          date: product.date
      })
        // toast.success("Product Updated successfully")
    } catch (error) {
        console.log(error)
    }
}


 
const onSubmit=async(data)=>{
  console.log("checkoutSUBMIR",cartProducts)
  const textArrayCartProducts = cartProducts.map(producto => {
    const precioTotal = producto.price * producto.amount;
    return `-${producto.name} $${producto.price} x ${producto.amount} = PRECIO TOTAL ==> $${precioTotal}-`;
});
 textArrayCartProducts.push(`${totalPrice(cartProducts)}`)

  if(confirmButton2){
    setLoading(true)
    console.log("LOADING",loading)
    let allProductsValid = true;
    for (const product of cartProducts) {
      try {
        const productTemp = await getDoc(doc(fireDB, "products", product.id))
        const producttoEdit = productTemp.data();
        console.log(producttoEdit)
        if (producttoEdit.quantity >= product.amount) {
          const newStock = producttoEdit.quantity - product.amount;
          await updateProducts(product.id, producttoEdit, newStock);
        } else {
          allProductsValid = false;
          AlertPedidoNotCreated();
          break;
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    if (allProductsValid) {
      const id = await handleBuy();
      
      window.open(`https://www.mercadopago.com.co/checkout/v1/payment/redirect/69fd444b-d864-42af-bf07-42df32ae9caa/payment-option-form/?preference-id=${id}`) 

      await createPedidoInFirebase(data, id, textArrayCartProducts, 'Mercadopago');
      
      setLoading(false)
    }
  }else{
    let allProductsValid = true; // Variable para verificar si todos los productos cumplen la condición
    for (const product of cartProducts) {
      try {
        const productTemp = await getDoc(doc(fireDB, "products", product.id))
        const producttoEdit= productTemp.data();
        console.log(producttoEdit)
        if(producttoEdit.quantity>=product.amount){
          const newStock = producttoEdit.quantity - product.amount;
          await updateProducts(product.id,producttoEdit, newStock);
          
        }else{
          allProductsValid=false;
          AlertPedidoNotCreated()
          break;
        }
    
        setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
      }
    // Obtener la hora actual en formato de fecha y hora
    if (allProductsValid) {
      // Si todos los productos cumplen con la condición, ejecuta el código
      const idconsignacion = data.document;
      await createPedidoInFirebase(data, idconsignacion, textArrayCartProducts, 'Transacción');
      //setear info para pedidorecibidaAside
      const horaCreacion = new Date().toLocaleString("es-CO", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      console.log('horaCreacion', horaCreacion);
      const precioTotal = totalPrice(cartProducts);
      data.horaCreacion = `${horaCreacion}`;
      data.precioTotal = precioTotal;
      setOrdenRecivida(data);
      setOpenAsideOrdenRecivida(true);
    } else {
      // Si algún producto no cumple con la condición, muestra una alerta o realiza alguna acción apropiada
      AlertPedidoNotCreated();
    }
  }

      }
 

      let Checked = null;
//The class name can vary
for (let CheckBox of document.getElementsByClassName('only-one')){

	CheckBox.onclick = function(){
  	if(Checked!=null){
      Checked.checked = false;
      Checked = CheckBox;
    }
    Checked = CheckBox;
    
  }
}

console.log("cartProducts",cartProducts)
const cartItemTotal = cartProducts.map(item => item.amount).reduce((prevValue, currValue) => prevValue + currValue, 0);
console.log(cartItemTotal)


    return (
    <section className={` flex-col w-[40%] sm:w-full border border-ligth-gray m-8 sm:m-0 sm:mt-6  z-[3]`}>
      <div className='flex justify-between items-center p-4  '>
  
        <h2 className='font-medium text-xl relative '>Resumen del pedido</h2>
       
      </div>
      <div className='checkoutOrder px-6 overflow-y-scroll h-[300px] flex-1'>
      {cartProducts.map(product=>(
        <OrderCard 
        key={product.id}
        id={product.id}
        name={product.name}
        imageUrl={product.imageUrl}
        price={product.price}
        amount={product.amount}
        inactivebuttons={true}
       
        />
    ))}
      </div>

      <div className='px-6 mb-0 mr-4 border-t-2 border-t-black '>
        <div className='flex mt-2 justify-between items-center mb-2'> 
          <span className='font-bold'>Total:</span>
          <span className=' text-[1.4rem] font-bold'>${totalPrice(cartProducts)}</span>
        </div>
        <div className='flex mt-2 justify-between items-center mb-2'> 
          <span className='font-bold'>Articulos:</span>
          <span className=' text-[1.4rem] font-bold'>{cartProducts.length}</span>
        </div>
        <div className='flex mt-2 justify-between items-center mb-2'> 
          <span className='font-bold'>Total de productos:</span>
          <span className=' text-[1.4rem] font-bold'>{cartItemTotal}</span>
        </div>
        <div className='mb-1 '>

<div className='text-start flex flex-col gap-4'>
    <h2 className=' font-bold text-[22px]'>Métodos de pago</h2>
    <label className='cursor-pointer consig'>
              <input className='only-one' type="checkbox" onChange={handleToggle1} checked={confirmButton1} />
              Transferencias Electrónicas, Transferencia bancaria Bancolombia BBVA - Nequi o Daviplata
            </label>
            <label className='cursor-pointer'>
              <input className='only-one' type="checkbox" onChange={handleToggle2} checked={confirmButton2} />
              Compras con tarjetas a través de MercadoPago o saldo en MercadoPago.
              <img src="https://maferperfumes.com/wp-content/plugins/woocommerce-mercadopago/assets/images/icons/icon-mp.png" alt="" />
            </label>
   
</div>


          {loading && <div className='relative top-[54px] z-20  mt-4 pl-6 '><Loader/></div>}
          {loading && <div className='relative  mt-0'><p className='pl-0 pt-4'>Redirigiendo espera por favor...</p></div>}
          {/* {preferenceId &&  <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />} */}

        </div>
      </div>
   
      {confirmButton1 && <input
      type="submit" 
      className='cursor-pointer input-confirm mt-0 w-full flex items-center justify-center border-none h-[50px] p-1 text-white font-semibold shadow-md transform hover:scale-105 transition duration-300' 
      onClick={(e)=>{
        window.scrollTo({top: 0, behavior: 'smooth'})
        handleSubmit(onSubmit)(e)
      }}
        value="Pagar con Transferencias"  />}

      {confirmButton2 && <input
      type="submit" 
      className='cursor-pointer input-confirm mt-0 w-full flex items-center justify-center border-none h-[50px] p-1 text-white font-semibold shadow-md transform hover:scale-105 transition duration-300' 
      onClick={handleSubmit(onSubmit)}
        value="Pagar con MercadoPago"  />}
 
     
     

     
    </section>
  )
}

export default CheckOutOrder;