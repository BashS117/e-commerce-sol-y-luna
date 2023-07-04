import { createContext,useState, useEffect, Children } from "react";

export const PerfumesContext = createContext();
import productsData from '../data/products.json'

export const PerfumesProvider = ({children})=>{


    //Get Products
    const [perfumes,setPerfumes]=useState(null);

    //
    const [filteredPerfumes,setFilteredPerfumes]=useState(null);


    console.log(perfumes)
    useEffect(()=>{
        setPerfumes(productsData)
    },[])

    //Quantity shoping cart
    const [count,setCount]=useState(0);
    console.log(count)

    // Shoping CART- add products to cart
    const [cartProducts, setCartProducts]=useState([]);


    /// PRODUCT DETAIL  -OPEN/CLOSE
    const [isProductDetailOpen,setisProductDetailOpen]=useState(false);
    const openProductDetail=()=>setisProductDetailOpen(true);
    const closeProductDetail=()=>setisProductDetailOpen(false);

    //CheckOutSideMenu  open/close
    const [isCheckOutSideMenuOpen,setisCheckOutSideMenuOpen]= useState(false);
    const openCheckOutSideMenu=()=>setisCheckOutSideMenuOpen(true);
    const closeCheckOutSideMenu=()=>setisCheckOutSideMenuOpen(false);

    //PRODUCT DETAIL -SHOW Product=
    const [productToShow,setProductToShow]=useState({
        "id": "",
        "name": "",
        "category": "",

        "unit_price": '',
        "stock": '',
        "image": ""
  
    });

    //get products by title/ SearchByTitle
    const [searchByTitle,setSearchByTitle]=useState(null)

    const filteredPerfumesByTitle=(perfumes,searchByTitle)=>{
        return perfumes?.products.filter(perfume => perfume.name.toLowerCase().includes(searchByTitle.toLowerCase()))

    }
    useEffect(()=>{
        if(searchByTitle)setFilteredPerfumes(filteredPerfumesByTitle(perfumes,searchByTitle))
    },[perfumes,searchByTitle])




    return(
        <PerfumesContext.Provider value={{
            perfumes,
            count,setCount,
            cartProducts, setCartProducts,

            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,

            isCheckOutSideMenuOpen,setisCheckOutSideMenuOpen,
            openCheckOutSideMenu,closeCheckOutSideMenu,

            searchByTitle,setSearchByTitle,
            filteredPerfumes
            

        }}>

            {children}

        </PerfumesContext.Provider>
    )


}