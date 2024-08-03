import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GetInTouch from "../GetInTouch/GetInTouch";
import Loader from "./Loader/Loader";
import ButtonScrollToTop from "../ButtonScrollToTop/ButtonScrollToTop";

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
        <ButtonScrollToTop />
      </Suspense>
      <GetInTouch id="contacts" />
      <Footer />
    </>
  );
};

export default Layout;
