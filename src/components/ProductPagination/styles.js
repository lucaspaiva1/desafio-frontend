import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: auto;
  max-width: 1024px;
  padding: 2rem 0;
`;

export const PageItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: ${(props) => (props.active ? " thin solid #d3d3d3" : "none")};
  width: 30px;
  cursor: ${(props) => (props.active ? "inherit" : "pointer")};
`;
