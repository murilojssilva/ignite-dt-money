import { CaretLeft, CaretRight } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import {
  PaginationContainer,
  PaginationItem,
  PaginationContent,
} from "./styles";

export function Pagination() {
  const { currentPage, setCurrentPage, pages } =
    useContext(TransactionsContext);

  return (
    <PaginationContainer>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem onClick={() => setCurrentPage(currentPage - 1)}>
            <CaretLeft />
          </PaginationItem>
        )}
        {pages.map((page) => {
          return (
            (page === currentPage ||
              page === currentPage + 1 ||
              page === currentPage - 1) && (
              <PaginationItem
                isSelected={page === currentPage}
                key={page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </PaginationItem>
            )
          );
        })}
        {currentPage < pages.length && (
          <PaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
            <CaretRight />
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationContainer>
  );
}
