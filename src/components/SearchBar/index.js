import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listRequest } from "./../../redux/ducks/Product/actions";

import { Form } from "react-bootstrap";

import { Container } from "./styles";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(listRequest({ page: 1, search }));
  };

  return (
    <Container onSubmit={onSubmit}>
      <Form.Control
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Container>
  );
};

export default SearchBar;
