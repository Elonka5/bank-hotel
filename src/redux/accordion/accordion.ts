
import { getDownloadURL, ref as storageRef } from 'firebase/storage';

import {storage } from '../../firebase/firebase';
import { FirebaseError } from 'firebase/app';
import { ImageResolution } from '../interface/accordion';

export const generateImageURLs = async (baseName: string, sizes: string[]): Promise<ImageResolution> => {
  const urls: ImageResolution = {
    'img-1920': '',
    'img-1440': '',
    'img-1024': '',
    'img-375': ''
  };

  for (const size of sizes) {
    const key = `img-${size}` as keyof ImageResolution;
    try {
      urls[key] = baseName ? await getDownloadURL(storageRef(storage, `main/${baseName}-${size}.webp`)) : '';
    } catch (error) {
      if ((error as FirebaseError).code === 'storage/object-not-found') {
        console.warn(`Image ${baseName}-${size}.webp not found.`);
      } else {
        console.error(`Failed to load image ${baseName}-${size}.webp: `, error);
      }
      urls[key] = '';
    }
  }
  return urls;
};