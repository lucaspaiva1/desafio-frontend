import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.div`
  margin-left: 5px;
  color: #000;
`;

export const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #d3d3d3;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 2;
  .spinner-border {
    color: #000;
  }
`;
