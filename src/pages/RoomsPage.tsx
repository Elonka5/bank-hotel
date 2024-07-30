import { useEffect } from "react";
import HeroRooms from "../components/RoomsPage/HeroRooms";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { getRoomsThunk } from "../redux/rooms/roomsThunk";
import { RoomItemInterface } from "../redux/interface/interface";
import RoomEquipment from "../components/RoomsPage/RoomEquipment";

const RoomsPage = () => {
  const dispatch = useAppDispatch();

  const room = useAppSelector(
    (state: { rooms: { roomsData: RoomItemInterface[] } }) =>
      state.rooms.roomsData[0]
  );
  console.log(room);

  useEffect(() => {
    dispatch(getRoomsThunk());
  }, [dispatch]);

  return (
    <main>
      <HeroRooms room={room} />
      <RoomEquipment />
    </main>
  );
};

export default RoomsPage;
