import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { listRequest } from "./../../redux/ducks/Product/actions";
import { Form } from "react-bootstrap";
import { Container, ClearSearch } from "./styles";
import { CloseButton } from "react-bootstrap";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(listRequest({ page: 1, search }));
  };

  const onClear = () => {
    setSearch("");
    dispatch(listRequest({ page: 1, search: "" }));
  };

  return (
    <Container onSubmit={onSubmit}>
      <Form.Control
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ClearSearch onClick={onClear}>
        <CloseButton />
      </ClearSearch>
    </Container>
  );
};

export default SearchBar;
