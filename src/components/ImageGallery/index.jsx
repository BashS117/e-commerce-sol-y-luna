import React from 'react'
import ImageGaleria from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
const ImageGallery = ({ img, img2, img3,selectedVolume }) => {

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
        <div className=' w-[700px] bg-white relative flex m-auto sm:w-auto ml-4 sm:pt-2'>
           <div className='text-black absolute top-1 px-2 z-20 flex w-full justify-between'><p>Inspiración:</p> <p>Nuestra Fragancia:</p></div>
            <ImageGaleria
                items={images} 
                showPlayButton={false}
                showBullets={false}
                showFullscreenButton={false}
                showThumbnails={false}
                
                />
<figure className='w-[150px] overflow-hidden '>
    {selectedVolume==='30ml'?    <img className='object-cover h-[430px] sm:h-full' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c0f724175559299.64b9a559c7f3a.png" alt="" />
:    <img className='object-cover h-[430px] sm:h-[300px]' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6f8ccd175559299.64c071c0ca990.png" alt="" />

}
</figure>
        </div>
    )
}

export default ImageGallery