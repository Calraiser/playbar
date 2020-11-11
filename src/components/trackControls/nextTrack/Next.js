import React from "react";
import { ForwardButton, Forward } from "./Next.style";

const ForwardButtonComponent = ({
  forward = "https://static.overlay-tech.com/assets/436969ee-5c57-483a-9697-6d8789906f69.svg",
}) => {
  return (
    <ForwardButton>
      <Forward alt="forward" src={forward} />
    </ForwardButton>
  );
};

export default ForwardButtonComponent;
