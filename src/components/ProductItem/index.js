import React from "react";

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
        <ProductImage src="https://img2.gratispng.com/20180428/tew/kisspng-scandinavia-couch-furniture-living-room-sofa-bed-retro-sofa-5ae50261402745.6702032315249577932628.jpg" />
      </ImageContainer>
      <DescriptionContainer>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
      </DescriptionContainer>
      <ProductPrice>{product.price}</ProductPrice>
    </Container>
  );
};

export default ProductItem;
