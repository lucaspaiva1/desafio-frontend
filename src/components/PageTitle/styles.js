import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f4f4f4;
  padding: 0rem 1rem;
`;

export const Content = styled.div`
  height: 150px;
  max-width: 1024px;
  width: 100%;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 900px) {
    height: 80px;
  }
`;

export const Title = styled.h1`
  color: #4f4f4f;
`;
