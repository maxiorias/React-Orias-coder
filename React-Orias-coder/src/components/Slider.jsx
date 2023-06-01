import React, { useRef } from 'react';

const Slider = () => {
  const sliderRef = useRef(null);
  const sliderImages = ['../public/camisa.jpg', '../public/2.jpg', '../public/3.jpg', '../public/4.jpg', '../public/remera.jpg' , '../public/gorras.jpg', '../public/sacos.jpg'];

  let currentImageIndex = 0;
  const slideDuration = 5000; 

  const slideToNextImage = () => {
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    sliderRef.current.style.transform = `translateX(-${currentImageIndex * 100}%)`;
  };

  setInterval(slideToNextImage, slideDuration);

  return (
    <div className="slider">
      <div className="slider-content" ref={sliderRef}>
        {sliderImages.map((image, index) => (
          <div className="slider-image-container" key={index}>
            <img src={image} alt={`Slider ${index + 1}`} className="slider-image" />
            <h5>Ofertas, descuento 50%</h5> {/* Texto a mostrar */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;