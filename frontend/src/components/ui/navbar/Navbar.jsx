import moment from "moment";
import "./Style.css";
import avatar from "../../../assets/svgs/avatar.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav_icon">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <span className="navbar-greeting">"Hi, There!"</span>
        <span className="navbar-date">
          {moment().format("MMMM Do YYYY, h:mm a")}
        </span>
      </div>
      <div className="navbar__right">
        <a href="/">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
        </a>
        <a href="/">
          <img width="30" src={avatar} alt="" />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
