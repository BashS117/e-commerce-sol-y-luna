import React from 'react'
import SlideGaleriaSecondB from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
const SliderGallerySecondBanner = () => {

    const images = [
        {
            original: `https://firebasestorage.googleapis.com/v0/b/blue-fashion-983e2.appspot.com/o/imagenes%2Fsecondbanner1.jpg?alt=media&token=d6f78fa2-9034-4a18-bf50-0038362114c9`,
            

        },
        {
            original: `https://firebasestorage.googleapis.com/v0/b/blue-fashion-983e2.appspot.com/o/imagenes%2Fsecondbanner2.jpg?alt=media&token=d6f78fa2-9034-4a18-bf50-0038362114c9`,

        },
       
    ]
   

    return (<div>
        <div className=' w-[840px] sm:w-auto   sm:flex rounded-md overflow-hidden m-2'>
            <SlideGaleriaSecondB
            
                items={images} 
                showFullscreenButton={false}
                autoPlay={true}
                slideInterval={4000}
                showPlayButton={false}
                showBullets={true}
                showThumbnails={false}
                />

        </div>
        {/* <div className={`hidden sm:flex w-auto mt-[110px]`}>
        <SlideGaleriaSecondB
            
            items={imagesMobile} 
            showFullscreenButton={false}
            autoPlay={true}
            slideInterval={4000}
            showPlayButton={false}
            showBullets={true}
            showThumbnails={false}
            />
        </div> */}


</div>
    )
}

export default SliderGallerySecondBanner