import React from "react";
import { Container } from "./styles";
import { Form } from "react-bootstrap";

const SearchBar = ({ loading, ...rest }) => {
  return (
    <Container>
      <Form.Control type="email" placeholder="Buscar..." />
    </Container>
  );
};

export default SearchBar;
