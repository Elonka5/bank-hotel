import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GetInTouch from "../GetInTouch/GetInTouch";

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Layout;
