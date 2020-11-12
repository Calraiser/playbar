import React from "react";

import { ActionsItem } from "../trackActions.style";

import Icons from "../../../img/Icons";

const AddComponent = () => {
  return (
    <ActionsItem>
      {Icons.map((item) => (
        <div>{item.add}</div>
      ))}
    </ActionsItem>
  );
};

export default AddComponent;
