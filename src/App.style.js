import styled from "styled-components";

export const Button = styled.button`
  background: none;
  border: none;
  appearance: none;
  padding: 0 17px;
  transition-duration: 0.15s;
  transition-property: all;
  overflow: hidden;
  svg {
    fill: ${(props) => (props.active ? "#E74E85" : "#B6BBCC")};
    &:hover {
      fill: ${(props) => (props.active ? "#E74E85" : "#E74E85")};
    }
  }
  &:hover {
    fill: "#E74E85";
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const ActiontrackContainer = styled.div`
  display: flex;
  align-content: space-between;
  flex: 1;
  padding: 0 40px;
  align-items: flex-end;
`;

export const Actiontrack = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const ColLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const ColCenter = styled.div`
  margin: 0 120px 0 100px;
`;

export const ColRight = styled.div`
  display: flex;
  align-items: center;
`;
