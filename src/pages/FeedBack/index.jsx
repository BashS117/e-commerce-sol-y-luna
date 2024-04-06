import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { PerfumesContext } from '../../Context';
import { useEffect } from 'react';
import { setDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/Firebaseconfig";
const FeedBack = () => {
    
    const { loading, getAllOrder,getAllOrderFunction } = useContext(PerfumesContext);
    useEffect(() => {
        getAllOrderFunction()
        
    }, []);

    


    function getParamsFromUrl() {
        const searchParams = new URLSearchParams(window.location.search);
        const status = searchParams.get('status');
        const preference_id = searchParams.get('preference_id');
        return { status, preference_id };
      }
      const { status, preference_id } = getParamsFromUrl();
      console.log(preference_id)
      console.log(status)
      const filteredOrder = getAllOrder.filter(order => order.Mercadopagoid === preference_id);
      if (filteredOrder) {
          console.log(filteredOrder[0])
        updateOrder(status,filteredOrder[0])
      } else {
      }
  
      async function updateOrder(status,filteredOrder){
        await setDoc(doc(fireDB,'order',filteredOrder.id),  {
            Mercadopagoid: filteredOrder.Mercadopagoid,
            date: filteredOrder.date,
            datos: filteredOrder.datos,
            email: filteredOrder.email,
            metododepago: filteredOrder.metododepago,
            products: filteredOrder.products,
            status: status,
            statusenvio: filteredOrder.statusenvio,
            time: filteredOrder.time,
            userid: filteredOrder.userid
        })
console.log("orden actualizada")
      }

   
  return (
    <div className='relative h-auto'>
<div className='bg-blue-ligth h-[200px] flex justify-center items-center'>

<h1 className='border-b border-b-purple w-full pb-10 '>{status==='approved'?'¡Excelente compra!':'Lo sentimos'}</h1>

</div>
{/* <div className="border-t  overflow:hidden h-[550px]"><svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-[100%] w-[100%]"><path d="M0.00,49.81 C121.27,319.13 318.79,-120.56 501.07,140.31 L500.01,0.00 L0.00,0.00 Z"  className='fill-purple'></path></svg></div> */}
<div className=' flex justify-center'>
    <div className='max-w-[500px] text-left flex flex-col gap-4 bg-[#FFFFFF] shadow-xl rounded-md relative top-[-55px] p-10' >
{status==='approved'?<div>
<h2 className='font-bold text-center '>Felicidades</h2>
        <p>Tu compra ha sido aprobada y tu pedido está en camino. Puedes ver el estado actualizado de tu compra en tu cuenta personal en nuestro sitio web. </p>
        <p>¡Gracias por elegirnos y esperamos que disfrutes de tu compra!</p>
</div>
:
<div>     
        <p>Lamentablemente, parece que ha habido un problema con el proceso de pago y no se ha podido aprobar su compra en este momento. Entendemos lo frustrante que puede ser esta situación y queremos ofrecerle nuestra ayuda para resolverlo lo más rápido posible.</p>
    <ul className='pl-2 my-2'>
        <li className='border-none'><h5 className='font-bold'>Revisa tus Movimientos en MercadoPago:</h5> Accede a tu cuenta de MercadoPago para revisar tus movimientos y asegurarte de que no haya habido ningún problema con el procesamiento del pago desde ese lado. Es posible que encuentres información adicional sobre el estado de tu transacción.</li>
        <li className='border-none mt-2'><h5 className='font-bold'>Verifique la Información de Pago:</h5> Asegúrese de que los detalles de su tarjeta de crédito o débito estén ingresados correctamente, incluyendo el número de tarjeta, la fecha de vencimiento y el código de seguridad (CVV).</li>
        <li className='border-none mt-2'><h5 className='font-bold'>Contacta con el Soporte:</h5> Si el problema persiste o tiene alguna pregunta, no dude en ponerse en contacto con nuestro equipo de soporte al cliente. Estamos aquí para ayudarle a resolver cualquier problema que pueda surgir durante el proceso de compra.</li>
        <li className='border-none mt-2'><h5 className='font-bold'>Explora Otras Opciones de Pago:</h5> Si sigue experimentando dificultades con el pago en línea, considere utilizar una forma de pago alternativa, como transferencia bancaria o pagar en efectivo en tienda, si está disponible.</li>
    </ul>
    <h4 className='font-bold'>Estamos Aquí para Ayudar</h4>
    <p>En Blue Fashion Boutique, valoramos su experiencia de compra y queremos asegurarnos de que tenga una experiencia positiva con nosotros. Si necesita ayuda adicional o tiene alguna pregunta, no dude en ponerse en contacto con nuestro equipo de soporte al cliente.
</p>
<p className='mt-2'> Estamos aquí para ayudarle en cualquier momento.

Gracias por su comprensión y paciencia mientras trabajamos para resolver este problema. Esperamos poder servirle nuevamente en el futuro.</p>
<p>Atentamente,

Blue Fashion Boutique</p>
        
        </div>}
        {
            status==='approved'?<button className='bg-purple text-white p-2 mt-2 '><Link to='/cuenta' className='flex py-2 w-full justify-center'>Ver detalles de tus compras</Link></button>
:null
        }
    </div>
</div>
    </div>
  )
}

export default FeedBack