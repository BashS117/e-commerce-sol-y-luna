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
            className=" bg-green-400  rounded-full m-2 p-1 absolute top-[-14px] right-[-14px] flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
        </div>

        )

    } else {
        return (

            <div
                className=" bg-[#E5E0FF]  rounded-full m-2 p-1.5 absolute top-[-14px] right-[-14px] flex justify-center items-center">
                {/* <svg
                    onClick={(event) => addProductsToCart(event, data.data)}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> */}
                <svg
                onClick={(event) => addProductsToCart(event, data.data)}
                 xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/></svg>
            </div>

        )
    }

}

const renderSecondImage=()=>{
    if(data.data.category!=="vela"){
        return(
            <img 
            className=" w-[45%] h-20 absolute right-2 top-7 object-cover "
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c0f724175559299.64b9a559c7f3a.png" alt="" />
            
        );
    }
    return null;
}



   


    return (
        <div
            className='max-w-xs mx-auto overflow-hidden shadow-xl     bg-white cursor-pointer w-40 h-[205px] rounded-lg p-3'
            // onClick={() => showProduct(data.data)}
            onClick={()=> showingProduct(data.data)}
        >
            
            <figure className='flex relative mb-0.5  w-full h-4/5'>

                <span className='z-[2] absolute bottom-[-2px] left-[-5px] bg-[#b2a9e0b3]/70 rounded-lg text-black text-[8px] m-0 p-2 py-0.5'>
                    referencia a comparacion con nuestras fragancias
                    </span>
                <span className='z-[2] absolute top-[-5px] left-[-5px] bg-[#b2a9e0b3]/70 rounded-md text-black text-[10px] m-0 p-1'>
                    {data.data.category}
                    </span>
                <img className=' w-[92px] h-30 object-contain rounded-lg z-[1]' src={data.data.image} alt={data.data.name} />
              {renderSecondImage()}
              
               
                
                {renderIcon(data.data.id)}
            </figure>
            {/* <img 
                className=" w-[30%]  object-cover "
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/30a06d175559299.64b5fc960793a.jpg" alt="" />
                 */}
            <p className=" text-[#d69511] text-[8px] absolute  ">Inspirado en:</p>

            <p className="justify-between mt-2 mb-2 flex text-start items-center">
                <span className='text-sm font-semibold'>{data.data.name}</span>
                <span className='text-lg font-medium'>${data.data.unit_price}</span>
            </p>
        </div>

    )
}
export default Card;