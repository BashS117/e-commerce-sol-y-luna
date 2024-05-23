import React from 'react'
import { useContext,useEffect,useState } from 'react'
import { PerfumesContext } from '../../Context'
import AddButton from '../AddButton';
import ImageGallery from '../ImageGallery';
import { useParams } from "react-router";
import { fireDB } from "../../firebase/Firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from '../Loader';
const ProductDetail = () => {

  

  const {loading, setLoading,isProductDetailOpen,closeProductDetail,setSearchByCategory}=useContext(PerfumesContext);
  
  const [product, setProduct] = useState('')
  const [selectedVolume, setSelectedVolume] = useState('30ml'); // Estado para rastrear el volumen seleccionado

  const { id } = useParams()
  console.log(id)
     // getProductData
     const getProductData = async () => {
      setLoading(true)
      try {
          const productTemp = await getDoc(doc(fireDB, "products", id))
          setProduct(productTemp.data());
          setLoading(false)
      } catch (error) {
          console.log(error)
          setLoading(false)
      }
  }
  
  useEffect(() => {
    getProductData()
}, [])

const goBack = (category) => {
  window.location.href=`/category/${category}`;
}

const handleVolumeChange = (event) => {
  setSelectedVolume(event.target.value); // Actualizar el estado cuando cambie el volumen seleccionado
  const updatedProduct = { ...product }; // Creamos una copia del producto actual
  // Actualizamos el precio del producto dependiendo del volumen seleccionado
  if(event.target.value==='30ml'){
    updatedProduct.price = 15000 ;
    updatedProduct.volume = '30ml' ;

  }else{
    updatedProduct.price = 25000 ;
    updatedProduct.volume = '60ml' ;
  }
  setProduct(updatedProduct); // Actualizamos el estado del producto con el precio ajustado
  
};
const getPrice = () => {
  if (selectedVolume === '60ml') {
    return 25000; // Si el volumen seleccionado es 60ml, ajustar el precio
  }
  return product.price; // De lo contrario, mantener el precio original del producto
};
  return (<>    {loading ?
    <>
        <div className="flex mt-40 justify-center items-center">
            <Loader />
        </div>
    </>:
     <div className={` flex-col py-0 mt-1 px-8 sm:left-0  sm:px-4  sm:w-auto sm:h-auto  z-[3] `}>
  
   
     <div className='flex justify-between items-center pt-0'>
        <h2 className='font-medium text-[1.5rem]'>Detalles del Producto</h2>
       
     </div>
 
    <div className='flex sm:flex-col'>
    <button 
  className='sm:h-auto sm:top-0 sm:mb-2 relative bg-blue-medium rounded-l-none rounded-r-xl  h-[200px]  top-36 w-10 flex justify-center items-center'
  onClick={()=>{
    goBack(product.category)
    setSearchByCategory(product.category)
  }}
  >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
</svg>


  </button>
    <ImageGallery
      img={`https://firebasestorage.googleapis.com/v0/b/solyluna-23.appspot.com/o/imagenes%2F${product.imageUrl}?alt=media&token=d64f2d52-e608-4480-a4c1-cb0733445d89`}
      img2={`https://firebasestorage.googleapis.com/v0/b/solyluna-23.appspot.com/o/imagenes%2F${product.imageUrl2}?alt=media&token=d64f2d52-e608-4480-a4c1-cb0733445d89`}
      // img3={`https://firebasestorage.googleapis.com/v0/b/solyluna-23.appspot.com/o/imagenes%2F${product.imageUrl3 }?alt=media&token=d64f2d52-e608-4480-a4c1-cb0733445d89`}
      selectedVolume={selectedVolume}
      productCategory={product.category}
      />
  
  <div className='flex text-start flex-col w-[600px] h-[528px] px-4  pt-0 sm:h-auto sm:w-auto '>
          <span className='text-lg font-bold text-blue-medium mb-10 sm:mb-4'>Perfumes Sol y Luna</span>
          <h1 className='font-bold text-3xl text-md mb-6'>{product.name}</h1>
          <h1 className='text-[1.2rem] font-bold'>Descripción:</h1>
           <p>{product.description} </p>

          <h1 className='text-[1rem] mt-4 font-bold'>TIPO: {product.category==="premium-hombre"||product.category==="premium-mujer"|| product.category === "ofertas" ?"AAA/1.1":"Inspiración"}</h1>

        {product.category==="premium-hombre"||product.category==="premium-mujer" || product.category === "ofertas"?
        null
      :
      <div>  <strong className='mt-2'>Elige el volumen:</strong>
      <form >
<input 
type="radio" 
id="volumen30" 
name="volumen" 
value="30ml"
checked={selectedVolume === '30ml'} // Marcar el primer radio input como activo por defecto
onChange={handleVolumeChange}
/>
<label for="volumen30">30ml</label>
<input type="radio" id="volumen60" name="volumen" value="60ml"
checked={selectedVolume === '60ml'}
onChange={handleVolumeChange}
/>
<label for="volumen60">60ml</label>
</form></div>
      }
          <span className='border-t-purple border-t text-lg font-bold'>${getPrice()}</span>
  
      {/* <span className='font-light text-sm'>${product.description}</span> */}
      <div className='w-[300px] sm:w-full'>
  
      
      <AddButton
  id={`${id}`}
  data={product}/>
  </div>
     </div>
  
    
      {/*<figure className='px-6'>
      
      <img 
      className='w-full h-40 rounded-lg object-contain' 
      src={product.imageUrl?`https://jfwtxeqtnedqbstolkqh.supabase.co/storage/v1/object/public/images/${product.imageUrl}`:""} 
      alt={productToShow.name} />
     </figure>
     <figure className='px-6'>
      <img 
      className='w-full h-40 rounded-lg object-contain' 
      src={productToShow.imageUrl2?`https://jfwtxeqtnedqbstolkqh.supabase.co/storage/v1/object/public/images/${productToShow.imageUrl2}`:""} 
      alt={productToShow.name} />
     </figure>
     <figure className='px-6'>
      <img 
      className='w-full h-40 rounded-lg object-contain' 
      src={productToShow.imageUrl3?`https://jfwtxeqtnedqbstolkqh.supabase.co/storage/v1/object/public/images/${productToShow.imageUrl3}`:""} 
      alt={productToShow.name} />
     </figure> */}
    
  
      </div>
      <section className='flex justify-start text-start mt-2 sm:mt-4'>
        <div className='w-[50%] sm:w-auto flex flex-col gap-2'> 
           
           <p> {`No esperes más y adquiere ${product.name} con las mejores condiciones de envío y al mejor precio. Además en Perfumeria Sol y Luna tienes a tu disposición otro tipo de envases para tu perfume que pueden complementar tu compra. Adquiere ${product.name} y recíbelo cuanto antes en casa.`}</p>
        </div>
        {/* <div>  
          <h1 className='text-[1.2rem] font-bold'>Descripción</h1>
          <p>{product.description}   </p>
          </div> */}

      </section>

  
      </div>
    }
  </>
   
  )
}

export default ProductDetail