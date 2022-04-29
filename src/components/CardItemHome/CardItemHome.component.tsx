import { useEffect, useState } from "react";
import { getItensTopic } from "../../store/action/topicActions";
import {
  CardItem,
  CardItemInfos,
  CardItemValueName,
  Desc,
  SpanMoreItens,
} from "./CardItemHome.style";
import loadingImg from '../../images/loading.gif'
import { CardItemHomeProps } from "../../models/TopicDTO";
import { ItensInTopicDTO } from "../../models/ModalsDTO";
import { LoadingItem } from "../../global.style";

const CardItemHome = ({ id }: CardItemHomeProps) => {
  const [listItens, setListItens] = useState<Array<ItensInTopicDTO>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItensTopic(id, setListItens, setLoading);
  }, []);

  return (
    <div>
      {listItens.length > 0 ? (
        <>
        <CardItem>
          <img
            src={`data:image;base64,${listItens[0].file}`}
            alt="imagem do item"
          />
          <CardItemInfos>
            <CardItemValueName>
              <p>Nome: {listItens[0].itemName.toUpperCase()}</p>
              <strong><p>R$ {listItens[0].value}</p></strong>
            </CardItemValueName>
            <Desc>{listItens[0].description}</Desc>
          </CardItemInfos>
        </CardItem>
        {listItens.length > 1 ? (
          <SpanMoreItens>E mais {listItens.length - 1}</SpanMoreItens>
        ) : (
          <SpanMoreItens></SpanMoreItens>
        )}
        </>
      ) : (
        <>
          {loading ? (
            <LoadingItem>
              <img src={loadingImg} alt="carregando informações"/>
              <SpanMoreItens></SpanMoreItens>
            </LoadingItem>
          ) : (
            <>
            <CardItem>
              <h2>Não há itens cadastrados.</h2>
            </CardItem>
              <SpanMoreItens></SpanMoreItens>
              </>
          )}
        </>
      )}
    </div>
  );
};

export default CardItemHome;