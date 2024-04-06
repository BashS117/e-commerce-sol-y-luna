import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { PerfumesContext } from "../../Context";
import Loader from '../Loader';
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB,storage } from "../../firebase/Firebaseconfig";
import { ref, deleteObject } from "firebase/storage";
import toast from "react-hot-toast";

// import { supabase } from '../../supabase/client';

const CardForEdit = () => {


  const {filteredProductos,openAsideEditForm,deleteProductInSupa,setProductToEdit,closeAsideAddForm,setLoading,loading}=useContext(PerfumesContext); 
  const reversedFilteredProductos = filteredProductos?.slice().reverse();

  const [productToDelete, setProductToDelete] = useState(null);
  const deleteProduct = async (id,imageUrl,imageUrl2,imageUrl3) => {
    setLoading(true)
    setProductToDelete(id);
    try {

      await deleteimg(imageUrl);
      await deleteimg(imageUrl2);
      await deleteimg(imageUrl3);

// Delete the file

        await deleteDoc(doc(fireDB, 'products', id))
        toast.success('Producto eliminado correctamente')
        setLoading(false)
        setProductToDelete(null)
    } catch (error) {
        console.log(error)
        setLoading(false)
        setProductToDelete(null)
    }
}

async function deleteimg(Url){
  const desertRef = ref(storage, `imagenes/${Url}`);

  deleteObject(desertRef).then(() => {
    console.log('imgEliminada')
    // File deleted successfully
  }).catch((error) => {
    console.log(error)
    // Uh-oh, an cerror occurred!
  });
}




console.log('filteredProductos en carfor edit,', reversedFilteredProductos)

  return (<div className='' >
    { reversedFilteredProductos?.map((product, index) => (
    <div 
    onClick={()=>{
      setProductToEdit({
        id:product.id,
        imageUrl:product.imageUrl,
        imageUrl2:product.imageUrl2,
        imageUrl3:product.imageUrl3,
        name: product.name,
    price: product.price,
    category: product.category,
    description: product.description,
    quantity: product.quantity
      })
      closeAsideAddForm()
      openAsideEditForm()}} 
    key={product.id} className='relative cursor-pointer flex w-full justify-between py-[10px] border-b border-b-white items-center'>
      <figure className='h-12 w-12'>
      <img className='ImageName' src={`https://firebasestorage.googleapis.com/v0/b/blue-fashion-983e2.appspot.com/o/imagenes%2F${product.imageUrl}?alt=media&token=d6f78fa2-9034-4a18-bf50-0038362114c9`} alt="" />
      
      </figure>
      <p>{index + 1}</p>
    <p>{product.name}</p>
    <p>${product.price}</p>
    <p>Stock: {product.quantity}</p>
    
    <button className=''  onClick={(event) => {
        event.stopPropagation(); // Detener la propagación del evento
        deleteProduct(product.id,product.imageUrl,product.imageUrl2,product.imageUrl3); // Llamar a la función para eliminar el producto
    }}>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
    </button>
    {productToDelete === product.id && loading && <div className='relative flex mb-[28px] justify-end'><Loader /></div>}
   
   
</div>
  ))}
  </div>
    
  )
}

export default CardForEdit