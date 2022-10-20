import "./NavBar.css";
import StormGif from "../assets/storm.gif";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="navbar__container">
        <div className="nav__left nav__half">
          <Link to={"/"} className="nav__half">
            <img src={StormGif} className="navbar__logo" />
            <h2 className="nav__title">Storm Spoofer</h2>
          </Link>
        </div>
        <div className="nav__right nav__half">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to={"/products"}>
                <Button
                  color="secondary"
                  variant="outlined"
                  className="nav__button"
                >
                  <h3 className="nav__button--text">Products</h3>
                </Button>
              </Link>
            </li>
            <li className="nav__item">
              <a href="https://discord.com" target="_blank">
                <Button
                  color="secondary"
                  variant="outlined"
                  className="nav__button"
                >
                  <h3 className="nav__button--text">Discord</h3>
                </Button>
              </a>
            </li>
            <li className="nav__item nav__mobile--item">
              <Link to={"/"}>
                <Button
                  color="secondary"
                  variant="outlined"
                  className="nav__button"
                >
                  <h3 className="nav__button--text">Back</h3>
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
