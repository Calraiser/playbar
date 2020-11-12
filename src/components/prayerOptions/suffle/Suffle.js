import React from "react";
import { OptionsItem } from "../prayerOptions.style";

import Icons from "../../../img/Icons";

const SuffleComponent = () => {
  return (
    <OptionsItem>
      {Icons.map((item) => (
        <div className="prayerOptions__item">{item.suffle}</div>
      ))}
    </OptionsItem>
  );
};

export default SuffleComponent;
