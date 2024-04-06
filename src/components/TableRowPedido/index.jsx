import React from 'react'
import { useEffect } from 'react'
import { useContext } from "react"
import { PerfumesContext } from "../../Context"
import { useState } from 'react'
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/Firebaseconfig";
import toast from "react-hot-toast";
import Loader from '../Loader'
const TableRowPedidos = () => {


    const {getPedidos,getAllOrder,handleDeleteOrder,setLoading,loading}=useContext(PerfumesContext);


useEffect(()=>{
},[])

const [deletedPedidoAlerts, setDeletedPedidoAlert] = useState({});

const handleDeleteRow= (pedido)  => {
    setDeletedPedidoAlert((prevAlerts) => ({
        ...prevAlerts,
        [pedido.id]: true
    }));

    // Aquí puedes mostrar la alerta antes de eliminar la fila
    // setShowAlert(true);
  };
  const deleteOrder = async (id) => {
    setLoading(true)
    try {
// Delete the file
        await deleteDoc(doc(fireDB, 'order', id))
        toast.success('Product Deleted successfully')
      
        setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
}

  const confirmDeleteRow = async (pedido) => {
    console.log(pedido)
    await deleteOrder(pedido.id)
    // Aquí implementa la lógica para eliminar la fila
    // handleDeleteOrder(pedido.id)
    // setShowAlert(false); // Oculta la alerta después de confirmar
    setDeletedPedidoAlert((prevAlerts) => ({
        ...prevAlerts,
        [pedido.id]: false
    }));

  };








  const cancelDeleteRow = (pedido) => {
    // Aquí cancelas la eliminación de la fila y ocultas la alerta
    setDeletedPedidoAlert((prevAlerts) => ({
        ...prevAlerts,
        [pedido.id]: false
    }));
  };

return (getAllOrder?.map((pedido,index)=>(
    
    <tr className=' relative border-b border-b-purple' key={pedido.id} >
        
    <td className=" px-6 py-4  w-[100px]">
        {index+1}
    </td>
    <td className=" px-6 py-4  w-[100px]">
        {pedido.metododepago}
    </td>
    <td className="row-pedido px-6 py-4 w-[350px]">
    <p>{`Hora de recepción: ${pedido.date} ${pedido.time.toDate().toLocaleTimeString("es-CO")}`}</p>
 
        {pedido.products.map((dato,index)=>(

<div key={index} className='flex flex-col'>
{index === pedido.products.length - 1 ? (
    <p>Precio total:$ </p>
) : (
    <p>Producto:</p>
)}
{dato}

</div>
        ))}
    </td>
    <td className="px-6 py-4  text-[18px]">
        <ul>
            <li className='flex'>
                <p>Documento:</p>
                {pedido.datos.document}
            </li>
            <li className='flex'>
                <p>Nombre:</p>
                {pedido.datos.name} {pedido.datos.apellidos}
                
            </li>
            <li className='flex'>
                <p>Direccion:</p>
                {pedido.datos.direccion} 
            </li>
            <li className='flex'>
                <p>Departamento:</p>
                {pedido.datos.departamento} 
            </li>
            <li className='flex'>
                <p>Ciudad/Municipio:</p>
                {pedido.datos.ciudad} 
            </li>
            <li className='flex'>
                <p>Telefono:</p>
                {pedido.datos.telefono} 
            </li>
            <li className='flex'>
                <p>Email:</p>
                {pedido.datos.email} 
            </li>
            <li className='flex'>
                <p>Notas:</p>
                {pedido.datos.nota} 
            </li>
           
        </ul>
   
    </td>
    <td  >
        <p className={`${pedido.status==="approved"?'bg-[#1eff47]':'bg-[#ffff1e]'} `}>{pedido.status}</p>
    </td>
    <td>
        <p  className={`${pedido.statusenvio==='pendiente'?'bg-[#ffff1e]':'bg-[#1eff47]'} sm:mx-4`}> 
           {pedido.statusenvio}
        </p> 
        <svg 
        className="cursor-pointer mt-12  absolute"
        onClick={()=>handleDeleteRow(pedido)}
        xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
 
  </td>
 
  {deletedPedidoAlerts[pedido.id] && 
        <td  >
          <p className='bg-orange rounded-lg mb-4'>¿Estás seguro de que deseas eliminar esta fila?</p>
          
          <button className='mr-6 bg-ligth-gray p-2 hover:bg-orange' 
          onClick={()=>confirmDeleteRow(pedido)}
          >Sí</button>
          <button className='mr-6 bg-ligth-gray p-2 hover:bg-orange' 
          onClick={()=>cancelDeleteRow(pedido)}
          >No</button>
        
        {loading && <Loader/>}
        </td>
      }
</tr>))
  )
}

export default TableRowPedidos