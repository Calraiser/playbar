import React from "react";

import { Button } from "../../../App.style";
import Icons from "../../../img/Icons";

const PlayButtonComponent = () => {
  return (
    <Button active>
      {Icons.map((item) => (
        <div>{item.play}</div>
      ))}
    </Button>
  );
};

export default PlayButtonComponent;
