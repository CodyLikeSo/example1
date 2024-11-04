import React from 'react';
import ImageSlider from './image_slider';
import chel from '/home/cody/Cody/Programming/React/example1/example1/src/assets/chel.jpg';
import gymbro from '/home/cody/Cody/Programming/React/example1/example1/src/assets/gymbro.jpg';

export const ProjectDreamGave = () => {
    const images = [
        chel,
        gymbro,
        chel, // Добавьте дополнительные изображения по мере необходимости
    ];

  return (
    <div className=''>
        <div className='text-white text-2xl'>text</div>
        <ImageSlider images={images}/>
    </div>
  );
}  