// hooks
import { useState } from "react";

// toastify
import { toast } from "react-toastify";
// Components
import Grid from "../Grid";

import * as C from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const generateId = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      toast.warning("INFORME A DESCRIÇÃO E O VALOR!");
      return;
    }
    if (amount < 1) {
      toast.warning("O VALOR NÃO PODE SER MENOR QUE 1!");
      return;
    }

    const transaction = {
      id: generateId(),
      desc,
      amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");

    toast.success("Operação Salva!");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição:</C.Label>
          <C.Input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor:</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setIsExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>

          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setIsExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>Adicionar</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
