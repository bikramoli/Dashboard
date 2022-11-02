import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const PageRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default PageRoute;
