import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 220px);
  overflow: auto;
`;
