import { useEffect, useState } from "react";
import { ENDPOINT_TOPICS } from "../../constants";
import api from "../../service/api";
import { CardItem } from "./CardHome.style";

const CardHome = ({ id }: any) => {
  const [listItens, setListItens] = useState<any>([]);

  const getItensTopic = async (id: number) => {
    try {
      const { data } = await api.get(
        `${ENDPOINT_TOPICS.GET_ITEMS_TOPIC}/${id}`
      );
      setListItens(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItensTopic(id);
  }, []);

  return (
    <div>
      {listItens.length > 0 ? (
        <CardItem>
          <img
            src={`data:image/jpeg;base64,${listItens[0].file}`}
            alt="imagem do item"
          />
          <p>{listItens[0].itemName.toUpperCase()}</p>
          <p>{listItens[0].value}</p>
          <p>{listItens[0].description}</p>
        </CardItem>
      ) : (
        <h2>Não há itens cadastrados.</h2>
      )}
    </div>
  );
};

export default CardHome;
