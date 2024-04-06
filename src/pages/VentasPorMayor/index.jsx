import React, { useState } from 'react';

const ContactoVentasPorMayor = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const linkws= `https://api.whatsapp.com/send?phone=573164321442&text=*¡VENTA AL POR MAYOR!*%0A*Nombre*: %0A ${formData.nombre}  %0A *Email:* %0A ${formData.email} %0A *Teléfono*: %0A ${formData.telefono}%0A*Mensaje*: %0A ${formData.mensaje}`

        // Aquí puedes manejar la lógica de envío del formulario, como enviar los datos a tu backend
        console.log(formData);
        window.location.href = linkws;
        // Lógica para enviar los datos a tu backend o hacer lo que necesites con ellos
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md pt-[120px] flex justify-center">
            <div>
            <h2 className="text-2xl font-bold mb-4">Contacto Ventas al por mayor</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="nombre" className="block font-semibold text-gray-700">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required className="w-full px-4 py-1 border border-orange rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                <div>
                    <label htmlFor="email" className="block font-semibold text-gray-700">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-1 border border-orange rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                <div>
                    <label htmlFor="telefono" className="block font-semibold text-gray-700">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required className="w-full px-4 py-1 border border-orange rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                <div>
                    <label htmlFor="mensaje" className="block font-semibold text-gray-700">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required rows="4" className="w-full px-4 py-2 border border-orange rounded-md focus:outline-none focus:border-indigo-500"></textarea>
                </div>
                <button type="submit" className="border-none  h-[50px] w-[180px] p-1 bg-orange  text-white font-semibold shadow-md transform hover:scale-105 transition duration-300">Enviar</button>
            </form></div>
        </div>
    );
};

export default ContactoVentasPorMayor;