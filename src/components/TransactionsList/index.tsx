import { useContext, useState } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "../../pages/Transactions/components/SearchForm";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { Loading } from "../Loading";
import { Pagination } from "../Pagination";
import {
  PriceHighlight,
  TransactionsListContainer,
  TransactionsTable,
} from "./styles";

export function TransctionsList() {
  const { transactions, loading } = useContext(TransactionsContext);
  return (
    <TransactionsListContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <SearchForm />

          <TransactionsTable>
            <tbody>
              {transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighlight variant={transaction.type}>
                        {transaction.type === "outcome" && "-·"}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </TransactionsTable>
          <Pagination />
        </>
      )}
    </TransactionsListContainer>
  );
}
