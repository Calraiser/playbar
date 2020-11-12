import React from "react";
import { OptionsItem } from "../prayerOptions.style";

import Icons from "../../../img/Icons";

const RepeatComponent = () => {
  return (
    <OptionsItem active>
      {Icons.map((item) => (
        <div className="prayerOptions__item">{item.repeat}</div>
      ))}
    </OptionsItem>
  );
};

export default RepeatComponent;
