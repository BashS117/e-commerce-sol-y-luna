import React from 'react'
import ImageGaleria from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
const ImageGallery = ({ img, img2, img3 }) => {

    const images = [
        {
            original: img,
            thumbnail: img

        },
        {
            original: img2,
            thumbnail: img2,

        },
        {
            original: img3,
            thumbnail: img3

        }
    ]

    return (
        <div className=' w-[700px] m-auto sm:w-auto ml-4'>
            <ImageGaleria
                items={images} 
                showPlayButton={false}
                showBullets={true}
                />

        </div>
    )
}

export default ImageGallery