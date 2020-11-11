import React from "react";
import { PlayButton, Play } from "./Play.style";

const PlayButtonComponent = ({
  play = "https://static.overlay-tech.com/assets/83224524-36f4-43ee-9518-bf41fd54bd6e.svg",
}) => {
  return (
    <PlayButton>
      <Play alt="play" src={play} />
    </PlayButton>
  );
};

export default PlayButtonComponent;
