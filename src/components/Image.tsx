import React from 'react'
import { ImageProp } from '../models/ImageProp';

const Image = (props: ImageProp) => {
  return (
    <div>
        <img src={props.image} className={props?.className}/>
    </div>
  )
}

Image.defaultProps = {
  className: "git "
}

export default Image