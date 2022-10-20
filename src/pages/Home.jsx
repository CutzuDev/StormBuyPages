import { useState } from "react";
import Text from "../components/Text";
import Video from "../components/Video";
import "./Home.css";

function Home() {
  const [text, setText] = useState();
  const [video, setVideo] = useState();

  setTimeout(() => {
    setText(<Text />);
    setVideo(<Video />);
  }, 2000);

  return (
    <div className="home">
      <div className="hrow">
        <header className="home__header headerStyle">
          <div className="home__half h__half--left">{text}</div>
          <div className="home__half h__half--right">{video}</div>
        </header>
      </div>
    </div>
  );
}

export default Home;
