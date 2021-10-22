import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;

export const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 1rem;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ProductTitle = styled.div``;

export const ProductDescription = styled.div`
  font-size: 12px;
  color: #505050;
  max-width: 450px;
`;

export const ProductPrice = styled.div``;
