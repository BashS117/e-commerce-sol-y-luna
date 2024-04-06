import { useContext } from "react";
import { PerfumesContext } from "../../Context";

const AddButton = ({id,data}) => {
    const {cartProducts,addProductsToCart } = useContext(PerfumesContext);
   
    const handleClick = (event) => {
        if (data.quantity>0) {
            addProductsToCart(event, id, data);
        }
    };


        return (

            <button
                onClick={handleClick}
                className={` bg-blue-medium text-black w-full hover:bg-purple rounded-3 mt-2 p-2 flex justify-center items-center z-[2] ${!data.quantity === 0 && 'cursor-not-allowed'}`}
                >
                {/* <svg
                onClick={(event) => addProductsToCart(event, data.data)}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg> */}
            <span className="text-[14px] font-semibold">Añadir al carrito</span>
                <svg
                fill="white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z" /></svg>
            </button>

        )
    
    
}

export default AddButton;