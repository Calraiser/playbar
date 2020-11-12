import styled from "styled-components";

export const ActionsItem = styled.div`
  margin-left: 22px;

  svg {
    fill: ${(props) => (props.active ? "#E74E85" : "#000")};
    transition-duration: 0.15s;
    transition-property: all;
    &:hover {
      fill: ${(props) => (props.active ? "#000" : "#E74E85")};
      cursor: pointer;
    }
  }
`;
