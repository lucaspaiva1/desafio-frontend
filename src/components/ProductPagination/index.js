import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listRequest } from "./../../redux/ducks/Product/actions";
import { selectProductTotalPages } from "./../../redux/ducks/Product/selectors";

import { Container, PageItem } from "./styles";

const ProductPagination = () => {
  const dispatch = useDispatch();

  const totalPages = useSelector(selectProductTotalPages);

  const currentPage = 1;

  const [paginationItems, setPaginationItems] = useState([]);

  useEffect(() => {
    renderPaginationItems();
  }, [totalPages]);

  const renderPaginationItems = () => {
    const items = [];
    for (let page = 1; page <= totalPages; page++) {
      items.push({ page });
    }
    setPaginationItems(items);
  };

  return (
    <Container>
      {paginationItems.map((item) => {
        return (
          <PageItem key={item.page} active={item.page === currentPage}>
            {item.page}
          </PageItem>
        );
      })}
    </Container>
  );
};

export default ProductPagination;
