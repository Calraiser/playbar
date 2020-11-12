import React from "react";

import { ActionsItem } from "../trackActions.style";
import Icons from "../../../img/Icons";

const FavoriteComponent = () => {
  return (
    <ActionsItem active>
      {Icons.map((item) => (
        <div>{item.favorite}</div>
      ))}
    </ActionsItem>
  );
};

export default FavoriteComponent;
