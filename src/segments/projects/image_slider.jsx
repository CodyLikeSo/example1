import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="max-w-xl mx-auto relative overflow-hidden h-96 rounded-[30px]">
            <div className="relative h-full">
                {images.map((image, index) => (
                    <img 
                        key={index}
                        src={image} 
                        alt={`Slide ${index + 1}`} 
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>
            <button 
                onClick={prevSlide} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-600 p-2 rounded-full shadow"
            >
                &#10094;
            </button>
            <button 
                onClick={nextSlide} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-600 p-2 rounded-full shadow"
            >
                &#10095;
            </button>
            <div className="flex justify-center mt-2">
                {images.map((_, index) => (
                    <button 
                        key={index} 
                        onClick={() => setCurrentIndex(index)} 
                        className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-black' : 'bg-green-300'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
