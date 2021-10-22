import React from "react";
import { Container, Label, Loading } from "./styles";
import { Spinner } from "react-bootstrap";

const PageLoader = ({ loading, ...rest }) => {
  return (
    loading && (
      <Loading>
        <Container>
          <Spinner
            animation="border"
            role="status"
            as="span"
            aria-hidden="true"
          />
          <Label>Carregando...</Label>
        </Container>
      </Loading>
    )
  );
};

export default PageLoader;
