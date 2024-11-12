import React, { useEffect, useRef, useState } from 'react';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const followerPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);
  const [isInArea, setIsInArea] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const { innerWidth, innerHeight } = window;
      const areaWidth = (2 / 3) * innerWidth;
      const areaHeight = (2 / 3) * innerHeight;
      const areaX = (innerWidth - areaWidth) / 2;
      const areaY = (innerHeight - areaHeight) / 2;

      // Проверяем, находится ли курсор в заданной области
      const isInArea = mousePosition.x >= areaX && mousePosition.x <= areaX + areaWidth &&
                       mousePosition.y >= areaY && mousePosition.y <= areaY + areaHeight;

      setIsInArea(isInArea);

      if (isInArea) {
        // Если в области, останавливаем изображение
        followerPosition.current.x = mousePosition.x;
        followerPosition.current.y = mousePosition.y;
      } else {
        // Логика плавного движения
        followerPosition.current.x += (mousePosition.x - followerPosition.current.x) * 0.1;
        followerPosition.current.y += (mousePosition.y - followerPosition.current.y) * 0.1;
      }

      // Обновляем стиль элемента
      document.getElementById('mouse-follower').style.transform = `translate(-50%, -50%) translate(${followerPosition.current.x}px, ${followerPosition.current.y}px)`;
      document.getElementById('mouse-follower').style.width = isInArea ? '0px' : 'auto'; // Скрываем изображение
      document.getElementById('mouse-follower').style.height = isInArea ? '0px' : 'auto'; // Скрываем изображение

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [mousePosition]);

  return (
    <div>
      <div
        className="absolute pointer-events-none"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '66.67vw', // 2/3 ширины окна
          height: '66.67vh', // 2/3 высоты окна
          backgroundColor: isInArea ? 'rgba(26, 26, 26, 0.5)' : 'transparent',
          filter: 'blur(20px)',
          transform: 'translate(-50%, -50%)',
          transition: 'background-color 0.3s',
          zIndex: -999, // Помещаем область ниже остальных элементов
        }}
      />
      <div
        id="mouse-follower"
        className="fixed pointer-events-none"
        style={{
          left: 0,
          top: 0,
          transition: 'width 0.3s, height 0.3s, background-color 0.3s', // Плавный переход
        }}
      >
        <img
          src="/src/assets/ellipse.png" // Укажите путь к вашему изображению
          alt="Mouse Follower"
          className="h-64 w-64 opacity-60" // Настройте размеры и стиль
          style={{
            filter: 'blur(150px)',
            zIndex: -998
          }}
        />
      </div>
    </div>
  );
};

export default MouseFollower;
