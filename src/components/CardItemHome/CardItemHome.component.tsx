import { useEffect, useState } from "react";
import { getItensTopic } from "../../store/action/topicActions";
import {
  CardItem,
  CardItemInfos,
  CardItemValueName,
  LoadingItem,
} from "./CardItemHome.style";
import loadingImg from '../../images/loading.gif'
import { CardItemHomeProps } from "../../models/TopicDTO";
import { ItensInTopicDTO } from "../../models/ModalsDTO";

const CardItemHome = ({ id }: CardItemHomeProps) => {
  const [listItens, setListItens] = useState<Array<ItensInTopicDTO>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItensTopic(id, setListItens, setLoading);
  }, []);

  return (
    <div>
      {listItens.length > 0 ? (
        <CardItem>
          <img
            src={`data:image/jpeg;base64,${listItens[0].file}`}
            alt="imagem do item"
          />
          <CardItemInfos>
            <CardItemValueName>
              <p>Nome: {listItens[0].itemName.toUpperCase()}</p>
              <p>R$ {listItens[0].value}</p>
            </CardItemValueName>
            <p>{listItens[0].description}</p>
          </CardItemInfos>
        </CardItem>
      ) : (
        <>
          {loading ? (
            <LoadingItem>
              <img src={loadingImg} alt="carregando informações"/>
            </LoadingItem>
          ) : (
            <CardItem>
              <h2>Não há itens cadastrados.</h2>
            </CardItem>
          )}
        </>
      )}
    </div>
  );
};

export default CardItemHome;