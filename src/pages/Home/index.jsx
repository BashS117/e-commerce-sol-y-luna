import React from 'react'
import Card from '../../components/Card'
import { useContext } from 'react'
import { PerfumesContext } from '../../Context'
import './home.css'

const Home = () => {
    const {perfumes,searchByTitle,setSearchByTitle,filteredPerfumes}=useContext(PerfumesContext); 

  const renderView = () => {
    
    
    if (filteredPerfumes?.length > 0) {
        return (
          filteredPerfumes.map(product => (
            <Card key={product.id} data={product} />
          ))
        )
      }else{
        return(
          <div>No tenemos ese perfume</div>
        )
      }
      



    }  
    
    
    // else {
    //   return (
    //     perfumes?.products.map(product => (
    //       <Card key={product.id} data={product} />
    //     ))
    //   )
    // }



  return (<>
    <div className='App   text-center w-[100vw] '>
    <div className='relative w-400 items-center justify-center mb-5'> 
      <h1 className='home-tittle font-medium text-xl'>ESENCIAS DE PERFUMES PARA TODA OCASIÓN</h1>
      <p className='home-subtitle'>¡Tu aroma te define!</p>
    </div>

   


      <div className='sm:grid-cols-2 grid gap-26 gap-y-5 mt-30 place-content-center grid-cols-4 '>
          {
      renderView()
      } 
      </div>
    </div>
    {/* <iframe src="https://whatsform.com/4FQHtz"  width="100%" height="600" frameBorder="0"></iframe> */}
   
  </>
  )
}

export default Home