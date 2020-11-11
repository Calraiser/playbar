import React from "react";
import { Add, Icon } from "./Add.style";

const AddComponent = ({
  icon = "https://static.overlay-tech.com/assets/4695238a-6d18-4dbe-b4d3-98bd9c383b75.svg",
}) => {
  return (
    <Add>
      <Icon alt="icon" src={icon} />
    </Add>
  );
};

export default AddComponent;
