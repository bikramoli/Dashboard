import logo from "../../../assets/svgs/logo.svg";

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
        <div className="sidebar__link active_menu_link">
          <img src={logo} alt="logo" />
          <a href="/">Dashboard</a>
        </div>
        <div className="sidebar__link">
          <img src={logo} alt="logo" />
          <a href="/">Subscriber</a>
        </div>
        <div className="sidebar__link">
          <img src={logo} alt="logo" />
          <a href="/">User</a>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
