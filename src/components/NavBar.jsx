import "./NavBar.css";
import StormGif from "../assets/storm.gif";

function Nav() {
  return (
    <nav>
      <div className="navbar__container">
        <div className="nav__left nav__half">
          <img src={StormGif} className="navbar__logo" />
          <h2 className="nav__title">Storm Spoofer</h2>
        </div>
        <div className="nav__right nav__half"></div>
      </div>
    </nav>
  );
}

export default Nav;
