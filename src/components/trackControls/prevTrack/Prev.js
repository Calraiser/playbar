import React from "react";
import { BackButton, Back } from "./Prev.style";

const BackButtonComponent = ({
  back = "https://static.overlay-tech.com/assets/523f143f-fd09-4f77-a953-60cb8702f565.svg",
}) => {
  return (
    <BackButton>
      <Back alt="back" src={back} />
    </BackButton>
  );
};

export default BackButtonComponent;
