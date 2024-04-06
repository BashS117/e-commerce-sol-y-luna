import React from 'react'
import CheckOutOrder from '../../components/CheckoutOrder'
import SelectedInputDep from '../../components/SelectedInputDepartment'
import {useForm} from 'react-hook-form'
import OrdenRecivida from '../../components/OrdenRecibida'


const Checkout = () => {

    const {register, handleSubmit,formState:{errors},}=useForm();

  return (
    <div className='pt-[130px] px-[80px] py-[20px] sm:px-4 sm:pt-[130px]'>
        <div className='flex text-[8px] font-bold w-full justify-between  sm:px-0'>
            <h1 className='text-orange'>1.CHECKOUT</h1>
            <span className='text-[18px] text-ligth-gray'>{`>`}</span>
            <span className='text-[18px] text-ligth-gray'>{`>`}</span>
            <span className='text-[18px] text-ligth-gray'>{`>`}</span>
            <h1 className='text-ligth-gray'>2.FINALIZAR COMPRA</h1>
        </div>
        <OrdenRecivida/>

        <div className='pt-10 flex sm:flex-col sm:pt-4'>
            <section className='text-start w-[60%]  flex flex-col sm:w-full'>
                <h2 className='font-bold'>DETALLES DE FACTURACIÓN:</h2>
                
                <form   className=' form-checkout mt-2 gap-4 flex flex-col' action="">
                    <div className='flex gap-2'>
                        <div className='flex flex-col'>
                        <label htmlFor="">Documento *</label>
                        <input
                        {...register("document", {required: true, })}
                         className=' sm:w-[150px]' type="text" />
                               {errors.document?.type === 'required' && <span className='text-orange'>Campo requerido</span>}
                        </div>

                        <div className='flex flex-col'>
                        <label htmlFor="">Nombre *</label>
                        <input
                         {...register("name", {required: true, })}
                          className=' sm:w-[150px]' type="text" />
                       {errors.name?.type === 'required' && <span className='text-orange'>Campo requerido</span>}
                        </div>

                    </div>
                    <div className='flex flex-col' >
                      <label htmlFor="">Apellidos *</label>
                        <input
                         {...register("apellidos", {required: true, })}
                         type="text" />
                         {errors.apellidos?.type === 'required' && <span className='text-orange'>Campo requerido</span>}

                    </div>
                    
                    <div className='flex flex-col'>
                        <label htmlFor="">Dirección *</label>
                        <input 
                        {...register("direccion", {required: true, })}
                        type="text" />
                         {errors.direccion?.type === 'required' && <span className='text-orange'>Campo requerido</span>}
                    </div>
                    <div className='flex gap-4'>
                        <div>
                        <label htmlFor="">Departamento *</label>
                        <SelectedInputDep register={register}/>
                        </div>
                        <div className='flex flex-col'>
                        <label htmlFor="">Ciudad/Municipio *</label>
                        <input 
                         {...register("ciudad", {required: true, })}
                        type="text" />
                         {errors.ciudad?.type === 'required' && <span className='text-orange'>Campo requerido</span>}
                        </div>
                    </div>
                      <div className='flex flex-col'>

                          <label htmlFor="">Telefono *</label>
                          <input                
                        {...register("telefono", {required: true, })}
                          type="number" />
                           {errors.telefono?.type === 'required' && <span className='text-orange'>Campo requerido</span>}
                      </div>

                      <div className='flex flex-col'> <label htmlFor="">Dirección de Correo Electrónico *</label>
                          <input
                           {...register("email", {required: true, })}
                           type="email" />
                            {errors.email?.type === 'required' && <span className='text-orange'>Campo requerido</span>}
                      </div>

                      <div className='flex flex-col'><label htmlFor="">Notas del pedido (opcional)</label>
                          <input 
                         {...register("nota" )}                                                  
                            type="text" />

                      </div>
                     

                </form>

            </section>
                <CheckOutOrder handleSubmit={handleSubmit}
                
                />
        </div>
    </div>
  )
}

export default Checkout