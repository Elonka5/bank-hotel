import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GetInTouch from "../GetInTouch/GetInTouch";
import Loader from "./Loader/Loader";

// type ActiveSectionContextType = {
//   getintouchRef: React.RefObject<HTMLDivElement>;
// };

const Layout = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   const hash = location.hash;
  //   if (hash) {
  //     const element = document.getElementById(hash.substring(1));
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, [location]);

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <GetInTouch id="contacts" />
      <Footer />
    </>
  );
};

export default Layout;
