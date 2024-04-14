import React from 'react'
import {useForm,} from 'react-hook-form'
import { useContext } from 'react'
import { PerfumesContext } from '../../Context'

import { Timestamp, addDoc, collection, setDoc, doc } from "firebase/firestore";
import { fireDB ,uploadFile,updateFile} from "../../firebase/Firebaseconfig";
import Loader from '../Loader';
import { useNavigate } from "react-router";
import { useState } from 'react';
import toast from "react-hot-toast";
import { useEffect } from 'react';

const AddandEditForm = () => {
  const defaultValues = {
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
  }
  
    const {isOpenAddForm,isOpenEditForm,closeAsideAddForm,closeAsideEditForm,AlertCreateProduct,productToEdit,AlertEditProduct,setProductToEdit,AlertNotCreatedProduct,loading, setLoading }=useContext(PerfumesContext)
    const {register, handleSubmit,formState:{errors},reset,watch,setValue}=useForm({defaultValues});
    
    const navigate = useNavigate();
    const nameValue = watch("name")
    const descriptionValue = watch("description")
    const priceValue = watch("price")
    const stockValue = watch("stock")
    const categoryValue = watch("category")
  
    useEffect(() => {
      setValue("name",productToEdit?.name,true)
      setValue("description",productToEdit?.description,true)
      setValue("price",productToEdit?.price,true)
      setValue("stock",productToEdit?.quantity,true)
      setValue("category",productToEdit?.category,true)
if(isOpenAddForm){
  setValue("name",'',true)
  setValue("description",'',true)
  setValue("price",'',true)
  setValue("stock",'',true)
  setValue("category",'',true)
  
}
    }, [productToEdit,isOpenAddForm])
  
    const handleChange = (field,e) => setValue(field, e.target.value,true)

    //ONSUBMIT

    const onSubmit = async(data) => {
      console.log(data)
      if (isOpenAddForm){

      //  console.log(result.metadata.name)
        setLoading(true);
        try {
          let imageUrl = null, imageUrl2 = null, imageUrl3 = null;
          const imageFile = document.getElementById('fileInput').files[0];
          const imageFile2 = document.getElementById('fileInput2').files[0];
          const imageFile3 = document.getElementById('fileInput3').files[0];
          if(imageFile || !imageFile){   imageUrl = (await uploadFile(imageFile)).metadata.name}
          if(imageFile2 || !imageFile2){ imageUrl2 = (await uploadFile(imageFile2)).metadata.name}
          if(imageFile3 || !imageFile3){ imageUrl3= (await uploadFile(imageFile3)).metadata.name}
          // if(!imageFile3){ imageUrl3= (await uploadFile(imageFile3)).metadata.name}

            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, {
              name: data.name,
              price: data.price,
              category: data.category,
              description: data.description,
              quantity: data.stock,
              imageUrl: imageUrl,
              imageUrl2: imageUrl2,
              imageUrl3: imageUrl3,
              time: Timestamp.now(),
              date: new Date().toLocaleString(
                "es-CO",
                  {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                  }
              )
          })
            toast.success("Producto añadido correctamente");
            // navigate('/productos')
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
            toast.error("Error a la añadir producto");
        }
    
      }else{ 
        setLoading(true)
        try {
           const imageFile = document.getElementById('fileInput').files[0];
          const imageFile2 = document.getElementById('fileInput2').files[0];
          const imageFile3 = document.getElementById('fileInput3').files[0];
          if(imageFile && productToEdit.imageUrl ){await updateFile(imageFile,productToEdit.imageUrl);}
          if(imageFile2 && productToEdit.imageUrl ){await updateFile(imageFile2,productToEdit.imageUrl2);}
          if(imageFile3 && productToEdit.imageUrl ){await updateFile(imageFile3,productToEdit.imageUrl3)}
          if(imageFile  && !productToEdit.imageUrl){productToEdit.imageUrl= await uploadFile(imageFile);}
          if(imageFile2  && !productToEdit.imageUrl){productToEdit.imageUrl= await uploadFile(imageFile2);}
          if(imageFile3  && !productToEdit.imageUrl){productToEdit.imageUrl= await uploadFile(imageFile3);}

            await setDoc(doc(fireDB, 'products',productToEdit.id),  {
              name: data.name,
              price: data.price,
              category: data.category,
              description: data.description,
              quantity: data.stock,
              imageUrl: productToEdit.imageUrl,
              imageUrl2: productToEdit.imageUrl2,
              imageUrl3: productToEdit.imageUrl3,
              time: Timestamp.now(),
              date: new Date().toLocaleString(
                "es-CO",
                  {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                  }
              )
          })
            toast.success("Producto actualizado correctamente")
            // getAllProductFunction();
            setLoading(false)
            // navigate('/admin-dashboard')
  
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
       
      }
      
      
    }



    const isNumeric = (value) =>/^[0-9]+$/.test(value);
    const hasOnlyLetters = (value) => /^[a-zA-Z\s]*$/.test(value);
    
    function closeAside(){
        closeAsideAddForm()
        closeAsideEditForm()
    }
  
   
  
  return (
    <aside 
    className={`${isOpenAddForm||isOpenEditForm?'flex':'hidden'} aside-edit-form flex flex-col absolute top-0 right-0 z-30 bg-[#ffffff] text-black w-[450px] sm:w-auto p-6 text-start`}>
         <svg
         onClick={closeAside}
         className='w-8 bg-white rounded-xl cursor-pointer'
         xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
       
        <h1 className='text-[1.5rem]'>{isOpenAddForm?'Agregar':'Editar'} producto</h1>
       {/* <form>
        <label>Sube tu imagen aqui: </label>
        <input type="file" accept="image/png, image/jpeg" onChange={(e)=>{d(e)}}></input>
       </form> */}
      
        {/* <label  >IMAGEN:</label> */}
     
      <label>Sube tu imagen 1 aqui: </label>
      <input 
      // onChange={e=>uploadFile(e.target.files[0])}
       id='fileInput' type="file" accept="image/png, image/jpeg" ></input>
      <label>Sube tu imagen 2 aqui: </label>
      <input id='fileInput2' type="file" accept="image/png, image/jpeg" ></input>
      <label>Sube tu imagen 3 aqui: </label>
      <input id='fileInput3' type="file" accept="image/png, image/jpeg" ></input>

      {
        isOpenEditForm?   <figure className={`w-14 h-14`}><img src={`https://firebasestorage.googleapis.com/v0/b/solyluna-23.appspot.com/o/imagenes%2F${productToEdit.imageUrl}?alt=media&token=d64f2d52-e608-4480-a4c1-cb0733445d89`} alt="" /></figure>
:null
      }

       <form onSubmit={handleSubmit(onSubmit)} className='w-[380px] flex flex-col text-start'>
     
       

      <label className='mt-[18px]'   >Nombre</label>
      {isOpenEditForm?
          <input 
            value={nameValue}
            onChange={(e) => handleChange("name", e)}
            type="text" 
            {...register("name", {required: true, })}
            className={errors.name ? 'border border-Red' : ''}
            />
            :
            <input type="text" {...register("name", {required: true, })}
            className={errors.name ? 'border border-Red' : ''}

            />
}      {errors.name?.type === 'required' && <span className='text-Red'>Campo requerido</span>}

      <label className='mt-[18px]'   >Descripción</label>
        {isOpenEditForm ?
          <textarea
          value={descriptionValue}
            onChange={(e) => handleChange("description", e)}
            type="text" {...register("description", { required: true, })}
            className={errors.description ? 'border border-Red' : 'bg-[#E5E0FF] h-[30px] rounded-md'}
          />
          :
          <textarea type="text" {...register("description", { required: true, })}
            className={errors.description ? 'border border-Red' : 'bg-[#E5E0FF] h-20  rounded-md'}

          />
        }
        {errors.description?.type === 'required' && <span className='text-Red'>Campo requerido</span>}


      <label className='mt-[18px]' >Precio</label>
      <div>
        <span className='mr-1'>$</span>
     {isOpenEditForm? 
     <input 
     value={priceValue}
            onChange={(e) => handleChange("price", e)}
     type="number"  
     maxLength={16} 
     {...register("price", {required: true, validate: {
              inNumeric: (value) => isNumeric(value),
            }, })}
            className={errors.price ? 'border border-Red' : ''}
            />
          :
          <input type="number"  maxLength={16} {...register("price", {required: true, validate: {
            inNumeric: (value) => isNumeric(value),
          }, })}
          className={errors.price ? 'border border-Red' : ''}
          />
          }
                  {errors.price?.type === 'required' && <span className='text-Red'>Campo requerido</span>}

      {errors.price?.type === 'inNumeric' && <span className='text-Red'>Solo numeros</span>}

      </div>
   
      <label className='mt-[18px]' >Stock:</label>
  
       
      {isOpenEditForm? 
     <input 
     value={stockValue}
            onChange={(e) => handleChange("stock", e)}
     type="number"  
    
     {...register("stock", {required: true, validate: {
              inNumeric: (value) => isNumeric(value),
            }, })}
            className={errors.stock ? 'border border-Red' : ''}
            />
          :
          <input type="number" {...register("stock", {required: true, validate: {
            inNumeric: (value) => isNumeric(value),
          }, })}
          className={errors.stock ? 'border border-Red' : ''}
          />
          }
                  {errors.stock?.type === 'required' && <span className='text-Red'>Campo requerido</span>}

      {errors.stock?.type === 'inNumeric' && <span className='text-Red'>Solo numeros</span>}


     
      <label className='mt-[18px]' >Categoría:</label>
   {isOpenEditForm?   <select className='w-full'  
       {...register('category', {
         required:true
        }) } 
        value={categoryValue}
        onChange={(e) => handleChange("category", e)}
        >
         <option value="perfumes-para-hombre">Perfumes para Hombre</option>
         <option value="perfumes-para-mujer">Perfumes para Mujer</option>
         <option value="perfumes-unisex">Perfumes Unisex</option>
         <option value="calzado-hombre">Calzado hombre</option>

       </select>
       : 
       <select className='w-full'  
       
       {...register('category', {
         required:true
        }) } 
        >
       <option value="perfumes-para-hombre">Perfumes para Hombre</option>
         <option value="perfumes-para-mujer">Perfumes para Mujer</option>
         <option value="perfumes-unisex">Perfumes Unisex</option>
         <option value="ofertas">Ofertas</option>
 
       </select>}

     
<button className='relative mt-5'>
<input className='  cursor-pointer input-confirm  mt-0 w-full flex items-center justify-center border-none  h-[50px]  p-1  text-white font-semibold shadow-md transform hover:scale-105 transition duration-300' 
type="submit" 
value="Confirm" />
{loading && <Loader
positionAddProduct={true}
 />}
</button>


    </form>
    
 



        </aside>
  )
}

export default AddandEditForm