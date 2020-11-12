import React from "react";
import { OptionsItem } from "../prayerOptions.style";

import Icons from "../../../img/Icons";

const CastComponent = () => {
  return (
    <OptionsItem>
      {Icons.map((item) => (
        <div>{item.cast}</div>
      ))}
    </OptionsItem>
  );
};

export default CastComponent;
