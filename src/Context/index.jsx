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

     //get products by Category/ SearchByCategory
     const [searchByCategory,setSearchByCategory]=useState(null)


    const filteredPerfumesByTitle=(perfumes,searchByTitle)=>{
        return perfumes?.products.filter(perfume => perfume.name.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredPerfumesByCategory=(perfumes,searchByCategory)=>{
        console.log('perfumnes:', perfumes)
        return perfumes?.products.filter(perfume => perfume.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType,perfumes,searchByTitle,searchByCategory)=>{
        if(searchType==='BY_TITLE'){
         return   filteredPerfumesByTitle(perfumes,searchByTitle)
        }
        if(searchType==='BY_CATEGORY'){
         return   filteredPerfumesByCategory(perfumes,searchByCategory)
        }
        if(searchType==='BY_TITLE_AND_CATEGORY'){
         return   filteredPerfumesByCategory(perfumes,searchByCategory).filter(perfume=> perfume.name.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        // if(!searchType){
        //     return perfumes
        //    }

    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredPerfumes(filterBy('BY_TITLE_AND_CATEGORY', perfumes, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredPerfumes(filterBy('BY_TITLE', perfumes, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredPerfumes(filterBy('BY_CATEGORY', perfumes, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredPerfumes(productsData.products)
       
    }, [perfumes, searchByTitle, searchByCategory])


    console.log('filtereder:', filteredPerfumes)

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
            filteredPerfumes,

            searchByCategory,setSearchByCategory
            

        }}>

            {children}

        </PerfumesContext.Provider>
    )


}