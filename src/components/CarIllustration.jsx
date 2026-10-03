import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../assets/journey/car-animation.json';

export default function CarIllustration() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full max-w-[280px] sm:max-w-[340px] h-[120px] sm:h-[140px] mx-auto flex items-center justify-center select-none"
    />
  );
}
