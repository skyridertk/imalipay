import React from 'react'
import { ImageProp } from '../models/ImageProp';

const Image = ({image}: ImageProp) => {
  return (
    <div>
        <img src={image} />
    </div>
  )
}

export default Image