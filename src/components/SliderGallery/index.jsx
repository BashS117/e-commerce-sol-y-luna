import React from 'react'
import SlideGaleria from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
const SliderGallery = () => {

    const images = [
        {
            original: `https://firebasestorage.googleapis.com/v0/b/blue-fashion-983e2.appspot.com/o/imagenes%2Fbanner1.jpg?alt=media&token=d6f78fa2-9034-4a18-bf50-0038362114c9`,
            

        },
        {
            original: `https://firebasestorage.googleapis.com/v0/b/blue-fashion-983e2.appspot.com/o/imagenes%2Fbanner2.jpg?alt=media&token=d6f78fa2-9034-4a18-bf50-0038362114c9`,

        },
        {
            original: `https://firebasestorage.googleapis.com/v0/b/blue-fashion-983e2.appspot.com/o/imagenes%2Fbanner3.jpg?alt=media&token=d6f78fa2-9034-4a18-bf50-0038362114c9`,

        }
    ]
    const imagesMobile = [
        {
            original:  `https://firebasestorage.googleapis.com/v0/b/blue-fashion-983e2.appspot.com/o/imagenes%2Fbanner1.jpg?alt=media&token=d6f78fa2-9034-4a18-bf50-0038362114c9`,
            

        },
        {
            original: `https://firebasestorage.googleapis.com/v0/b/blue-fashion-983e2.appspot.com/o/imagenes%2Fbanner2.jpg?alt=media&token=d6f78fa2-9034-4a18-bf50-0038362114c9`,

        },
        {
            original: `https://firebasestorage.googleapis.com/v0/b/blue-fashion-983e2.appspot.com/o/imagenes%2Fbanner3.jpg?alt=media&token=d6f78fa2-9034-4a18-bf50-0038362114c9`,

        }
    ]

    return (<div>
        <div className=' w-auto  mx-0 sm:hidden '>
            <SlideGaleria
            
                items={images} 
                showFullscreenButton={false}
                autoPlay={true}
                slideInterval={4000}
                showPlayButton={false}
                showBullets={true}
                showThumbnails={false}
                />

        </div> <h1>hola</h1>
        <div className={`hidden sm:flex w-auto `}>
        <SlideGaleria
            
            items={imagesMobile} 
            showFullscreenButton={false}
            autoPlay={true}
            slideInterval={4000}
            showPlayButton={false}
            showBullets={true}
            showThumbnails={false}
            />
        </div>


</div>
    )
}

export default SliderGallery