import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Dashboard from "../pages/Dashboard";
import Subscriber from "../pages/Subscriber";

const PageRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/subscribers" element={<Subscriber />} />
        </Route>
      </Routes>
    </>
  );
};

export default PageRoute;
