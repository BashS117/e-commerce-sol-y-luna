import React from 'react'
import { useContext } from 'react'

import { PerfumesContext } from '../../Context'

const OrdenRecivida = () => {

const {ordenRecivida,openAsideOrdenRecivida}=useContext(PerfumesContext)
console.log(ordenRecivida)
  return (openAsideOrdenRecivida && 
    <aside className='absolute shadow-xl flex flex-col gap-4 pt-4 bg-white top-40 w-[90%] z-10 '>
      <div className='flex justify-center'>
        <div className='flex gap-2 shadow-xl p-4'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
          <path d="M25,2C12.318,2,2,12.318,2,25c0,12.683,10.318,23,23,23c12.683,0,23-10.317,23-23C48,12.318,37.683,2,25,2z M35.827,16.562	L24.316,33.525l-8.997-8.349c-0.405-0.375-0.429-1.008-0.053-1.413c0.375-0.406,1.009-0.428,1.413-0.053l7.29,6.764l10.203-15.036	c0.311-0.457,0.933-0.575,1.389-0.266C36.019,15.482,36.138,16.104,35.827,16.562z"></path>
          </svg>
          <p className='flex flex-col justify-center'>
            <strong>GRACIAS!</strong>
            Su pedido ha sido recibido
          </p>
        </div>
      </div>
      <div className='flex tablepedido-recibido justify-between px-40 sm:flex-col sm:px-4 prueba'>
        <p className='flex flex-col sm:border-l-orange sm:pr-0 pr-4 sm:border'>
          <strong>Documento:</strong>
          {ordenRecivida?.document}
        </p>
        <p className='flex flex-col sm:border-l-orange sm:pr-0 pr-4 sm:border'>
          <strong>Estado:</strong>
          En espera
        </p>
        <p className='flex flex-col w-[300px] sm:border-l-orange sm:pr-0 pr-4 sm:border sm:w-auto'>
          <strong>Fecha:</strong>
          {ordenRecivida?.horaCreacion}
        </p>
        <p className='flex flex-col sm:border-l-orange sm:pr-0 pr-4 sm:border'>
          <strong>Correo Electrónico:</strong>
          {ordenRecivida?.email}
        </p>
        <p className='flex flex-col sm:border-l-orange sm:pr-0 pr-4 sm:border'>
          <strong>Total:</strong>
          ${ordenRecivida?.precioTotal}
        </p>
      
      </div>
      <section className='text-start px-6'>
        <div className='flex- flex-col gap-4'>
          <h2>MÉTODOS DE PAGO:</h2>
          <strong> - Colombia - Transferencias Electrónicas</strong>
          <p>1. Realiza el pago a una de las cuentas bancarias correspondientes que aparecen abajo.
            <br/>
            
            2. Toma una capture de la transferencia y envíala a nuestro numero de whatsapp: +57 3137601803 junto con un mensaje que diga: Pedido pagado.
            <br/>

            3. Una vez confirmemos el pago procederemos con el despacho de tu pedido.
          </p>
        </div>
        <div className='flex flex-col gap-4 mb-6'>
          <h2 className='text-[2rem] mt-4'>Nuestros detalles bancarios</h2>
          <ul>
            <li>Banco <strong>Bancolombia Corriente</strong></li>
            <li>Número de cuenta: <strong>809-000007-41</strong></li>
          </ul>

          <ul>
            <li>Diego Ordoñez <strong>Nequi</strong></li>
            <li>Número: <strong>3103860646</strong></li>
          </ul>
          <ul>
            <li>Diego Ordoñez <strong>Daviplata</strong></li>
            <li>Número: <strong>3137601806</strong></li>
          </ul>
        
        </div>
      </section>
     
    </aside>
  )
}

export default OrdenRecivida