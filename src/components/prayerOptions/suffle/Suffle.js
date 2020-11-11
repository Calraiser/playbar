import React from "react";
import { Suffle } from "./Suffle.style";

import IconSuffle from "../../../img/suffle.svg";

const SuffleComponent = () => {
  return (
    <Suffle>
      <img src={IconSuffle} alt="" />
    </Suffle>
  );
};

export default SuffleComponent;
