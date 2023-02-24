// components
import GridItem from "../GridItem";

// toasti
import { toast } from "react-toastify";

// styles
import * as C from "./styles";

const Grid = ({ itens, setItens }) => {
  const onDelete = (id) => {
    const newArray = itens.filter((transaction) => transaction.id !== id);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
    toast.success("ITEM DELETADO!");
  };
  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}> Descrição</C.Th>
          <C.Th width={40}> Valor</C.Th>
          <C.Th width={10} alignCenter>
            {" "}
            Tipo
          </C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;
