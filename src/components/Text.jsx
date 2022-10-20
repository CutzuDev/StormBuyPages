import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Text() {
  return (
    <>
      <div className="title__animation">
        <h1 className="home__title">Storm Spoofer V2</h1>
      </div>
      <p className="home__para">
        Storm Spoofer is the best Fivem spoofer because it is the only spoofer
        that can bypass Fivem's anti-cheat. Storm Spoofer also has a
        user-friendly interface that makes it easy to use.
      </p>
      <div className="home__button--container">
        <Link to={"/products"}>
          <Button variant="outlined" color="secondary" className="home__button">
            <h3 className="home__button--text">Products</h3>
          </Button>
        </Link>
        <a href="https://discord.com" target="_blank">
          <Button variant="outlined" color="secondary" className="home__button">
            <h3 className="home__button--text">Discord</h3>
          </Button>
        </a>
      </div>
    </>
  );
}

export default Text;
