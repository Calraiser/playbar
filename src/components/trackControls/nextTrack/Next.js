import React from "react";
import { Button } from "../../../App.style";

import Icons from "../../../img/Icons";

const ForwardButtonComponent = () => {
  return (
    <Button>
      {Icons.map((item) => (
        <div>{item.next}</div>
      ))}
    </Button>
  );
};

export default ForwardButtonComponent;
