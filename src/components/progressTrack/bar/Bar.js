import React from "react";
import {
  ProgressBar,
  Num0003,
  FlexWrapperOne,
  Progress,
  Num0328,
} from "./Bar.style";

const ProgressBarComponent = ({ num0003 = "00:03", num0328 = "03:28" }) => {
  return (
    <ProgressBar>
      <Num0003>{num0003}</Num0003>
      <FlexWrapperOne>
        <Progress></Progress>
      </FlexWrapperOne>
      <Num0328>{num0328}</Num0328>
    </ProgressBar>
  );
};

export default ProgressBarComponent;
