import React from "react";
import { SearchBar } from "../../components";
import { Container, Content, CompanyName } from "./styles";

const NavMenu = ({ children }) => {
  return (
    <Container>
      <Content>
        <CompanyName>Minha Loja</CompanyName>
        <SearchBar />
      </Content>
    </Container>
  );
};

export default NavMenu;
