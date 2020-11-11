import React from "react";
import { Title, TitleArtist } from "./Title.style";

const TitleComponent = ({ titleArtist = "Title - Artist" }) => {
  return (
    <Title>
      <TitleArtist>{titleArtist}</TitleArtist>
    </Title>
  );
};

export default TitleComponent;
