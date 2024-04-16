import React from 'react'
import Card from '../../components/Card'
import { NavLink, useParams } from "react-router-dom"
import { useContext , useEffect} from 'react'
import { PerfumesContext } from '../../Context'
import WhatsAppButton from '../../components/WhatsAppButton'
// import { supabase } from '../../supabase/client'
// import { useState } from 'react'
import './home.css'
import SliderGallery from '../../components/SliderGallery/indes'
import SliderGallerySecondBanner from '../../components/SecondBanner'
import { useLocation } from 'react-router-dom'


const Home = () => {

  
    const {productos,perfumes,searchByTitle,setSearchByTitle,setSearchByCategory,filteredProductos,isOpenMenu,closeSideMenu}=useContext(PerfumesContext); 



  const renderView = () => {
    
    
    if (filteredProductos?.length > 0) {
        return (
          filteredProductos.map(product => (
            <Card key={product.id} data={product} />
          ))
        )
      }else{
        return(
          <div>CARGANDO...</div>
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

    const location = useLocation();

    // Filtrar productos por categoría solo cuando la ubicación sea "/"
    // useEffect(() => {
    //     if (location.pathname === '/') {
    //         setSearchByCategory('telefoniaycomputo');
    //     }
    // }, [location.pathname]);
  
  
const {categoryname}=useParams();
useEffect(()=>{
  if(categoryname){
    setSearchByCategory(categoryname)
  }
})

  return (<>
{location.pathname === '/' &&  <figure>
    <img className='w-full' src="https://firebasestorage.googleapis.com/v0/b/blue-fashion-983e2.appspot.com/o/imagenes%2Fsecondbanner1.jpg?alt=media&token=d6f78fa2-9034-4a18-bf50-0038362114c9" alt="" />
  </figure>}
  {/* {location.pathname === '/' &&<SliderGallery/>} */}
            {/* <div className='px-[80px]'>
            
            </div> */}

            {/* `BANNERS SECTIONS` */}
            {/* {location.pathname === '/' &&
            <section className=' bg-white sm:px-0 flex justify-between px-4  
            gap-2 sm:flex-col sm:m-0'>
              <div className='w-[full] '>
                <SliderGallerySecondBanner/>
              </div>
              <div className='flex flex-col py-2  w-[50vw] sm:w-auto mx-2'>
                <div className='flex gap-2  h-full '>
                  <figure className='rounded-md  overflow-hidden' >
                    <img className='h-full ' src= {'https://firebasestorage.googleapis.com/v0/b/blue-fashion-983e2.appspot.com/o/imagenes%2Fcategoria1.jpg?alt=media&token=d6f78fa2-9034-4a18-bf50-0038362114c9'} alt="" />
                  </figure>
                  <figure className='rounded-md  overflow-hidden'>
                    <img className='h-full ' src= {`https://firebasestorage.googleapis.com/v0/b/blue-fashion-983e2.appspot.com/o/imagenes%2Fcategoria2.jpg?alt=media&token=d6f78fa2-9034-4a18-bf50-0038362114c9`} alt="" />
                  </figure>
                </div>
                <div className='flex h-full gap-2 mt-2'>
                  <figure className='rounded-md overflow-hidden'>
                    <img className='h-full' src= {`https://firebasestorage.googleapis.com/v0/b/blue-fashion-983e2.appspot.com/o/imagenes%2Fcategoria3.jpg?alt=media&token=d6f78fa2-9034-4a18-bf50-0038362114c9`} alt="" />
                  </figure>
                  <figure className='rounded-md overflow-hidden'>
                    <img className='h-full' src= {`https://firebasestorage.googleapis.com/v0/b/blue-fashion-983e2.appspot.com/o/imagenes%2Fcategoria4.jpg?alt=media&token=d6f78fa2-9034-4a18-bf50-0038362114c9`} alt="" />
                  </figure>
                </div>
              </div>

            </section>} */}
        <div className='flex px-[80px] pt-4 sm:px-0 sm:flex-col-reverse gap-4'>
          {/* <div  className={`  sm:bg-[#E5E0FF]  sm:left-0 sm:top-0 sm:w-[auto]     items-start  sm:flex-col`}>
            <ul className={`${isOpenMenu? 'sm:flex':'sm:hidden' } categories w-[240px] 
           sm:text-[1rem]  
           sm:text-start flex  flex-col  sm:fixed sm:top-0 sm:bg-white sm:z-20 
           
          `}>



            <div className='text-[1.4rem] py-[10px] text-[#3A3535] bg-orange  font-bold pl-2'>
            <button
      className="bg-[transparent] sm:w-[45px] sm:h-[45px] hidden sm:flex"
      onClick={()=>closeSideMenu()}
      >
      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
</button>
              Categorias</div>

            <li className="sm:pl-2 sm:py-3 sm:border-b-[1px]  sm:border-t-[1px] sm:border-t-gray-400">
            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 48.832 48.832" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="Layer_20_51_"> <g> <polygon points="15.42,32.814 22.23,32.814 22.23,34.385 15.42,34.385 15.42,35.68 36.838,35.68 36.838,34.385 28.898,34.385 28.898,32.814 37.729,32.814 37.729,29.227 15.42,29.227 "></polygon> <polygon points="9.489,11.231 41.957,11.231 41.957,24.209 44.739,24.209 44.739,8.449 6.707,8.449 6.707,17.14 9.489,17.14 "></polygon> <path d="M0,39.799h14.523V18.013H0V39.799z M7.568,38.705c-0.386,0-0.7-0.312-0.7-0.699c0-0.386,0.314-0.699,0.7-0.699 c0.387,0,0.699,0.312,0.699,0.699S7.955,38.705,7.568,38.705z M2.1,20.113h10.325l-0.001,16.072H2.1V20.113z"></path> <path d="M38.715,25.046v15.337h10.117V25.046H38.715z M43.979,25.68c0.121,0,0.22,0.101,0.22,0.221 c0,0.121-0.099,0.222-0.22,0.222c-0.123,0-0.223-0.101-0.223-0.222C43.756,25.78,43.855,25.68,43.979,25.68z M42.665,26.416 h2.623v0.212h-2.623V26.416z M43.891,39.721c-0.291,0-0.524-0.236-0.524-0.525c0-0.29,0.233-0.524,0.524-0.524 c0.289,0,0.525,0.234,0.525,0.524C44.416,39.484,44.18,39.721,43.891,39.721z M47.369,37.915 c-2.368,0.013-6.016,0.022-7.189,0.012V27.382l7.189-0.001V37.915z"></path> </g> </g> </g> </g></svg>            
              <NavLink
                to='/telefoniaycomputo'
                onClick={() => {
                  setSearchByTitle(null)
                  setSearchByCategory('telefoniaycomputo')
                }}
                className={({ isActive }) =>
                  isActive ? activeStyle : 'text-[#3A3535] sm:text-inherit'
                }>
                TELEFONÍA Y COMPUTO
              </NavLink>
            </li>

            <li className="sm:pl-2 sm:py-3 sm:border-b-[1px] sm:border-b-gray-400">
              <svg fill="#000000" width="25px" height="25px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.0078125 3.9980469C5.3633536 3.9980469 4.0078125 5.3524737 4.0078125 6.9980469L4.0078125 40.001953C4.0078125 41.646923 5.3628427 43.001953 7.0078125 43.001953L8 43.001953L8 45 A 1.0001 1.0001 0 0 0 9 46L13 46 A 1.0001 1.0001 0 0 0 14 45L14 43.001953L22 43C22 44.64497 23.35503 46 25 46L43 46C44.64497 46 46 44.64497 46 43L46 23C46 21.35503 44.64497 20 43 20L33 20L33 7C33 5.3549372 31.645063 4 30 4L7.0078125 3.9980469 z M 7.0078125 5.9980469L30 6C30.562937 6 31 6.4370628 31 7L31 15L6.0078125 15L6.0078125 6.9980469C6.0078125 6.43362 6.4442714 5.9980469 7.0078125 5.9980469 z M 9.984375 7.9863281 A 1.0001 1.0001 0 0 0 9 9L9 12 A 1.0001 1.0001 0 1 0 11 12L11 9 A 1.0001 1.0001 0 0 0 9.984375 7.9863281 z M 6.0078125 17L31 17L31 20L25 20C23.35503 20 22 21.35503 22 23L22 41L13.070312 41.001953 A 1.0001 1.0001 0 0 0 13.042969 41.001953 A 1.0001 1.0001 0 0 0 13 41L9 41 A 1.0001 1.0001 0 0 0 8.9707031 41.001953L7.0078125 41.001953C6.4427823 41.001953 6.0078125 40.566983 6.0078125 40.001953L6.0078125 17 z M 9.984375 18.986328 A 1.0001 1.0001 0 0 0 9 20L9 24 A 1.0001 1.0001 0 1 0 11 24L11 20 A 1.0001 1.0001 0 0 0 9.984375 18.986328 z M 25 22L43 22C43.56503 22 44 22.43497 44 23L44 43C44 43.56503 43.56503 44 43 44L25 44C24.43497 44 24 43.56503 24 43L24 23C24 22.43497 24.43497 22 25 22 z M 37 24 A 1 1 0 0 0 37 26 A 1 1 0 0 0 37 24 z M 41 24 A 1 1 0 0 0 41 26 A 1 1 0 0 0 41 24 z M 34 28C32.083334 28 30.518559 28.754756 29.501953 29.898438C28.485347 31.042119 28 32.527778 28 34C28 35.472222 28.485347 36.957881 29.501953 38.101562C30.518559 39.245244 32.083334 40 34 40C35.916666 40 37.481441 39.245244 38.498047 38.101562C39.514653 36.957881 40 35.472222 40 34C40 32.527778 39.514653 31.042119 38.498047 29.898438C37.481441 28.754756 35.916666 28 34 28 z M 34 30C35.416666 30 36.351893 30.495244 37.001953 31.226562C37.652013 31.957881 38 32.972222 38 34C38 35.027778 37.652013 36.042119 37.001953 36.773438C36.351893 37.504756 35.416666 38 34 38C32.583334 38 31.648107 37.504756 30.998047 36.773438C30.347987 36.042119 30 35.027778 30 34C30 32.972222 30.347987 31.957881 30.998047 31.226562C31.648107 30.495244 32.583334 30 34 30 z M 10 43.001953L12 43.001953L12 44L10 44L10 43.001953 z"></path></g></svg>
              <NavLink
                to='/electrodomesticos'
                onClick={() => {
                  setSearchByTitle(null)

                  setSearchByCategory('electrodomesticos')
                }}

                className={({ isActive }) =>
                  isActive ? activeStyle : 'text-[#3A3535] sm:text-inherit'
                }>
                ELECTRODOMÉSTICOS
              </NavLink>
            </li>

            <li className="sm:pl-2 sm:py-3 sm:border-b-[1px] sm:border-b-gray-400">
              
            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 93.314 93.314" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="21.598,0 9.468,16.984 24.022,6.933 "></polygon> <path d="M73.634,18.349V8.82H62.936V0.119H25.735l2.992,8.557L9.88,21.691v51.16h17.287v10.934H37.38v9.529h46.467V18.349H73.634z M31.522,79.43v-6.578h31.414V13.176h6.343V79.43H31.522L31.522,79.43z M79.489,88.959H41.735v-5.174h31.898v-61.08h5.854v66.254 H79.489z"></path> </g> </g> </g></svg>
              <NavLink
                to='/papeleria'
                onClick={() => {
                  setSearchByTitle(null)

                  setSearchByCategory('papeleria')
                }}

                className={({ isActive }) =>
                  isActive ? activeStyle : 'text-[#3A3535] sm:text-inherit'
                }>
                PAPELERÍA
              </NavLink>
            </li>

            <li className="sm:pl-2 sm:py-3 sm:border-b-[1px] sm:border-b-gray-400">
            <svg fill="#000000" width="25px" height="25px" viewBox="0 0 50 50" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.551 49.485c-.34.596-1.308.69-2.162.2l-5.346-3.043c-.85-.485-1.265-1.362-.924-1.957l22.737-36.043c3.27-5.286-8.16-4.82-10.966-3.264 2.122-3.805 8.885-5.061 13.271-5.378l1.276.083c2.479 1.235 6.034 3.088 8.377 4.642 1.721 2.703 3.536 4.126 6.106 4.119 3.354 2.57-1.885 9.581-5.181 6.334.018-1.604-4.636-5.754-7.896-2.335l-19.292 36.642z"></path></g></svg>
              <NavLink
                to='/ferreteria'
                onClick={() => {
                  setSearchByTitle(null)

                  setSearchByCategory('ferreteria')
                }}

                className={({ isActive }) =>
                  isActive ? activeStyle : 'text-[#3A3535] sm:text-inherit'
                }>
                FERRETERÍA
              </NavLink>
            </li>

            <li className="sm:pl-2 sm:py-3 sm:border-b-[1px] sm:border-b-gray-400">
  <svg fill="#000000" height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 361.055 361.055" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M85.949,190.646c1.716,0,3.319-0.48,4.685-1.313c5.786,32.58,25.088,61.252,53.222,77.648 c14.066,8.199,25.371,11.864,36.656,11.883c0.004,0,0.009,0,0.014,0c0,0,0,0,0.001,0s0.001,0,0.001,0c0.004,0,0.01,0,0.014,0 c11.284-0.019,22.59-3.684,36.657-11.883c28.133-16.396,47.436-45.069,53.223-77.649c1.365,0.834,2.97,1.314,4.687,1.314 c4.971,0,9-4.029,9-9s-4.029-9-9-9h-0.004c-1.034,0-2.027,0.175-2.952,0.495c0.056-1.474,0.083-2.951,0.083-4.434 c0-15.168-2.147-29.274-6.39-42.017c0.333-0.15,0.661-0.323,0.981-0.519c4.244-2.587,5.589-8.125,3.002-12.369 c-9.066-14.876-20.081-27.081-32.423-36.229c2.159-6.093,3.25-12.472,3.25-19.043C240.655,26.257,213.682,0,180.526,0 c-33.154,0-60.127,26.257-60.127,58.531c0,6.562,1.092,12.943,3.252,19.042c-12.343,9.148-23.358,21.354-32.425,36.23 c-2.586,4.244-1.243,9.782,3.002,12.369c0.32,0.194,0.647,0.367,0.98,0.519c-4.242,12.74-6.39,26.847-6.39,42.017 c0,1.482,0.027,2.96,0.083,4.435c-0.925-0.321-1.919-0.496-2.953-0.496h-0.004c-4.971,0-8.998,4.029-8.998,9 S80.979,190.646,85.949,190.646z M180.526,18c23.23,0,42.129,18.183,42.129,40.531c0,3.184-0.373,6.302-1.114,9.33 c-12.859-6.335-26.717-9.678-41.012-9.678c-14.296,0-28.154,3.343-41.014,9.679c-0.742-3.031-1.116-6.15-1.116-9.331 C138.399,36.183,157.298,18,180.526,18z M180.531,76.184c26.894,0,52.185,14.954,70.234,41.277 c-0.135,0.088-0.267,0.179-0.396,0.272c-16.695,11.584-42.09,18.243-69.715,18.275c-0.065,0-0.132,0-0.197,0 c-27.621,0-53.03-6.657-69.777-18.278c-0.128-0.093-0.259-0.183-0.392-0.27C128.339,91.139,153.633,76.184,180.531,76.184z M110.455,138.566c39.32,20.568,100.821,20.57,140.144,0c2.415,9.268,3.636,19.362,3.636,30.142 c0,34.452-17.664,66.149-46.101,82.723c-11.164,6.507-19.68,9.417-27.607,9.434c-7.928-0.017-16.443-2.927-27.606-9.434 c-28.437-16.573-46.101-48.271-46.101-82.723C106.819,157.927,108.039,147.832,110.455,138.566z M94.949,252.489 c0,4.971-4.029,9-9,9s-9-4.029-9-9v-43.132c0-4.971,4.029-9,9-9s9,4.029,9,9V252.489z M284.104,209.357v43.132c0,4.971-4.029,9-9,9 s-9-4.029-9-9v-43.132c0-4.971,4.029-9,9-9S284.104,204.387,284.104,209.357z M272.646,354.681c-1.184,3.878-4.75,6.374-8.604,6.374 c-0.87,0-1.755-0.127-2.631-0.395c-33.23-10.146-53.391-26.122-59.922-47.486c-1.453-4.753,1.222-9.784,5.976-11.237 c4.754-1.457,9.785,1.223,11.237,5.976c4.674,15.288,20.812,27.243,47.965,35.533C271.42,344.896,274.098,349.927,272.646,354.681z M164.977,313.174c-6.531,21.364-26.691,37.341-59.922,47.486c-0.876,0.268-1.761,0.395-2.631,0.395 c-3.854,0-7.421-2.496-8.604-6.374c-1.452-4.754,1.226-9.784,5.979-11.235c27.153-8.29,43.291-20.245,47.965-35.533 c1.453-4.753,6.487-7.433,11.237-5.976C163.755,303.39,166.43,308.421,164.977,313.174z M189.529,352.051c0,4.971-4.029,9-9,9 s-9.002-4.029-9.002-9s4.027-9,8.998-9h0.004C185.5,343.051,189.529,347.08,189.529,352.051z"></path> </g></svg>            <NavLink
                to='/accesorios'
                onClick={() => {
                  setSearchByTitle(null)

                  setSearchByCategory('accesorios')
                }}

                className={({ isActive }) =>
                  isActive ? activeStyle : 'text-[#3A3535] sm:text-inherit'
                }>
                ACCESORIOS
              </NavLink>
            </li>

            <li className="sm:pl-2 sm:py-3 sm:border-b-[1px] sm:border-b-gray-400">
              <svg fill="#000000" height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49.749 49.749" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M47.335,5.494l-0.054-0.121c-0.001-0.002-0.003-0.004-0.004-0.006c-0.094-0.206-0.223-0.391-0.372-0.563 c-0.031-0.036-0.059-0.073-0.092-0.107c-0.15-0.156-0.324-0.297-0.522-0.423c-0.037-0.023-0.077-0.044-0.116-0.066 c-0.082-0.047-0.158-0.098-0.247-0.141l-0.01,0.022c-3.31-1.572-10.919,0.621-14.781,1.922c-0.271-0.125-0.54-0.252-0.814-0.375 C21.663,1.732,8.07-2.502,6.124,1.819L6.122,1.824C6.122,1.825,6.121,1.826,6.121,1.826L6.07,1.94 C3.42,7.821,3.346,14.483,5.667,20.356c-0.554,0.639-0.97,1.243-1.249,1.812c-2.696,1.044-4.078,2.325-4.078,3.818v0.132 c0,13.03,10.601,23.631,23.63,23.631c13.03,0,23.631-10.601,23.631-23.631v-0.132c0-0.373-0.098-0.736-0.274-1.09 C50.066,18.792,50.134,11.706,47.335,5.494z M29.898,30.253c-1.91,0.128-3.902,0.196-5.926,0.196c-0.657,0-1.31-0.008-1.959-0.021 c-0.154-0.003-0.304-0.01-0.457-0.013c-0.5-0.013-0.999-0.028-1.493-0.049c-0.161-0.007-0.32-0.016-0.48-0.024 c-0.477-0.023-0.953-0.048-1.421-0.079c-0.17-0.011-0.337-0.024-0.506-0.036c-0.448-0.032-0.892-0.066-1.33-0.105 c-0.185-0.016-0.368-0.034-0.55-0.051c-0.405-0.039-0.806-0.08-1.201-0.124c-0.206-0.023-0.412-0.047-0.615-0.072 c-0.356-0.043-0.705-0.089-1.051-0.137c-0.225-0.031-0.45-0.062-0.67-0.095c-0.321-0.048-0.635-0.1-0.946-0.152 c-0.219-0.037-0.44-0.072-0.655-0.111c-0.305-0.055-0.599-0.114-0.893-0.173c-0.169-0.034-0.343-0.067-0.508-0.103 c-0.331-0.393-0.646-0.797-0.947-1.21c-0.106-0.146-0.201-0.299-0.304-0.447c-0.19-0.274-0.381-0.548-0.557-0.83 c-0.015-0.024-0.028-0.049-0.043-0.073c0.916,0.099,1.982,0.073,3.149-0.052l0.051,0.018l0.232-0.027 c4.168-0.492,9.818-2.195,15.726-4.708c0.634-0.268,1.256-0.536,1.85-0.803c0.482-0.217,0.977-0.448,1.478-0.686 c0.33-0.156,0.656-0.313,0.982-0.471l0.006,0.002l0.388-0.19c0.164-0.081,0.324-0.163,0.487-0.245 c0.231-0.115,0.461-0.23,0.689-0.346c0.385-0.197,0.764-0.394,1.141-0.593c0.16-0.085,0.323-0.168,0.482-0.253 c0.546-0.293,1.082-0.587,1.606-0.884c0.041-0.023,0.08-0.047,0.122-0.07c0.479-0.272,0.948-0.546,1.406-0.82 c0.14-0.083,0.275-0.167,0.413-0.251c0.356-0.216,0.705-0.432,1.047-0.648c0.154-0.098,0.307-0.195,0.458-0.293 c0.328-0.211,0.646-0.422,0.959-0.634c0.135-0.091,0.273-0.182,0.405-0.273c0.43-0.296,0.849-0.591,1.248-0.884l1.151-0.848 l-0.045-0.03c1.561-1.237,2.851-2.47,3.672-3.635c0.003,0.011,0.008,0.021,0.011,0.032c0.021,0.069,0.037,0.14,0.057,0.209 c0.103,0.357,0.2,0.715,0.284,1.075c0.034,0.146,0.062,0.294,0.093,0.44c0.061,0.286,0.119,0.571,0.168,0.858 c0.029,0.167,0.052,0.336,0.076,0.504c0.039,0.27,0.075,0.54,0.104,0.811c0.019,0.174,0.035,0.348,0.049,0.522 c0.022,0.268,0.039,0.536,0.051,0.805c0.008,0.173,0.016,0.346,0.02,0.519c0.006,0.276,0.004,0.552,0,0.828 c-0.003,0.164-0.003,0.327-0.009,0.49c-0.012,0.308-0.034,0.615-0.059,0.921c-0.011,0.129-0.016,0.259-0.029,0.388 c-0.043,0.436-0.098,0.871-0.168,1.304c-0.007,0.044-0.018,0.088-0.025,0.132c-0.065,0.387-0.139,0.774-0.225,1.157 c-0.032,0.142-0.07,0.282-0.105,0.424c-0.07,0.285-0.141,0.569-0.223,0.852c-0.047,0.163-0.099,0.324-0.15,0.486 c-0.081,0.259-0.165,0.517-0.256,0.773c-0.059,0.167-0.122,0.334-0.186,0.5c-0.096,0.25-0.196,0.498-0.301,0.744 c-0.07,0.163-0.14,0.326-0.213,0.488c-0.072,0.158-0.151,0.313-0.226,0.469c-0.222,0.458-0.459,0.904-0.708,1.339 c-0.034,0.059-0.066,0.118-0.1,0.177c-0.016,0.027-0.031,0.055-0.047,0.082c-0.289,0.49-0.591,0.967-0.911,1.422 C40.61,28.942,35.627,29.869,29.898,30.253z M6.921,5.363c2.896,4.115,11.508,9.089,18.094,12.056 c1.087,0.49,2.182,0.95,3.276,1.394c-0.243,0.112-0.472,0.224-0.72,0.336c-1.568,0.707-3.125,1.357-4.646,1.945 c-0.021,0.008-0.041,0.015-0.062,0.023c-0.702,0.27-1.395,0.526-2.079,0.769c-0.369,0.13-0.72,0.245-1.077,0.365 c-0.301,0.101-0.604,0.206-0.9,0.302c-0.554,0.177-1.091,0.341-1.613,0.494c-0.064,0.019-0.129,0.039-0.192,0.057 c-2.457,0.708-4.545,1.137-6.227,1.35c-0.3-0.112-0.579-0.223-0.828-0.333c-0.4-0.568-0.77-1.168-1.119-1.787 c-0.039-0.069-0.078-0.137-0.117-0.206c-0.348-0.634-0.673-1.289-0.963-1.967l-0.017-0.039C5.755,15.468,5.448,10.23,6.921,5.363z M29.502,7.459c0.595,0.268,1.173,0.547,1.754,0.823c0.477,0.227,0.953,0.455,1.42,0.688c0.336,0.167,0.665,0.337,0.995,0.506 c0.458,0.235,0.916,0.469,1.36,0.708c0.362,0.194,0.711,0.391,1.064,0.587c0.387,0.215,0.781,0.43,1.155,0.646 c0.712,0.412,1.407,0.827,2.07,1.244c-0.54,0.374-1.107,0.755-1.719,1.145c-0.098,0.062-0.196,0.124-0.295,0.186 c-0.121,0.076-0.253,0.154-0.377,0.231c-0.467,0.288-0.938,0.576-1.43,0.863c-0.155,0.091-0.321,0.183-0.48,0.274 c-0.534,0.306-1.08,0.611-1.639,0.913c-0.164,0.089-0.329,0.177-0.495,0.266c-0.01,0.005-0.02,0.011-0.03,0.016 c-0.58,0.308-1.173,0.614-1.775,0.916c-0.111,0.056-0.222,0.111-0.334,0.167c-1.631-0.623-3.281-1.309-4.91-2.043 C13.075,9.846,7.325,4.022,7.947,2.641C8.571,1.261,16.741,1.71,29.502,7.459z M6.016,23.585c0.014-0.071,0.03-0.143,0.058-0.224 c0.086-0.252,0.24-0.565,0.515-0.959c0.011,0.021,0.024,0.041,0.035,0.063c0.237,0.462,0.49,0.917,0.759,1.365 c0.044,0.073,0.084,0.149,0.129,0.222c0.115,0.187,0.239,0.37,0.36,0.554c-1.064-0.061-1.699-0.291-1.856-0.638l-0.001-0.001 c-0.027-0.062-0.032-0.149-0.024-0.247C5.993,23.681,6.007,23.63,6.016,23.585z M45.125,5.906c0.039,0.02,0.077,0.044,0.116,0.07 c0.026,0.018,0.05,0.036,0.072,0.054c0.054,0.045,0.102,0.096,0.134,0.155c0.003,0.006,0.01,0.011,0.012,0.017 c0.316,0.73-1.134,2.682-4.406,5.197c-0.334-0.216-0.674-0.432-1.021-0.647c-0.118-0.073-0.237-0.146-0.357-0.219 c-1.188-0.726-2.446-1.444-3.762-2.149c-0.017-0.009-0.034-0.018-0.05-0.027c-0.689-0.368-1.391-0.732-2.108-1.091 C40.592,5.181,44.065,5.343,45.125,5.906z M4.08,24.483c0.03,0.104,0.068,0.206,0.113,0.306l-0.001,0 c0.001,0.002,0.002,0.005,0.003,0.007l0.001,0.002l0.05,0.11c0.251,0.557,0.528,1.102,0.822,1.638 c0.097,0.176,0.206,0.346,0.307,0.52c0.207,0.355,0.417,0.708,0.643,1.052c0.037,0.056,0.067,0.115,0.104,0.171 c-2.062-0.669-3.073-1.331-3.504-1.798c-0.005-0.006-0.012-0.012-0.017-0.019c-0.055-0.061-0.098-0.118-0.135-0.172 c-0.026-0.041-0.053-0.082-0.07-0.118c-0.01-0.021-0.017-0.04-0.024-0.06c-0.018-0.05-0.032-0.099-0.032-0.137 C2.341,25.711,2.74,25.142,4.08,24.483z M45.5,28.229c-1.064,10.94-10.313,19.52-21.529,19.52c-10.979,0-20.073-8.221-21.45-18.83 c0.063,0.038,0.145,0.072,0.211,0.109c0.215,0.12,0.441,0.236,0.677,0.348c0.138,0.065,0.281,0.129,0.429,0.193 c0.288,0.125,0.586,0.244,0.893,0.357c0.11,0.041,0.222,0.08,0.336,0.12c0.408,0.142,0.828,0.275,1.257,0.399 c0.041,0.012,0.08,0.023,0.121,0.035c0.562,0.16,1.135,0.307,1.709,0.439l0.002,0.002l0.268,0.059l0.053,0.012 c0.494,0.109,1.008,0.213,1.541,0.312c0.003,0.001,0.007,0.001,0.01,0.002c0.007,0.001,0.013,0.003,0.02,0.004 c0.016,0.003,0.033,0.005,0.049,0.008c0.106,0.02,0.219,0.037,0.327,0.056c0.441,0.078,0.887,0.153,1.345,0.223 c0.172,0.026,0.35,0.05,0.525,0.075c0.416,0.06,0.836,0.118,1.265,0.171c0.172,0.021,0.348,0.041,0.522,0.061 c0.447,0.052,0.898,0.101,1.357,0.145c0.168,0.016,0.336,0.032,0.505,0.047c0.475,0.043,0.955,0.082,1.441,0.117 c0.166,0.012,0.332,0.024,0.5,0.035c0.493,0.033,0.992,0.061,1.495,0.085c0.17,0.009,0.338,0.018,0.509,0.025 c0.509,0.022,1.022,0.039,1.539,0.052c0.168,0.005,0.334,0.011,0.503,0.015c0.675,0.014,1.355,0.023,2.04,0.023 c8.668,0,16.551-1.177,20.572-3.071l0.233-0.109l0.151-0.209c0.007-0.009,0.013-0.019,0.019-0.029 C45.136,28.769,45.32,28.502,45.5,28.229z"></path> </g></svg>
              <NavLink
                to='/cacharreria'
                onClick={() => {
                  setSearchByTitle(null)

                  setSearchByCategory('cacharreria')
                }}

                className={({ isActive }) =>
                  isActive ? activeStyle : 'text-[#3A3535] sm:text-inherit'
                }>
                CACHARRERÍA
              </NavLink>
            </li>

            <li className="sm:pl-2 sm:py-3 sm:border-b-[1px] sm:border-b-gray-400">
  <svg fill="#000000" width="30px" height="30px" viewBox="0 0 64.00 64.00" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.8960000000000001"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="a"></g> <g id="b"> <path d="M56.6348,17.1587l-22-6.1401c-.0879-.0244-.1816-.0244-.2695,0l-22,6.1401c-.2158,.0601-.3652,.2568-.3652,.4814v17.9899c-1.5966,2.4421-3,5.389-3,8.87,0,5.2266,3.2471,10.5,10.5,10.5,3.7006,0,6.6759-1.1032,8.6764-3.1733l6.2338,1.1353c.0303,.0054,.0596,.0083,.0898,.0083s.0596-.0029,.0898-.0083l22-4c.2373-.043,.4102-.25,.4102-.4917V17.6401c0-.2246-.1494-.4214-.3652-.4814Zm-11.6348-2.2092l5,1.3954v6.9744c0,.1499-.0625,.2852-.1768,.3818-.1143,.0972-.2607,.1372-.4053,.1118l-4-.667c-.2422-.04-.418-.2476-.418-.4932v-7.7033Zm-32,3.07l21-5.861V51.8708l-5.0773-.9244c1.8267-2.4495,2.4824-5.8118,1.8195-9.5582-.9873-5.5762-5.0176-7.0195-5.1885-7.0786-.1895-.0664-.4023-.0107-.5361,.1411-.1338,.1509-.1641,.3672-.0762,.5488,1.6904,3.5146,.8018,5.8359-.1562,6.4736-.5576,.3726-1.167,.2598-1.6689-.3052-.6602-.7422-.4189-1.8042,.0635-3.6172,.5684-2.1333,1.3457-5.0542-.0479-8.4678-2.082-5.0972-6.6982-4.082-6.7461-4.0698-.1445,.0337-.2666,.1313-.333,.2646s-.0693,.29-.0088,.4263c.0488,.1104,1.1748,2.7271-.6797,5.332-.3203,.4507-.6943,.938-1.0967,1.4634-.4032,.5259-.8335,1.0881-1.2676,1.685V18.0195Zm6.5,35.9805c-7.0117,0-9.5-5.1177-9.5-9.5,0-4.7886,2.9248-8.6055,5.0615-11.3926,.4092-.5352,.791-1.0322,1.1172-1.4912,1.6416-2.3057,1.2959-4.624,.9922-5.7021,1.1201-.0781,3.6602,.1836,5.0352,3.5469,1.2666,3.1025,.5684,5.7251,.0078,7.8325-.4805,1.8022-.8945,3.3584,.1543,4.5386,.8311,.9355,1.999,1.1226,2.9717,.4736,1.3955-.9297,2.0928-3.353,1.0449-6.4204,1.1455,.7964,2.8047,2.4688,3.373,5.6777,.6396,3.6128-.0576,6.9541-1.9141,9.167-1.8193,2.1699-4.626,3.27-8.3438,3.27Zm36.5-5.9473l-21,3.8183V12.1586l9,2.5118v7.9824c0,.7368,.5273,1.3589,1.2539,1.4795l4,.667c.082,.0137,.165,.0205,.2471,.0205,.3525,0,.6953-.124,.9688-.3555,.3369-.2856,.5303-.7031,.5303-1.145v-6.6953l5,1.3954v30.0332Z"></path> </g> </g></svg>            <NavLink
                to='/ventas-al-por-mayor'
                className={({ isActive }) =>
                  isActive ? activeStyle : 'text-[#3A3535] sm:text-inherit'
                }>
              VENTAS AL POR MAYOR 
              </NavLink>
            </li>
            </ul>
            <figure className='mt-2 p-6 '>
                <img className='w-full' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f797e6191113517.65df4f8c4f5c7.png" alt="" />
            </figure>
          </div> */}

          <div className='App text-center  w-full  '>
       
      
      <h2 className='font-bold text-start pl-2 text-[20px]  border-b-2 border-b-purple'>Explora nuestros perfumes</h2>


          <div className='sm:grid-cols-2 grid gap-26 gap-y-5 mt-3 place-content-center grid-cols-4 '>
              {renderView() } 
          </div>
          <WhatsAppButton/>
          </div>
          {/* <iframe src="https://whatsform.com/4FQHtz"  width="100%" height="600" frameBorder="0"></iframe> */}
        </div>

             <section className='flex justify-evenly mt-8 sm:flex-col gap-4 sm:mt-0'>
             <div className='flex flex-col items-center'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16">
  <path strokeinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
            <h3 className='font-bold'>
           PAGO SEGURO
          </h3>
          <p>Compra fácil y segura, contamos con certificado SSL</p>

</div>
<div className='flex flex-col items-center'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16">
  <path strokeinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
<h3 className='font-bold'>HORARIO</h3>
<p>Lunes a Viernes:  2:00 Pm - 8:00 Pm <br/> 
Sabado y Domingo: 8:00 Am - 7:00 Pm </p>

</div>
               </section>
             {/* <section className='px-[80px] mt-10 text-start sm:px-[16px]'>
              <h2 className='font-bold'>SOBRE NOSOTROS</h2>
              <p className='text'>
              Somos una tienda de Moda onLine y puntos físicos con más de 15 años de experiencia mercantil en colombia, contamos con e-commerce de Marcas más reconocidas en tendencias: AMERICANINO, CHEVIGNON, LEVI'S, ROOTT+CO, AMERICAN EAGLE, QUEST Y TOTTO. Fundamental es nuestra operación mercantil en innovación, seriedad, cumplimiento y respaldo a nuestros clientes.
              </p>

             </section> */}


            
             
         

          </>
  )
}

export default Home