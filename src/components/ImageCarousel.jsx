import React from "react";
import './styles/imageCarousel.scss';
import img1 from '../assets/2023.jpg';

function ImageCarousel() {
  const aux = [1, 2, 3];

  return (
    <div className='container'>
      <img className='img' src='https://random.imagecdn.app/500/150' alt='img_1' />
      <img className='img' src='https://random.imagecdn.app/499/150' alt='img_2' />
      <img className='img' src='https://random.imagecdn.app/501/150' alt='img_3' />
    </div>
  );
}

export default ImageCarousel;
