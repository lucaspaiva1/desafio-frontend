import React from "react";
import { Container, Content, Title } from "./styles";

const PageTitle = ({ title }) => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
      </Content>
    </Container>
  );
};

export default PageTitle;
