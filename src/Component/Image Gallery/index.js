import React from "react";
import FbImage from 'react-fb-image-grid';



function ImageGallery({Images}){
    return(
        <>
              <FbImage images={Images} />
            </>
    );
}


export default ImageGallery