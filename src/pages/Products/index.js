import React from "react";
import { useSelector } from "react-redux";
import { Page } from "./../../layout";
import { PageLoader, ProductList } from "./../../components";
import { selectProductsLoading } from "./../../redux/ducks/Product/selectors";
import { Container } from "./styles";

const ProductsPage = () => {
  const loading = useSelector(selectProductsLoading);

  return (
    <Page title="Produtos">
      <PageLoader loading={loading} />
      <Container>
        <ProductList />
      </Container>
    </Page>
  );
};

export default ProductsPage;
