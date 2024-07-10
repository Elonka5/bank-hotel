export interface ImageResolution {
    'img-1920': string;
    'img-1440': string;
    'img-1024': string;
    'img-375': string;
  }
  
  export interface AccordionItemInterface {
    id: number;
    image: string;
    bigImg: string;
    title: string[];
    fullText: string;
    isItemOpen: boolean;
    imageResolutions?: ImageResolution;
    bigImageResolutions?: ImageResolution;
  }
  
   export interface AsyncThunkConfig {
    rejectValue: string;
  }
  