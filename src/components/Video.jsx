import React from "react";

function Video() {
  return (
    <>
      <iframe
        className="home__video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/IsOm691-20E"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </>
  );
}

export default Video;
