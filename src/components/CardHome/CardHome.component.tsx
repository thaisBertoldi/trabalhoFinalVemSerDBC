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
      {listItens.map((item: any, index: number) => (          
        <CardItem key={index}>
          <img
            src={`data:image/jpeg;base64,${item.file}`}
            alt="imagem do iten"
          />
          <p>{item.itemName.toUpperCase()}</p>
          <p>{item.description}</p>
          <p>{item.value}</p>
        </CardItem>      
      ))}
    </div>
  );
};

export default CardHome;