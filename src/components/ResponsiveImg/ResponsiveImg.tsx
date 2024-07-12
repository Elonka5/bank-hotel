import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { fetchImg } from '../../redux/images/images';

export type ResponsiveImgProps = {
  alt: string;
  srcImg: string;
  className?: string;
  path: string;
};

const URL_TO_STORAGE = 'https://firebasestorage.googleapis.com/v0/b/bank-hotel.appspot.com/o/'

const imgArr = (srcImg: string,path:string) => {
  return [
    { srcSet: `${URL_TO_STORAGE}${path}%2F${srcImg}-1920.webp?alt=media`, media: '(min-width: 1919.99px)' },
    { srcSet: `${URL_TO_STORAGE}${path}%2F${srcImg}-1440.webp?alt=media`, media: '(min-width: 1439.99px) and (max-width: 1919.98px)' },
    { srcSet: `${URL_TO_STORAGE}${path}%2F${srcImg}-1024.webp?alt=media`, media: '(min-width: 1023.99px) and (max-width: 1439.98px)' },
    { srcSet: `${URL_TO_STORAGE}${path}%2F${srcImg}-375.webp?alt=media`, media: '(max-width: 1023.98px)' }
  ];
};

const ResponsiveImage: React.FC<ResponsiveImgProps> = ({ alt, srcImg, className,path}) => {

  const sources = imgArr(srcImg,path);
  const dispatch = useAppDispatch();
  const [imageURL] = useState<string>('');

  useEffect(() => {
    dispatch(fetchImg({ imageName: srcImg, path:path }));
  }, [dispatch, srcImg,path]);


  return (
    <picture>
      {sources.map((source, index) => (
        <source key={index} media={source.media} srcSet={source.srcSet} type="image/webp" />
      ))}
      {/* <img src={sources[sources.length-1].srcSet} alt={alt} className={className} /> */}
      <img src={imageURL} alt={alt} className={className} />
    </picture>
  );
};

export default ResponsiveImage;