import React from 'react';
import ImageSlider from './image_slider';
import chel from '/src/assets/chel.jpg';
import gymbro from '/src/assets/gymbro.jpg';

export const ProjectDreamGave = () => {
    const images = [
        chel,
        gymbro,
        chel, // Добавьте дополнительные изображения по мере необходимости
    ];

  return (
    <div className=''>
        <div className='text-white text-4xl py-10 text-center'>Dream-game</div>
        <div className='text-green-400 text-xl px-16 text-left w-1/2'>Эту страницу я посвещу созданию своей мобильной игры. Я собрал команду друзей, которые с которыми вести разработку игры. Все что нас объеденяло - любовь к игре. В целом люди были совершенно разной напрвленности - и дизайнеры, и программисты и гумманитарии).</div>

        <div className='absolute w-1/2 bottom-20 '>
          <ImageSlider images={images}/>
        </div>
        
    </div>
  );
}  