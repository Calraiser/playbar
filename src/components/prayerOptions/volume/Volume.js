import React from "react";
import { Volume } from "./Volume.style";

import IconVolume from "../../../img/volume.svg";

const VolumeComponent = () => {
  return (
    <Volume>
      <img src={IconVolume} alt="" />
    </Volume>
  );
};

export default VolumeComponent;
