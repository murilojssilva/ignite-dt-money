import React, { useEffect, useState, createContext, ReactNode } from "react";
import { array } from "zod";

import { api } from "../lib/axios";

interface ITransactionProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

interface ICreateTransactionInputProps {
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
}

interface ITransactionContextProps {
  transactions: ITransactionProps[];
  createTransaction: (data: ICreateTransactionInputProps) => Promise<void>;
  limitForPage: number;
  pages: number[];
  currentPage: number;
  loading: boolean;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const TransactionsContext = createContext(
  {} as ITransactionContextProps
);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactionProps[]>([]);
  const [pages, setPages] = useState<number[]>([]);
  const limitForPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  async function fetchTransactions(query?: string) {
    setLoading(true);
    const response = await api.get("/transactions");

    const totalPages = await Math.ceil(response.data.length / limitForPage);

    const arrayPages = [];
    for (let i = 1; i <= totalPages; i++) {
      arrayPages.push(i);
    }
    setPages(arrayPages);

    const newResponse = await api.get(`/transactions`, {
      params: {
        q: query,
        _sort: "createdAt",
        _order: "desc",
        _page: currentPage,
        _limit: limitForPage,
      },
    });
    setTransactions(newResponse.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchTransactions();
  }, [currentPage]);

  async function createTransaction(data: ICreateTransactionInputProps) {
    const { description, price, category, type } = data;
    const response = await api.post("/transactions", {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
        limitForPage,
        pages,
        currentPage,
        setCurrentPage,
        loading,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
