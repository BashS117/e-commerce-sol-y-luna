import React from 'react'
import { useContext } from 'react'
import { PerfumesContext } from '../../Context'

const ProductDetail = () => {

  const {isProductDetailOpen,closeProductDetail,productToShow}=useContext(PerfumesContext);
  

  return (
    <aside className={`${isProductDetailOpen? 'flex':'hidden'} flex-col fixed right-[20px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-130px)] z-[3] `}>
   
   <div className='flex justify-between items-center p-3'>
    <h2 className='font-medium text-xl'>Detail</h2>
    <svg onClick={()=>closeProductDetail()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>



   </div>

   <figure className='px-6'>
    <img 
    className='w-full h-40 rounded-lg object-contain' 
    src={productToShow.image?productToShow.image:""} 
    alt={productToShow.name} />
   </figure>
   <p className='flex flex-col p-6'>
    <span className='font-medium text-2xl mb-2'>${productToShow.unit_price}</span>
    <span className='font-medium text-md'>${productToShow.name}</span>
    {/* <span className='font-light text-sm'>${productToShow.description}</span> */}

   </p>



    </aside>
  )
}

export default ProductDetail