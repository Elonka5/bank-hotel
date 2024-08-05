import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GetInTouch from "../GetInTouch/GetInTouch";
import Loader from "./Loader/Loader";
import ButtonScrollToTop from "../ButtonScrollToTop/ButtonScrollToTop";

const Layout: React.FC = () => {
  const location = useLocation();
  const isRestaurantPage = location.pathname === "/restaurant";

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
        <ButtonScrollToTop />
      </Suspense>
      <GetInTouch id="contacts" isRestaurantPage={isRestaurantPage} />
      <Footer isRestaurantPage={isRestaurantPage} />
    </>
  );
};

export default Layout;
