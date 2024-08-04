import React from 'react'

type ImageContainerProps = {
    width : string | number,
    height : string | number,
    src : string,
    className? : string,
    alt : string
}

const ImageContainer: React.FC<ImageContainerProps> = ({width , height , src , alt , className}) => {
  return (
    <img src={src} width={width} height={height} alt={alt} />
  )
}

export default ImageContainer