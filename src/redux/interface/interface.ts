// import { RoomItem } from "../rooms/roomsThunk";

export interface ImageResolution {
  "img-1920": string;
  "img-1440": string;
  "img-1024": string;
  "img-375": string;
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

export interface ApartmentsInterface {
  id: number;
  imgLeft: string;
  imgRight: string;
  title: string;
  text: string;
  imageLeftResolutions?: ImageResolution;
  imageRightResolutions?: ImageResolution;
}

export interface ImageState {
  images: ImageItem[];
}

export interface ImageItem {
  id: string;
  path: string;
  url: string;
}

export interface ImageFetchParams {
  imageName: string;
  path: string;
}


export interface RoomItemInterface {
  id?: string;
  title?: string;
  imgHero: string;
  roomDescription?: string;
  imgDescription: string;
  leftSection: {
    image: string;
    description: string;
  };
  rightSection: {
    image: string;
    description: string;
  };
  imageHeroResolutions?: ImageResolution;
  imageDescriptionResolutions?: ImageResolution;
  imageLeftSectionResolutions?: ImageResolution;
  imageRightSectionResolutions?: ImageResolution;
}

export interface RoomsState {
  roomsData: RoomItemInterface[];
}

export interface IBookingState {
  checkInDate: string | null;
  checkOutDate: string | null;
  submitDates?:
    | Array<{
        checkIn: string | null;
        checkOut: string | null;
      }>
    | undefined;
}

export interface ServiceState {
  error: string | null;
  isLoading: boolean;
  openModal: boolean;
  modalContent: string;
}
