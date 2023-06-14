import React, { useState, useEffect, useRef } from 'react';

const Slider = () => {
  const sliderRef = useRef(null);
  const sliderImages = ['../public/camisa.jpg', '../public/2.jpg', '../public/3.jpg', '../public/4.jpg', '../public/remera.jpg', '../public/gorras.jpg', '../public/sacos.jpg'];
  const [isLoading, setIsLoading] = useState(true);

  let currentImageIndex = 0;
  const slideDuration = 5000;

  const slideToNextImage = () => {
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    sliderRef.current.style.transform = `translateX(-${currentImageIndex * 100}%)`;
  };

  useEffect(() => {
    const sliderTimer = setInterval(slideToNextImage, slideDuration);

    // Cuando se cargan todas las imágenes, se establece isLoading en false
    Promise.all(sliderImages.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    })).then(() => {
      setIsLoading(false);
    }).catch((error) => {
      console.error('Error al cargar las imágenes del slider:', error);
      setIsLoading(false);
    });

    return () => {
      clearInterval(sliderTimer);
    };
  }, []);

  return (
    <div className="slider">
      {isLoading ? (
        <div className="loading-message">Cargando imágenes...</div>
      ) : (
        <div className="slider-content" ref={sliderRef}>
          {sliderImages.map((image, index) => (
            <div className="slider-image-container" key={index}>
              <img src={image} alt={`Slider ${index + 1}`} className="slider-image" />
              <h5>Ofertas, descuento 50%</h5> {/* Texto a mostrar */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;