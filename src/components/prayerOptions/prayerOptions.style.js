import styled from "styled-components";

export const OptionsItem = styled.div`
  margin: 0 9px;
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
