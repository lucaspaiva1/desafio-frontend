import React from "react";

import PriceHandler from "./../../utils/PriceHandler";

import {
  Container,
  ImageContainer,
  ProductImage,
  DescriptionContainer,
  ProductTitle,
  ProductDescription,
  ProductPrice,
} from "./styles";

const ProductItem = ({ product }) => {
  return (
    <Container>
      <ImageContainer>
        <ProductImage src={product.image} />
      </ImageContainer>
      <DescriptionContainer>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
      </DescriptionContainer>
      <ProductPrice>{PriceHandler.parse(product.price / 100)}</ProductPrice>
    </Container>
  );
};

export default ProductItem;
