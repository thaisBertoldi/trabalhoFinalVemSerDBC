import { useEffect, useState } from "react";
import loadingImg from '../../images/loading.gif'
import { getItensTopic } from "../../store/action/topicActions";
import {
  Desc,
  CardItem,
  SpanMoreItens,
  CardItemInfos,
  CardItemValueName,
} from "./CardItemHome.style";
import { LoadingItem } from "../../global.style";
<<<<<<< HEAD
import { ItensInTopicDTO } from "../../models/ModalsDTO";
import { CardItemHomeProps } from "../../models/TopicDTO";
=======
import { maskMoneyHTML } from "../../utils/utils";
>>>>>>> 3b1981c1a5c17d2191912e2d46ffdb68c85bc18e

const CardItemHome = ({ id }: CardItemHomeProps) => {
  const [listItens, setListItens] = useState<Array<ItensInTopicDTO>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItensTopic(id, setListItens, setLoading);
  }, []);

  return (
    <div>
      {listItens.length ? (
        <>
        <CardItem>
          <img
            src={`data:image;base64,${listItens[0].file}`}
            alt="imagem do item"
          />
          <CardItemInfos>
            <CardItemValueName>
              <p>Nome: {listItens[0].itemName.toUpperCase()}</p>
              <strong><p>{ maskMoneyHTML(listItens[0].value)}</p></strong>
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