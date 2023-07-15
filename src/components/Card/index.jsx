import { useContext } from "react";
import { PerfumesContext } from "../../Context";


const Card = (data) => {

    const { count,setCount,
        cartProducts, setCartProducts,openProductDetail,setProductToShow,openCheckOutSideMenu } = useContext(PerfumesContext);

        const showingProduct = (ProductDetail)=>{
            openProductDetail();
            setProductToShow(ProductDetail);
            // closeCheckOutSideMenu()
        }

console.log(data)

const addProductsToCart=(event,productData)=>{
    event.stopPropagation();
    setCount(count + 1)
    
    setCartProducts([...cartProducts,productData])
    // openCheckOutSideMenu();
    openCheckOutSideMenu();
    
    // closeProductDetail();

    
}

const renderIcon = (id) => {
    const isInCart = cartProducts.filter(product => product.id === id).length > 0;
    if (isInCart) {
        return (<div
            className=" bg-green-400  rounded-full m-2 p-1 absolute top-0 right-0 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
        </div>

        )

    } else {
        return (

            <div
                className=" bg-white  rounded-full m-2 p-1 absolute top-0 right-0 flex justify-center items-center">
                <svg
                    onClick={(event) => addProductsToCart(event, data.data)}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>

        )
    }

}

   


    return (
        <div
            className='max-w-xs mx-auto overflow-hidden shadow-xl     bg-white cursor-pointer w-40 h-46 rounded-lg p-3'
            // onClick={() => showProduct(data.data)}
            onClick={()=> showingProduct(data.data)}
        >
            <figure className='relative mb-2 w-full h-4/5'>

                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-2'>
                    referencia
                    </span>
                <span className='absolute bottom-50 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-2'>
                    {data.data.category}
                    </span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.image} alt={data.data.name} />

                {renderIcon(data.data.id)}



            </figure>
            <p className="flex justify-between">
                <span className='text-sm font-light'>{data.data.name}</span>
                <span className='text-lg font-medium'>{data.data.unit_price}</span>
            </p>
        </div>

    )
}
export default Card;