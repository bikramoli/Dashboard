import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Dashboard from "../pages/Dashboard";

const PageRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default PageRoute;
