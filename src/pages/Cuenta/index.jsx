import { useContext } from "react";
import { PerfumesContext } from "../../Context";
import Loader from "../../components/Loader";
const Cuenta = () => {
    // user
    const user = JSON.parse(localStorage.getItem('users'));


    const { loading, getAllOrder } = useContext(PerfumesContext);
    console.log(getAllOrder)

    // console.log(user)
    return (
    
            <div className="  mx-auto px-4 sm:px-0 sm:mx-4  py-5 lg:py-8">
                {/* Top  */}
                <div className="top ">
                    {/* main  */}
                    <div className=" bg-pink-50 py-5 rounded-xl border border-pink-100">
                        {/* image  */}
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                        </div>
                        {/* text  */}
                        <div className="">
                            {/* Name  */}
                            <h1 className=" text-center text-lg">
                                <span className=" font-bold">Name : </span>
                                {user?.name}
                            </h1>

                            {/* Email  */}
                            <h1 className=" text-center text-lg">
                                <span className=" font-bold">Email : </span>
                                {user?.email}
                            </h1>

                            {/* Date  */}
                            <h1 className=" text-center text-lg">
                                <span className=" font-bold">Date : </span>
                                {user?.date}
                            </h1>

                            {/* Role  */}
                            <h1 className=" text-center text-lg">
                                <span className=" font-bold">Role : </span>
                                {user?.role}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* bottom  */}
                <div className="">
                    {/* main 1 */}
                    <div className="mx- my-4   md:my-6 md:px-0">
                        {/* text  */}
                        <h2 className=" text-2xl text-start lg:text-3xl font-bold">Detalles de tus pedidos</h2>

                        <div className="flex  justify-center relative top-10">
                        {loading && <Loader/>}
                        </div>

                        {/* main 2 */}
                        { getAllOrder?.filter((obj) => {
    console.log("user.uid:", user?.uid);
    console.log("obj.userid:", obj.userid);
    return obj.userid === user?.uid;
  })
  .map((order, index) => (
    <section className="border text-start p-2 border-pink-100 rounded-xl mb-3" key={index}>
        <h3 className="font-bold">Pedido {index+1}</h3>
       <div className="flex sm:flex-col">
     
    <div >
    <h3 className="font-bold">Productos</h3>
        {order.products.map((product, index) => (
  <p className="w-[550px] sm:w-auto" key={index}>{product}</p>
))}</div>
<ul className="mt-2">
    <li className="font-bold">Datos de envio</li>
    <li>Documento: {order.datos.document}</li>
    <li>Nombre: {order.datos.name}</li>
    <li>Apellidos: {order.datos.apellidos}</li>
    <li>Dirección: {order.datos.direccion}</li>
    <li>Departamento: {order.datos.departamento}</li>
    <li>Ciudad: {order.datos.ciudad}</li>
    <li>Email: {order.datos.email}</li>
    <li>Telefono {order.datos.telefono}</li>
    <li>Notas: {order.datos?.nota}</li>
    
</ul>

   <ul className="mt-2">
    <li className="flex"><h3 className="font-bold">Email user</h3>:{order.email}</li>
   <li className="flex"><h3 className="font-bold">Fecha:</h3> {order.date}</li>
   <li className="flex"><h3 className="font-bold">Hora de creacion del Pedido: </h3>{order.time.toDate().toLocaleTimeString("es-CO")}</li>
   <li className="flex"><h3 className="font-bold">Estado:</h3> {order.status}</li>
   <li className="flex"><h3 className="font-bold">Estado del envio:</h3>{order.statusenvio}</li>
   </ul>
    </div>


    </section>
  ))
}

                    </div>
                </div>
            </div>
        
    );
}

export default Cuenta;