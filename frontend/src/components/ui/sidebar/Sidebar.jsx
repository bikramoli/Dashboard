import "./Style.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/svgs/logo.svg";
import { sideBarItem } from "./SidebarItems";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>GENEUS SYSTEM</h1>
        </div>
      </div>

      <div className="sidebar__menu">
        {sideBarItem.map((item, index) => (
          <div key={index} className="sidebar__link ">
            <img src={item.items[0].icon} alt="logo" />
            <Link to={item.items[0].link}>{item.items[0].name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
