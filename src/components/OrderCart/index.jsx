const OrderCard = props => {
    const {id,title,imageUrl,price,option,handleDelete}= props
    let renderX
    if (handleDelete ) {
        renderX= <svg 
        className="cursor-pointer"
        onClick={()=>handleDelete(id)}
        xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
    }
    
  return (
    <div className="flex justify-between items-center gap-2 py-2 border-b-[1px] border-gray-400 ">
        <div className="flex items-center gap-2">
            <figure className="w-20 h-20">
                <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
            </figure>
            <p className="text-sm font-bold">{title}</p>
            {option === 1 ? (
                        <p className=' font-medium'>30ml</p>
                    ) : (
                        <span className=' font-medium'>60ml</span>
                    )}     
             <span>x</span>
        </div>
        <div className="flex items-center gap-2">
              <p className="text-lg font-medium">${price}</p>
              
          {renderX}
        </div>

      </div>
  )
}

export default OrderCard