import { useContext } from "react";
import { PerfumesContext } from "../../Context";
import { useState } from "react";
import AddButton from "../AddButton";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Card = (data) => {
    const { count, setCount,
        cartProducts, setCartProducts, openProductDetail,  openCheckOutSideMenu,addProductsToCart } = useContext(PerfumesContext);

        const navigate = useNavigate();
  

    console.log('datos DE productos',data.data)

   

    // const renderIcon = (id) => {
    //     const isInCart = cartProducts.filter(product => product.id === id).length > 0;
    //     if (isInCart) {
    //         return (<div
    //                   style={{ boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }}
    //                  className=" bg-green-400  rounded-full m-2 p-1 absolute top-[-14px] right-[-14px] flex justify-center items-center">
    //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
    //                     <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    //                 </svg>
    //              </div>
    //         )
    //     } else {
    //         return (
    //             <div
    //                 onClick={(event) => addProductsToCart(event, data.data,selectedOption)}
    //                 className="bg-[#3B82F6] rounded-full m-2 p-1.5 absolute top-[-14px] right-[-14px] flex justify-center items-center z-[2] "
    //                 style={{ boxShadow: '5px 5px 3px rgba(0, 0, 0, 0.3)' }}
    //                 >
    //                 {/* <svg
    //                 onClick={(event) => addProductsToCart(event, data.data)}
    //                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-6 h-6">
    //                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    //             </svg> */}
    //             <span className="text-[10px]">Agregar</span>
    //                 <svg
    //                     xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z" /></svg>
    //             </div>

    //         )
    //     }

    // }





    // const [selectedOption, setSelectedOption] = useState(1);

    // const modifiedData = {
    //     ...data.data,  // Copia las propiedades existentes de data.data
    //     selectedOption,  // Añade selectedOption al objeto data.data
    // };
   

    

    

    return (
        <div
            className=' mx-auto   hover:shadow-xl hover:shadow-[#753569]   bg-[#fdf7ed] cursor-pointer w-[18rem] sm:w-[11.5rem]  border border-ligth-gray p-3 '
            onClick={() => {
                
                navigate(`/productdetail/${data.data.id}`)}
            }
            // onClick={() => showingProduct(modifiedData)}
        >

            <figure className='flex  relative mb-0.5 overflow-hidden shadow-xl   w-full h-[55%]'>

                {/* <span className='z-[2] absolute bottom-[-2px] left-[38px] bg-[#b2a9e0b3]/70 rounded-lg text-black text-[8.6px] m-0 p-2 py-0.5 leading-[8px]'>
                    Marca o algún detalle  
                </span> */}
                {/* <span className='z-[2] absolute top-[-5px] left-[-5px] bg-[#b2a9e0b3]/70 rounded-md text-black text-[10px] m-0 p-1'>
                    {data.data.category}
                </span> */}               
             <img className='h-[178px]   w-full rounded-lg z-[2] object-cover' src={`https://firebasestorage.googleapis.com/v0/b/solyluna-23.appspot.com/o/imagenes%2F${data.data.imageUrl}?alt=media&token=d64f2d52-e608-4480-a4c1-cb0733445d89`} alt='imagen' />
             <img className='h-[178px] relative right-10 w-full rounded-lg z-[1] object-cover' src={`https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c0f724175559299.64b9a559c7f3a.png`} alt='imagen' />

            </figure>
            {/* <img 
                className=" w-[30%]  object-cover "
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/30a06d175559299.64b5fc960793a.jpg" alt="" />
                 */}
         
            <div className=" mt-2  flex flex-col  items-center">
                <div className="flex flex-col text-start w-full">
                   <p className="font-bold  text-black ">${data.data.price}</p>
                   <span className=" text-blue-ligth text-[14px]">inspirado en:</span>
                   <h1 className='text-[17px] text-black font-bold pt-0 h-[42px]'>{data.data.name}</h1>
                </div>
               <AddButton id={data.data.id}
                data={data.data}
              
                />

<div className="flex text-black">  
       {data.data.quantity>0 ?   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
</svg>
}
       
         <p className="text-[12px]   mt-1">stock: {data.data.quantity}</p>
</div>

            </div>
        </div>

    )
}
export default Card;