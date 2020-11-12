import styled from "styled-components";

export const ForwardButton = styled.button`
  display: flex;
  align-items: flex-start;
  border: none;
  appearance: none;
  background: none;
  transition-duration: 0.15s;
  transition-property: background-color;
  overflow: hidden;
  padding: 10px;
  border-radius: 50%;
  &:hover {
    background: #000;
    opacity: 0.12;
    cursor: pointer;
  }
`;
