import React from "react";
import { useSelector } from "react-redux";
import { Page, Nav } from "./../../layout";
import { PageLoader } from "./../../components";
import { selectProductsLoading } from "./../../redux/ducks/Product/selectors";
import { Container } from "./styles";

const ProductsPage = () => {
  const loading = useSelector(selectProductsLoading);

  return (
    <Page>
      <PageLoader loading={loading} />
      <Container>Products Page</Container>
    </Page>
  );
};

export default ProductsPage;
