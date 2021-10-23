import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listRequest } from "./../../redux/ducks/Product/actions";
import { selectProductPayload } from "./../../redux/ducks/Product/selectors";

import { Form } from "react-bootstrap";
import { Container } from "./styles";

const OPTIONS = [10, 15, 20, 25];

const ProductRowsSelector = () => {
  const dispatch = useDispatch();

  const payload = useSelector(selectProductPayload);

  const [rows, setRows] = useState(10);

  const changeRows = (value) => {
    setRows(value);
    dispatch(listRequest({ ...payload, rows: value, page: 1 }));
  };

  return (
    <Container>
      <Form.Select value={rows} onChange={(e) => changeRows(e.target.value)}>
        {OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option} Produtos por página
          </option>
        ))}
      </Form.Select>
    </Container>
  );
};

export default ProductRowsSelector;
