import { setCheckInDate, setCheckOutDate } from "../redux/booking/bookingSlice";
import { useAppDispatch } from "../redux/hooks/hooks";

const useClearCurrentState = () => {
  const dispatch = useAppDispatch();

  const clearCurrentState = () => {
    dispatch(setCheckInDate(null));
    dispatch(setCheckOutDate(null));
  };

  return clearCurrentState;
};

export { useClearCurrentState };
