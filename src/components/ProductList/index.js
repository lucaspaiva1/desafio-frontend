import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listRequest } from "./../../redux/ducks/Product/actions";
import { selectProductItems } from "./../../redux/ducks/Product/selectors";

import { ProductItem, ProductPagination } from "./../../components";
import { Container, ItemsCount, ListScroll, ListContainer } from "./styles";

const ProductList = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProductItems);

  useEffect(() => {
    dispatch(listRequest());
  }, []);

  return (
    <Container>
      <ItemsCount>x produtos encontrados</ItemsCount>

      <ListScroll>
        <ListContainer>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ListContainer>
      </ListScroll>

      <ProductPagination />
    </Container>
  );
};

export default ProductList;
