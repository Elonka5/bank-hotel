import React from 'react';

export type ImageResolution = {
  'img-1920': string;
  'img-1440': string;
  'img-1024': string;
  'img-375': string;
};

export interface ResponsiveImgProps {
  alt: string;
  nameImg: ImageResolution;
}

const ResponsiveFetchImg: React.FC<ResponsiveImgProps> = ({ nameImg, alt }) => {
  return (
    <picture>
      <source srcSet={nameImg['img-1920']} media="(min-width: 1920px)" />
      <source srcSet={nameImg['img-1440']} media="(min-width: 1440px) and (max-width: 1919.98px)" />
      <source srcSet={nameImg['img-1024']} media="(min-width: 1024px) and (max-width: 1439.98px)" />
      <source srcSet={nameImg['img-375']} media="(max-width: 1023.98px)" />
      <img src={nameImg['img-375']} alt={alt} width="100%" />
    </picture>
  );
};

export default ResponsiveFetchImg;
