import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  max-width: 250px;
  margin-left: auto;
  position: relative;

  input {
    padding-right: 28px;
  }

  @media only screen and (max-width: 900px) {
    max-width: 50%;
  }
`;

export const ClearSearch = styled.div`
  position: absolute;
  right: 4px;
  top: 7px;
`;
