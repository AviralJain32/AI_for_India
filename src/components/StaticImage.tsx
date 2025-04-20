
import React from 'react';

interface StaticImageProps {
  src: string;
  alt: string;
  className?: string;
}

const StaticImage = ({ src, alt, className = "" }: StaticImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full object-cover ${className}`}
    />
  );
};

export default StaticImage;
