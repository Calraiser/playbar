import React from "react";
import { OptionsItem } from "../prayerOptions.style";

import Icons from "../../../img/Icons";

const VolumeComponent = () => {
  return (
    <OptionsItem>
      {Icons.map((item) => (
        <div className="prayerOptions__item">{item.volume}</div>
      ))}
    </OptionsItem>
  );
};

export default VolumeComponent;
