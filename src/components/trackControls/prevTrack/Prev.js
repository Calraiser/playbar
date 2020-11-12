import React from "react";
import { Button } from "../../../App.style";

import Icons from "../../../img/Icons";

const BackButtonComponent = () => {
  return (
    <Button>
      {Icons.map((item) => (
        <div>{item.prev}</div>
      ))}
    </Button>
  );
};

export default BackButtonComponent;
