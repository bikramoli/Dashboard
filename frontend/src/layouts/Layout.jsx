import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/navbar/Navbar";
import Sidebar from "../components/ui/sidebar/Sidebar";

const Layout = () => {
  return (
    <div class="container">
      <Navbar />
      <Outlet />
      <Sidebar />
    </div>
  );
};
export default Layout;
