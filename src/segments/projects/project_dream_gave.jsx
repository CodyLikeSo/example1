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
        <div className='text-white text-4xl py-10 text-center'>Name of project</div>
        <div className='text-green-400 text-3xl px-16 text-left'>Text1</div>

        <div className=''>
          <ImageSlider images={images}/>
        </div>
        
    </div>
  );
}  