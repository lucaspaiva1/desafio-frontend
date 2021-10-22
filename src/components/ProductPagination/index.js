import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listRequest } from "./../../redux/ducks/Product/actions";
import {
  selectProductTotalPages,
  selectProductCurrentPage,
  selectProductPayload,
} from "./../../redux/ducks/Product/selectors";

import { Container, PageItem } from "./styles";

const ProductPagination = () => {
  const dispatch = useDispatch();

  const totalPages = useSelector(selectProductTotalPages);
  const currentPage = useSelector(selectProductCurrentPage);
  const payload = useSelector(selectProductPayload);

  const [paginationItems, setPaginationItems] = useState([]);

  useEffect(() => {
    const renderPaginationItems = () => {
      const items = [];
      for (let page = 1; page <= totalPages; page++) {
        items.push({ page });
      }
      setPaginationItems(items);
    };
    renderPaginationItems();
  }, [totalPages]);

  const changePage = (page) => {
    if (page === currentPage) return;

    dispatch(listRequest({ ...payload, page }));
  };

  return (
    <Container>
      {paginationItems.map((item) => {
        return (
          <PageItem
            key={item.page}
            active={item.page === currentPage}
            onClick={() => changePage(item.page)}
          >
            {item.page}
          </PageItem>
        );
      })}
    </Container>
  );
};

export default ProductPagination;
