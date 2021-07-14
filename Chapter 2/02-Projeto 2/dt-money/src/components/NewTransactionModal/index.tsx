import Modal from "react-modal";
import { Container, TransactionContainer, ButtonType } from "./styles";
import close from "../../assets/close.svg";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import { FormEvent, useContext, useState } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [transactionType, setTransactionType] = useState("entrada");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const {createTransaction} = useContext(TransactionsContext);

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
   await createTransaction({
      title,
      transactionType,
      amount,
      category
    })
    setTitle('');
    setAmount(0);
    setCategory('')
    setTransactionType('entrada')
    
    onRequestClose();
  }

  return (
    <Modal
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={close} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <TransactionContainer>
          <ButtonType
            type="button"
            isActive={transactionType === "entrada"}
            activeColor="green"
            onClick={() => {
              setTransactionType("entrada");
            }}
          >
            <img src={income} alt="Entrada" />
            <span>Entrada</span>
          </ButtonType>
          <ButtonType
            type="button"
            isActive={transactionType === "saida"}
            activeColor="red"
            onClick={() => {
              setTransactionType("saida");
            }}
          >
            <img src={outcome} alt="Saida" />
            <span>Saída</span>
          </ButtonType>
        </TransactionContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
