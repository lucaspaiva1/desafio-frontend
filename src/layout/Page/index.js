import React from "react";
import { Container, Content } from "./styles";
import { PageTitle } from "./../../components";

const Page = ({ title, children }) => {
  return (
    <Container>
      <PageTitle title={title} />
      <Content>{children}</Content>
    </Container>
  );
};

export default Page;
