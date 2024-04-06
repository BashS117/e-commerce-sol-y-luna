import { createContext,useState, useEffect, Children } from "react";
import swal from 'sweetalert2'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDB } from '../firebase/Firebaseconfig';
import { toast } from "react-hot-toast";
import { Timestamp, addDoc } from "firebase/firestore";

export const PerfumesContext = createContext();

export const PerfumesProvider = ({children})=>{

    //Get Products
    const [productos, setProductos] = useState([]);
    console.log('productos',productos)
/**========================================================================
 * Get ALL PRODUCT function
     *========================================================================**/

 const getAllProductFunction = async () => {
  setLoading(true);
  try {
      const q = query(
          collection(fireDB, "products"),
          orderBy('time')
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
          let productArray = [];
          QuerySnapshot.forEach((doc) => {
              productArray.push({ ...doc.data(), id: doc.id });
          });
          setProductos(productArray);
          setLoading(false);
      });
      return () => data;
  } catch (error) {
      console.log(error);
      setLoading(false);
  }
}
useEffect(() => {
  getAllOrderFunction()
  getAllProductFunction();
  console.log('productos',productos)
}, []);


    const [filteredProductos,setFilteredProductos]=useState(null);

    //Quantity shoping cart
    const [count,setCount]=useState(0);

    // Shoping CART- add o to cart
    const [cartProducts, setCartProducts]=useState([]);
    //funcion para mostrar alerta al agregar producto al carrito
  const mostrarAlert=()=>{
    swal.fire({
      text: "Se ha añadido al carrito 🛒👉",
      icon: "success",
      toast: true,
      position: 'top',
      timer: '3000',
      showConfirmButton: false,
      color: '#3B82F6',
      customClass: 'swal-wide',
    })
  }
  const mostrarAlertNotAddedToCart=()=>{
    swal.fire({
      text: "Stock insuficiente",
      icon: "error",
      toast: true,
      position: 'top',
      timer: '3000',
      showConfirmButton: false,
      color: '#3B82F6',
      customClass: 'swal-wide',
    })
  }
  const AlertCreateProduct=()=>{
    swal.fire({
      text: "Se ha añadido NUEVO producto, RECARGA la pagina para verlo",
      icon: "success",
      toast: true,
      position: 'top',
      timer: '4000',
      showConfirmButton: false,
      color: '#3B82F6',
      customClass: 'swal-wide',
    })
  }
  const AlertPedidoNotCreated=()=>{
    swal.fire({
      text: "No se ha podido generar el pedido, puede que el stock haya disminuido",
      icon: "error",
      toast: true,
      position: 'center',
      
      showConfirmButton: true,
      color: '#3B82F6',
      customClass: 'swal-wide',
      width:'500px'
    })
  }
  const AlertEditProduct=()=>{
    swal.fire({
      text: "Se ha editado el producto",
      icon: "success",
      toast: true,
      position: 'center',
      timer:4000,
      showConfirmButton: true,
      color: '#3B82F6',
      customClass: 'swal-wide',
      width:'500px'
    })
  }
  const AlertNotCreatedProduct=()=>{
    swal.fire({
      text: "No se ha añadido a la base de datos",
      icon: "error",
      toast: true,
      position: 'center',
      
      showConfirmButton: true,
      color: '#3B82F6',
      customClass: 'swal-wide',
      width:'500px'
    })
  }
  const AlertUpdateBannerImage=()=>{
    swal.fire({
      text: "Se ha actualizado al imagen del Banner",
      icon: "success",
      toast: true,
      position: 'center',
      timer:4000,
      showConfirmButton: true,
      color: '#3B82F6',
      customClass: 'swal-wide',
      width:'500px'
    })
  }
  
    const addProductsToCart = (event,id, productData) => {
        console.log('AÑADIENDO')
        event.stopPropagation();
        
        const existingProductIndex = cartProducts.findIndex(product => product.id === id);
        const stockAvailable = productData.quantity;

        //si el producto esta en el carrito
        if (existingProductIndex!==-1 ) {
            // Si el producto ya está en el carrito, aumenta su cantidad
            if (cartProducts[existingProductIndex].amount < stockAvailable) {
              const updatedCartProducts = cartProducts.map((product, index) => {
                  if (index === existingProductIndex) {
                      return {
                          ...product,              
                          amount: product.amount + 1
                      };
                  }
                  return product;
              });
              setCartProducts(updatedCartProducts);
              mostrarAlert();
          } else {
            mostrarAlertNotAddedToCart()     
               }
        }else {
            // Si el producto no está en el carrito, agrégalo con una cantidad de 1
            const modifiedProduct = {
                ...productData,
                id: id,
                amount: 1,
            };
            setCount(count + 1);
            setCartProducts([...cartProducts, modifiedProduct]);
            mostrarAlert();
        }
        // openCheckOutSideMenu(); para abrir el carrito
       
        // closeProductDetail();
    }


    /// PRODUCT DETAIL  -OPEN/CLOSE
    const [isProductDetailOpen,setisProductDetailOpen]=useState(false);
    const openProductDetail=()=>setisProductDetailOpen(true);
    const closeProductDetail=()=>setisProductDetailOpen(false);

    //CheckOutSideMenu  open/close
    const [isCheckOutSideMenuOpen,setisCheckOutSideMenuOpen]= useState(false);
    const openCheckOutSideMenu=()=>setisCheckOutSideMenuOpen(true);
    const closeCheckOutSideMenu=()=>setisCheckOutSideMenuOpen(false);
    //AcountSideMenu  open/close
    const [isAcountSideMenuOpen,setisAcountSideMenuOpen]= useState(false);
    const openAcountSideMenu=()=>setisAcountSideMenuOpen(true);
    const closeAcountSideMenu=()=>setisAcountSideMenuOpen(false);

    ///MENU OPEN
    const [isOpenMenu,setIsOpenMenu ]=useState(false);
    const openSideMenu=()=>setIsOpenMenu(true);
  const closeSideMenu=()=>setIsOpenMenu(false);



    //PRODUCT DETAIL -SHOW Product - se resetea por eso da igual pon erle datos=

    //get o by title/ SearchByTitle
    const [searchByTitle,setSearchByTitle]=useState(null)

     //get o by Category/ SearchByCategory
     const [searchByCategory,setSearchByCategory]=useState(null)
