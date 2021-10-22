import React from "react";
import { Container } from "./styles";

const Page = ({ children }) => {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
};

export default Page;
