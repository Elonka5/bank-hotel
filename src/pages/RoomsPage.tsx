import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RoomItem, fetchRooms } from "../redux/rooms/roomsThunk";
import { AccordionItem, getAccordionThunk,} from "../redux/accordion/accordionThunk";


const RoomsPage = () => {

  const dispatch = useAppDispatch();
  // const roomsData = useAppSelector((state) => state.rooms.roomsData);

  // React.useEffect(() => {
  //   dispatch(fetchRooms());
  // }, [dispatch]);

  const accordion = useAppSelector((state: { accordion: { accordionData: AccordionItem[] } }) => state.accordion.accordionData);

  React.useEffect(() => {
    // dispatch(fetchAccordionData({ imageName: 'main-about2',bigImageName:'main-about1' }));
    dispatch(getAccordionThunk());
  }, [dispatch]);


  // return (
  //   <ul>
  //   {roomsData.map((room: RoomItem,) => {
  //     return (
  //       <li key={room.id}>
  //         <img src={room.imgDescription}/>
  //         <p>{room.roomDescription}</p>
  //       </li>
  //     );
  //   })}
  // </ul>
  // )
  return (
    <div>
      {accordion.map((item) => (
        <div key={item.id}>
          <h2>{item.title.join(' ')}</h2>
          <p>{item.fullText}</p>
          <div style={{width:"400px"}}>
          <picture>
            <source srcSet={item.image['img-1920']} media="(min-width: 1920px)" />
            <source srcSet={item.image['img-1440']} media='(min-width: 1439.99px) and (max-width: 1919.98px)'  />
            <source srcSet={item.image['img-1024']} media="(min-width: 1024px)" />
            <img src={item.image['img-375']} alt="Responsive image" width={"400px"} />
          </picture>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoomsPage