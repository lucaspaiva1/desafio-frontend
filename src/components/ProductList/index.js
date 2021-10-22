import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listRequest } from "./../../redux/ducks/Product/actions";
import {
  selectProductItems,
  selectProductTotalItems,
} from "./../../redux/ducks/Product/selectors";

import { ProductItem, ProductPagination } from "./../../components";
import { Container, ItemsCount, ListScroll, ListContainer } from "./styles";

const ProductList = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProductItems);
  const totalItems = useSelector(selectProductTotalItems);

  useEffect(() => {
    dispatch(listRequest());
  }, []);

  return (
    <Container>
      {totalItems === 0 && <ItemsCount>Nenhum produto encontrado!</ItemsCount>}
      {totalItems === 1 && (
        <ItemsCount>Apenas {totalItems} produto foi encontrado</ItemsCount>
      )}
      {totalItems > 1 && (
        <ItemsCount>{totalItems} produtos encontrados</ItemsCount>
      )}

      <ListScroll>
        <ListContainer>
          {products.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </ListContainer>
      </ListScroll>

      <ProductPagination />
    </Container>
  );
};

export default ProductList;
