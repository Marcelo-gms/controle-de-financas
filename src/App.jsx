// Hooks
import { useState, useEffect } from "react";

// react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Form from "./components/Form";


function App() {
  const data = localStorage.getItem("transactions");

  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIcome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIcome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""} R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) =>{
    const newArrayTransaction = [...transactionsList, transaction];

    setTransactionsList(newArrayTransaction)
    localStorage.setItem("transactions", JSON.stringify(newArrayTransaction))
  }

  return (
    <>
      <Wrapper>
        <ToastContainer />
        <Header />
        <Resume income={income} expense={expense} total={total} />
        <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
