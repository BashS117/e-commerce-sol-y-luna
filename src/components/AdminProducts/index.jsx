import React from 'react'
import CardForEdit from '../CardForEdit'
import InputSearch from '../InputSearch'
import { useContext , useEffect} from 'react'
import { PerfumesContext } from '../../Context'
import AddandEditForm from '../AddandEditForm'
import EditBanner from '../EditBanner'


const AdminProducts = () => {
    

const {filteredProductos,setSearchByCategory,setSearchByTitle,openAsideAddForm,closeAsideAddForm,AlertUpdateBannerImage}=useContext(PerfumesContext); 


console.log('filteredProductosssss',filteredProductos)
  return (
    <div className='flex flex-col pt-[100px] px-[80px] sm:px-8 sm:pt-[100px] '>
        <div className='flex justify-end my-5'>
            <InputSearch/>
            <button
                      className="border-none  h-[50px] w-[180px] p-1 bg-purple  text-white font-semibold shadow-md transform hover:scale-105 transition duration-300"

             onClick={openAsideAddForm}>
                Agregar
            </button>
        </div>
        
        <div className='flex flex-col justify-start w-full'>
        <p className=' text-start mb-2'># de productos: {filteredProductos?.length}</p>
            

            <details name="editar" className='mb-[8px] p-[10px] rounded-md  open:bg-orange'>
                <summary 
                 onClick={() => {
                    setSearchByTitle(null)
                    setSearchByCategory('perfumes-para-hombre')
                  }}
                 className='cursor-pointer text-start text-[1.4rem]'>Perfumes para Hombre</summary>
            
            <CardForEdit  />
            </details>

            <details name="editar" className='mb-[8px] p-[10px] rounded-md  open:bg-orange'>
                <summary 
                onClick={() => {
                    setSearchByTitle(null)
                    setSearchByCategory('perfumes-para-Mujer')
                  }}
                 className='cursor-pointer text-start text-[1.4rem]'>Perfumes para Mujer</summary>
            
                        <CardForEdit  />
                    
            </details>

            <details name="editar" className='mb-[8px] p-[10px] rounded-md  open:bg-orange'>
                <summary onClick={() => {
                    setSearchByTitle(null)
                    setSearchByCategory('perfumes-unisex')
                  }}
                   className='cursor-pointer text-start text-[1.4rem]'>Perfumes unisex</summary>
            
                        <CardForEdit  />
                    
            </details>

            <details name="editar" className='mb-[8px] p-[10px] rounded-md  open:bg-orange'>
                <summary onClick={() => {
                    setSearchByTitle(null)
                    setSearchByCategory('ofertas')
                  }}
                   className=' cursor-pointer text-start text-[1.4rem]'>Ofertas</summary>
            
                        <CardForEdit  />
                    
            </details>
          

          

           {/* <EditBanner 
           AlertUpdateBannerImage={AlertUpdateBannerImage}
           /> */}

            {/* <details name="editar" className='mb-[8px] p-[10px] rounded-md  open:bg-orange'>
                <summary onClick={() => {
                    setSearchByTitle(null)
                    setSearchByCategory('ventas-al-por-mayor')
                  }}
                   className='cursor-pointer text-start text-[1.4rem]'>Ventas al por mayor</summary>
            
                        <CardForEdit  />
                    
            </details> */}

            <AddandEditForm />
            

        </div>

    </div>
  )
}

export default AdminProducts