import React from 'react'
import ImageGaleria from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
const ImageGallery = ({ img, img2, img3,selectedVolume, productCategory }) => {

    const images = [
        {
            original: img,
            thumbnail: img

        },
        {
            original: img2,
            thumbnail: img2,

        },
        // {
        //     original: img3,
        //     thumbnail: img3

        // }
    ]

    return (
        <div className=' w-[auto] pt-[10px] bg-white relative flex m-auto  sm:w-auto   '>
            {productCategory === "premium-hombre"||productCategory === "premium-mujer"|| productCategory === "ofertas"?
            null:
            <div className='text-black absolute top-0 px-2 z-20 flex w-full justify-between'><p>Inspiración:</p> <p>Nuestra Fragancia:</p></div>
}
            <ImageGaleria
                items={images} 
                showPlayButton={false}
                showBullets={false}
                showFullscreenButton={false}
                showThumbnails={false}
                
                />

{productCategory === "premium-hombre"||productCategory === "premium-mujer" || productCategory === "ofertas"?
            null:
<figure className='w-[150px] overflow-hidden '>
    {selectedVolume==='30ml'?    <img className='object-cover h-[430px] sm:h-full ' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c0f724175559299.64b9a559c7f3a.png" alt="" />
:    <img className='object-cover h-[430px] sm:h-[255px] pr-4 rotate-1' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ed7611175559299.66203d3f455d1.png" alt="" />

}
</figure>}

        </div>
    )
}

export default ImageGallery