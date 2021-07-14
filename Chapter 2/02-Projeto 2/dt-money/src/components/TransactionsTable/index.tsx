import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

interface TransactionsType {
  id: number;
  title: string;
  amount: number;
  category: string;
  transactionType: string;
  createdAt: string;
}
export function TransactionsTable() {
  const [transactions, setTransactions] = useState<TransactionsType[]>([]);
  useEffect(() => {
    api.get("/transactions").then((response) => {
      console.log(response.data);

      setTransactions(response.data.transactions);
    });
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.transactionType}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}