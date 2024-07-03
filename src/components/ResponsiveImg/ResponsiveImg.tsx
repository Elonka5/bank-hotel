import React from 'react';

interface ResponsiveImgProps {
  alt: string;
  srcImg:string;
  className?:string;
}

const imgArr = (srcImg:string)=>{
  return [{ srcSet:`/${srcImg}-1920.webp`, media: '(min-width: 1919.99px)' },
  { srcSet: `/${srcImg}-1440.webp`, media: '(min-width: 1439.99px) and (max-width: 1919.98px)' },
  { srcSet: `/${srcImg}-1024.webp`, media: '(min-width: 1023.99px) and (max-width: 1439.98px)' },
  { srcSet:`/${srcImg}-375.webp`, media: "(max-width: 1023.98px)" }]
  }

const ResponsiveImage: React.FC<ResponsiveImgProps> = ({ alt, srcImg, className}) => {
  const sources = imgArr(srcImg);

  return (
    <picture>
      {sources.map((source, index) => (
        <source key={index} media={source.media} srcSet={source.srcSet} type="image/webp" />
      ))}
      <img src={sources[sources.length-1].srcSet} alt={alt} className={className} />
    </picture>
  );
};

export default ResponsiveImage;