console.log(searchByCategory)

    const filteredPerfumesByTitle=(productos,searchByTitle)=>{
        return productos?.filter(producto => producto.name.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredPerfumesByCategory=(productos,searchByCategory)=>{
        console.log('productos:', productos)
        return productos?.filter(producto => producto.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }


    const filterBy = (searchType,productos,searchByTitle,searchByCategory)=>{
        if(searchType==='BY_TITLE'){
         return   filteredPerfumesByTitle(productos,searchByTitle)
        }
        if(searchType==='BY_CATEGORY'){
          return   filteredPerfumesByCategory(productos,searchByCategory)
         }
        if(searchType==='BY_TITLE_AND_CATEGORY'){
         return   productos.filter(producto=> producto.name.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if(!searchType){
            return productos
           }

    }
/**========================================================================
 * BLUE FASHION
     *========================================================================**/

    const activeRoute = determineActiveRoute();
    function determineActiveRoute() {
        // lógica para determinar la ruta activa del NavLink
        // Puedes usar el estado local, el historial de navegación u otra lógica según tus necesidades
        // Por ejemplo, podrías obtener la ruta activa del historial de navegación
        const currentPath = window.location.pathname;
        return currentPath;
    }
    useEffect(() => {
       //   Si hay una ruta activa, la usamos para obtener los productos
   
        if (searchByTitle && searchByCategory) setFilteredProductos(filterBy('BY_TITLE_AND_CATEGORY', productos, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredProductos(filterBy('BY_TITLE', productos, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredProductos(filterBy('BY_CATEGORY', productos, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredProductos(productos)
       
    }, [productos, searchByTitle, searchByCategory])



   
const [loading, setLoading]= useState(false);

  //  async function getProductosByCategory(searchByCategory) {
  //    const { data } = await supabase.from(searchByCategory).select();
  //    setFilteredProductos(data);
  //  }

  
    // Order State 
    const [getAllOrder, setGetAllOrder] = useState([]);
const OrderLength = getAllOrder?.length

    /**========================================================================
     *========================================================================**/

    const getAllOrderFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "order"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let orderArray = [];
                QuerySnapshot.forEach((doc) => {
                    orderArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllOrder(orderArray);
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
//borrar el producto de supabase

  //  async function deleteProductInSupa(category,id){ 
  //       const { error } = await supabase
  //           .from(category)
  //           .delete()
  //           .eq('id', id)
  //   }

   //producto a editar
   const [productToEdit,setProductToEdit]= useState({
    imageUrl:' ',
    imageUrl2:' ',
    imageUrl3:' ',
    name: ' ',
    price: 0,
    category: ' ',
    description: ' ',
    quantity: 1
});
   //OPEN ASIDE ADDFORM
const [isOpenAddForm,setIsOpenAddForm ]=useState(false);
const openAsideAddForm=()=>setIsOpenAddForm(true);
const closeAsideAddForm=()=>setIsOpenAddForm(false);
//OPEN ASIDE EDIT FORM
const [isOpenEditForm,setIsOpenEditForm ]=useState(false);
const openAsideEditForm=()=>setIsOpenEditForm(true);
const closeAsideEditForm=()=>setIsOpenEditForm(false);

const user = JSON.parse(localStorage.getItem('users'))

async function createPedidoInFirebase(datos, preferenceId,products,metododePago){
  const orderInfo = {
    products,
    datos,
    metododepago:metododePago,
    Mercadopagoid:preferenceId,
    email: user?.email || '',
    userid: user?.uid || '',
    status: "pendiente",
    statusenvio: "pendiente",
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "es-CO",
        {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }
    )
  
}
try {
  const orderRef = collection(fireDB, 'order');
  addDoc(orderRef, orderInfo);
 
  toast.success("Orden enviada correctamente")
} catch (error) {
  console.log(error)
}
}
///Crear pedido en SUPABASE
// async function createPedidoInSupa(datos,preferenceId,textArrayCartProducts){
  
//     const arrrayPedido= Object.values(datos)

// console.log(arrrayPedido)
// const{data,error } = await supabase
//   .from('pedidos')
//   .insert({
//     idpedido: preferenceId,
//     datospedido: [...textArrayCartProducts], 
//     datosenvio:  [...arrrayPedido], 
//     estadodelpago: "pendiente",
//     estadodelenvio: null,
//     })
//  ;

//  if (error) {
//     AlertProductNotCreated()
//     console.error("ERROR al crear el pedido",error.message)
//     return;    
//  }
//  console.log('PEDIDO creado')
 
//     }

    //ORDEN RECIVIDA ESTADO
const [ordenRecivida,setOrdenRecivida]= useState(null)

const [openAsideOrdenRecivida,setOpenAsideOrdenRecivida]= useState(null)

//Delete order

// async function handleDeleteOrder(id){  
// const { error } = await supabase
// .from('pedidos')
// .delete()
// .eq('id', id)


        
// }
const updateCartItemAmount = (productId, newQuantity) => {
  const updatedCartProducts = cartProducts.map(product => {
    if (product.id === productId) {
      return { ...product, amount: newQuantity };
    }
    return product;
  });

  setCartProducts(updatedCartProducts);
};  


    return(
        <PerfumesContext.Provider value={{
            
            count,setCount,
            cartProducts, setCartProducts,
            addProductsToCart,

            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            
            

            isCheckOutSideMenuOpen,setisCheckOutSideMenuOpen,
            openCheckOutSideMenu,closeCheckOutSideMenu,

            searchByTitle,setSearchByTitle,
            filteredProductos,

            searchByCategory,setSearchByCategory,
            ///
            productos,
            isOpenAddForm,openAsideAddForm,closeAsideAddForm,
            isOpenEditForm,openAsideEditForm,closeAsideEditForm,

            AlertCreateProduct,
            isOpenMenu,setIsOpenMenu,openSideMenu,closeSideMenu,
            
            productToEdit,setProductToEdit,
            AlertEditProduct,setOrdenRecivida,ordenRecivida,
            setOpenAsideOrdenRecivida,openAsideOrdenRecivida,
            // handleDeleteOrder,
            AlertNotCreatedProduct,
            AlertUpdateBannerImage,loading,setLoading,
            updateCartItemAmount,
            createPedidoInFirebase,
            getAllOrder,OrderLength,
            mostrarAlertNotAddedToCart,
            AlertPedidoNotCreated,
            isAcountSideMenuOpen,
            openAcountSideMenu,
            closeAcountSideMenu,
            getAllOrderFunction

          
        
            
      
            

        }}>

            {children}

        </PerfumesContext.Provider>
    )


}