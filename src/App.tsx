import { Suspense, lazy } from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const Main = lazy(() => import("./pages/MainPage"));
const Rooms = lazy(() => import("./pages/RoomsPage"));
const Facility = lazy(() => import("./pages/FacilityPage"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/restaurant" element={<Facility />} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
