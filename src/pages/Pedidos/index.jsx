import React from 'react'
import TableRowPedidos from '../../components/TableRowPedido'
import { useContext } from 'react'
import { PerfumesContext } from '../../Context'
const Pedidos = () => {
    const {OrderLength}=useContext(PerfumesContext)
  return (
    <section className='mt-[140px]'>
    <div className=' p-4 px-[80px] overflow-x-scroll'>
        <h2 className='text-start font-bold'>Numero de pedidos: {OrderLength}</h2>
        <table className='shadow-xl w-full'>
            <thead>
                <tr className='w-full'>
                    <th>Pedido #</th>
                    <th>Metodo de pago</th>
                    <th>Datos del pedido</th>
                    <th>Datos de envío</th>
                    <th>Estado del PAGO</th>
                    <th>Estado del envío</th>
                </tr>
            </thead>
            <tbody>
            <TableRowPedidos/>
            
                
                  {/* <!-hola- Aquí puedes agregar filas adicionales si es necesario --> */}
            </tbody>
        </table>
    </div>
</section>
  )
}

export default Pedidos