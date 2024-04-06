import React from 'react'
// import { supabase } from '../../supabase/client'
import {v4 as uuidv4} from 'uuid';
import { updateFile} from "../../firebase/Firebaseconfig";
import toast from "react-hot-toast";

const EditBanner = ({AlertUpdateBannerImage}) => {
    

    async function handleUpdateImg(imageUrltoReplace,fileUpdate){
        const imageFile = document.getElementById(fileUpdate).files[0]; // Obtener el archivo del input de archivo
        await updateFile(imageFile,imageUrltoReplace)
        toast.success("Imagen Actualizada");

      }
  return (
    <div><h2 className='font-bold mt-4'>Imagenes del Banner</h2>
    <ul className='text-start'>
        <li className='mb-4 py-2' >
          <label>Sube tu imagen de Banner 1 aqui: </label>
           <input id='fileBanner' type="file" accept="image/png, image/jpeg" ></input>
           
           {/* <button 
           onClick={()=>handleUploadBanner('fileBanner')}
           className='ml-6 bg-orange'>Subir Archivo primera vez</button>
            */}
           <button 
            onClick={()=>handleUpdateImg('banner1.jpg','fileBanner')}
           className='ml-6 p-2 bg-orange'>Actualizar</button>  
        </li>

        <li className='mb-4 py-2'>
       <label>Sube tu imagen de Banner 2 aqui: </label>
         <input id='fileBanner2' type="file" accept="image/png, image/jpeg" ></input>

         {/* <button 
           onClick={()=>handleUploadBanner('fileBanner2')}
           className='ml-6 bg-orange'>Subir Archivo primera vez</button>
          */}
           <button 
            onClick={()=>handleUpdateImg('banner2.jpg','fileBanner2')}
           className='ml-6 p-2 bg-orange'>Actualizar</button>
        </li>

        <li className='py-2'>
       <label>Sube tu imagen de Banner 3 aqui: </label>
        <input id='fileBanner3' type="file" accept="image/png, image/jpeg" ></input>

        {/* <button 
           onClick={()=>handleUploadBanner('fileBanner3')}
           className='ml-6 bg-orange'>Subir Archivo primera vez</button>
            */}
           <button 
            onClick={()=>handleUpdateImg('banner3.jpg','fileBanner3')}
           className='p-2 ml-6 bg-orange'>Actualizar</button>
        </li>
     </ul>
    {/* imagenes mobile banner */}
     {/* <h2 className='font-bold mt-4'>Imagenes del Banner Mobile</h2>

     <ul className='text-start'>
        <li className='mb-4 py-2 ' >
          <label>Sube tu imagen de Banner de Celular 1 aqui: </label>
           <input className='w-full' id='fileBannerMobile' type="file" accept="image/png, image/jpeg" ></input>
           
           <button 
            onClick={()=>handleUpdateImg('bannermob1.jpg','fileBannerMobile')}
           className='ml-6 p-2 bg-orange'>Actualizar</button>  
        </li>

        <li className='mb-4 py-2'>
       <label>Sube tu imagen de Banner de Celular 2 aqui: </label>
         <input className='w-full' id='fileBannerMobile2' type="file" accept="image/png, image/jpeg" ></input>

       
           <button 
            onClick={()=>handleUpdateImg('bannermob2.jpg','fileBannerMobile2')}
           className='ml-6 p-2 bg-orange'>Actualizar</button>
        </li>

        <li className='py-2 '>
       <label>Sube tu imagen de Banner de Celular 3 aqui: </label>
        <input className='w-full' id='fileBannerMobile3' type="file" accept="image/png, image/jpeg" ></input>

           <button 
            onClick={()=>handleUpdateImg('bannermob3.jpg','fileBannerMobile3')}
           className='p-2 ml-6 bg-orange'>Actualizar</button>
        </li>
     </ul> */}
     
     <h2 className='font-bold mt-4'>Imagenes del Segundo Banner </h2>

     <ul className='text-start'>
        <li className='mb-4 py-2 ' >
          <label>Sube tu imagen del Segundo Banner aqui: </label>
           <input className='w-full' id='fileSecondBanner' type="file" accept="image/png, image/jpeg" ></input>
           
         
           <button 
            onClick={()=>handleUpdateImg('secondbanner1.jpg','fileSecondBanner')}
           className='ml-6 p-2 bg-orange'>Actualizar</button>  
        </li>

        <li className='mb-4 py-2'>
       <label>Sube tu imagen 2 del segundo Banner aqui: </label>
         <input className='w-full' id='fileSecondBanner2' type="file" accept="image/png, image/jpeg" ></input>

        
           <button 
            onClick={()=>handleUpdateImg('secondbanner2.jpg','fileSecondBanner2')}
           className='ml-6 p-2 bg-orange'>Actualizar</button>
        </li>

    
     </ul>
     <h2 className='font-bold mt-4'>Imagenes de categorias </h2>

     <ul className='text-start'>
        <li className='mb-4 py-2 ' >
          <label>Sube tu imagen de la categoria 1 aqui: </label>
           <input className='w-full' id='categoria1' type="file" accept="image/png, image/jpeg" ></input>
           
         
           <button 
            onClick={()=>handleUpdateImg('categoria1.jpg','categoria1')}
           className='ml-6 p-2 bg-orange'>Actualizar</button>  
        </li>

        <li className='mb-4 py-2'>
       <label>Sube tu imagen de la categoria 2 aqui: </label>
         <input className='w-full' id='categoria2' type="file" accept="image/png, image/jpeg" ></input>

        
           <button 
            onClick={()=>handleUpdateImg('categoria2.jpg','categoria2')}
           className='ml-6 p-2 bg-orange'>Actualizar</button>
        </li>
        <li className='mb-4 py-2 ' >
          <label>Sube tu imagen  de la categoria 3 aqui: </label>
           <input className='w-full' id='categoria3' type="file" accept="image/png, image/jpeg" ></input>
           
         
           <button 
            onClick={()=>handleUpdateImg('categoria3.jpg','categoria3')}
           className='ml-6 p-2 bg-orange'>Actualizar</button>  
        </li>

        <li className='mb-4 py-2'>
       <label>Sube tu imagen  de la categoria 4 aqui: </label>
         <input className='w-full' id='categoria4' type="file" accept="image/png, image/jpeg" ></input>

        
           <button 
            onClick={()=>handleUpdateImg('categoria4.jpg','categoria4')}
           className='ml-6 p-2 bg-orange'>Actualizar</button>
        </li>

    
     </ul>
    </div>
  )
}

export default EditBanner