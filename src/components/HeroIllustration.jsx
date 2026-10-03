import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../assets/hero-illustration.json';

export default function HeroIllustration() {
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
      className="w-full max-w-[500px] lg:max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none" 
    />
  );
}
