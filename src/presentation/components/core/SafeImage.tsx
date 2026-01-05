"use client"; // <--- Esto permite usar eventos como onError

import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export const SafeImage = ({ src, alt, className, fallbackSrc = "https://placehold.co/600x400/1e293b/white?text=Project" }: SafeImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        // Cuando falla la carga, cambiamos al fallback
        setImgSrc(fallbackSrc);
      }}
    />
  );
};