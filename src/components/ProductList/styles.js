import styled from "styled-components";

export const Container = styled.div``;

export const ItemsCount = styled.h4`
  padding: 2rem 0rem;
  margin: 0;
  width: 100%;
  max-width: 1024px;
  margin: auto;
  font-size: 14px;

  @media only screen and (max-width: 900px) {
    padding: 1rem;
  }
`;

export const ListScroll = styled.div`
  height: calc(100vh - 402px);
  overflow: auto;
  padding: 0 1rem;

  @media only screen and (max-width: 900px) {
    height: calc(100vh - 316px);
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: auto;
`;

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: auto;
  justify-content: space-between;
  padding: 2rem 1rem;

  @media only screen and (max-width: 900px) {
    padding: 1rem;
    flex-direction: column;
  }
`;
