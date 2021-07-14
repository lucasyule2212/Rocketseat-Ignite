import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface TransactionsContextData {
  transactions: TransactionsType[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

interface TransactionsType {
  id: number;
  title: string;
  amount: number;
  category: string;
  transactionType: string;
  createdAt: string;
}

type TransactionInput = Omit<TransactionsType, "id" | "createdAt">;

interface TransactionsContextProps {
  children: ReactNode;
}
export function TransactionsProvider(props: TransactionsContextProps) {
  const [transactions, setTransactions] = useState<TransactionsType[]>([]);
  useEffect(() => {
    api.get("/transactions").then((response) => {
      console.log(response.data);

      setTransactions(response.data.transactions);
    });
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }
  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {props.children}
    </TransactionsContext.Provider>
  );
}
