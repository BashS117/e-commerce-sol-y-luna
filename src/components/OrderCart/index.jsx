import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { PerfumesContext } from "../../Context"
const OrderCard = props => {
    const {id,name,imageUrl,price,amount,quantity,handleDelete,updateQuantity,inactivebuttons}= props
const {mostrarAlertNotAddedToCart}=useContext(PerfumesContext);
    console.log("quantitu",amount)
    let renderX
    if (handleDelete ) {
        renderX= <svg 
        className="cursor-pointer"
        onClick={()=>handleDelete(id)}
        xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
    }
    const [quantityState, setQuantityState] = useState(amount); // Estado interno para la cantidad
    useEffect(() => {
      setQuantityState(amount)
    }, [amount])
    

    const handleIncrease = () => {
        if(amount<quantity){
            const newQuantity = quantityState + 1;
        setQuantityState(newQuantity);
        updateQuantity(id, newQuantity); // Actualiza la cantidad en cartProducts
        }else{
            mostrarAlertNotAddedToCart()
        }
        
      };
      
      const handleDecrease = () => {
        if (quantityState > 1) {
          const newQuantity = quantityState - 1;
          setQuantityState(newQuantity);
          updateQuantity(id, newQuantity); // Actualiza la cantidad en cartProducts
        }
      };
  return (
    <div className="flex flex-col items-center g py-2  ">
        <div className="flex items-center h-[70px] px-1 w-full justify-between border-[1px] border-b-black border-orange py-2">
            <figure className="w-14 h-14">
                <img className="w-full h-full rounded-lg object-cover" src={`https://firebasestorage.googleapis.com/v0/b/solyluna-23.appspot.com/o/imagenes%2F${imageUrl}?alt=media&token=d64f2d52-e608-4480-a4c1-cb0733445d89`} alt={imageUrl} />
            </figure>
                <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-bold">{name}</p>

                    <p className="text-lg font-medium">1 x ${price}</p>
              
                   
                </div>
                {renderX}
        </div>
                <div className="flex flex-col w-full px-1  border-[1px] border-t-0 border-orange">
                    <div className="flex justify-between">
                        <p>
                            Cantidad
                        </p>
                        <button onClick={handleDecrease} className={`$ px-2 bg-orange`}>
                          -
                        </button>
                        <span className="px-2">{quantityState}</span>
                        <button onClick={handleIncrease} className={`$ px-2 bg-orange`}>
                        +
                        </button>
                    </div>
                    <div className="flex justify-between">
                        <p>
                            Subtotal
                        </p>
                        <p>
                        ${quantityState * price}
                        </p>
                    </div>

                </div>

      </div>
  )
}

export default OrderCard