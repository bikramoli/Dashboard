import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/navbar/Navbar";
import Sidebar from "../components/ui/sidebar/Sidebar";
import WrapperMain from "../components/ui/wrapper/WrapperMain";

const Layout = () => {
  return (
    <div class="container">
      <Navbar />
      <WrapperMain>
        <Outlet />
      </WrapperMain>
      <Sidebar />
    </div>
  );
};
export default Layout;
