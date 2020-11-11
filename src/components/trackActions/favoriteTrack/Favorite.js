import React from "react";
import { Favorite, Icon } from "./Favorite.style";

const FavoriteComponent = ({
  icon = "https://static.overlay-tech.com/assets/93621746-000a-4ca4-8f20-64f86fa3b87f.svg",
}) => {
  return (
    <Favorite>
      <Icon alt="icon" src={icon} />
    </Favorite>
  );
};

export default FavoriteComponent;
