import { getDownloadURL, ref as storageRef, listAll } from 'firebase/storage';
import { storage } from '../firebase/firebase';
import { FirebaseError } from 'firebase/app';
import { ImageResolution } from '../redux/interface/interface';

export const generateImageURLs = async (baseName: string, sizes: string[], path: string): Promise<ImageResolution> => {
  const placeholderImage = 'https://firebasestorage.googleapis.com/v0/b/bank-hotel.appspot.com/o/main%2Fplaceholder_image.webp?alt=media&token=a8701407-9ae1-4cab-97ae-39f629ae9658';

  const urls: ImageResolution = {
    'img-1920': '',
    'img-1440': '',
    'img-1024': '',
    'img-375': ''
  };

  const folderRef = storageRef(storage, path);
  const folderContents = await listAll(folderRef);
  const fileNames = folderContents.items.map(item => item.name);

  for (const size of sizes) {
    const key = `img-${size}` as keyof ImageResolution;
    const filePath = `${baseName}-${size}.webp`;

    if (fileNames.includes(filePath)) {
      try {
        urls[key] = baseName ? await getDownloadURL(storageRef(storage, `${path}/${filePath}`)) : placeholderImage;
      } catch (error) {
        if ((error as FirebaseError).code === 'storage/object-not-found') {
          // console.warn(`Image ${filePath} not found at path ${path}.`);
        } else {
          // console.error(`Failed to load image ${filePath} from path ${path}: `, error);
        }
        urls[key] = placeholderImage;
      }
    } else {
      // console.warn(`Image ${filePath} not found at path ${path}.`);
      urls[key] = placeholderImage;
    }
  }
  return urls;
};
