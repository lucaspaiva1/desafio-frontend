import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Page } from "./../../layout";
import { PageLoader, ProductList } from "./../../components";
import {
  selectProductsLoading,
  selectProductPayload,
} from "./../../redux/ducks/Product/selectors";
import { Container } from "./styles";

const ProductsPage = () => {
  const [title, setTitle] = useState("Produtos");

  const loading = useSelector(selectProductsLoading);
  const payload = useSelector(selectProductPayload);

  useEffect(() => {
    setTitle(payload && payload.search ? payload.search : "Produtos");
  }, [payload]);

  return (
    <Page title={title}>
      <PageLoader loading={loading} />
      <Container>
        <ProductList />
      </Container>
    </Page>
  );
};

export default ProductsPage;
