import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const Main = lazy(() => import("./pages/MainPage"));
const Rooms = lazy(() => import("./pages/RoomsPage"));
const Facility = lazy(()=>import("./pages/FacilityPage"));

function App() {
  return (
    <Suspense>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Main/>}/>
      <Route path="rooms" element={<Rooms/>}/>
      <Route path="facility" element={<Facility/>}/>
      </Route>
    </Routes>
    </Suspense>
  );
}

export default App;
