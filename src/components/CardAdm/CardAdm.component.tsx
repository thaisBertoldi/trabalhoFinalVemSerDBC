import { CardAdmDTO } from "../../models/CardAdmDTO";
import { DefaultImage } from "../../constants";
import { TypeUserEnum } from "../../enums/TypeUserEnum";
import {
  BtnAdm,
  DivImage,
  DataUser,
  ImageUser,
  CardUSerAdmin,
} from "./CardAdm.style";

const CardAdm = ({imgUser, fullName, group, formik}: CardAdmDTO) => {

  return (
    <div>
      <CardUSerAdmin>
        <DataUser>
          <DivImage>
            <ImageUser
              src={`data:image;base64,${ imgUser ?? DefaultImage}`}
              alt="imagem de perfil"
            />
          </DivImage>

          <p>
            <strong>Usuário:</strong> {fullName}
          </p>
          <p>
            <strong>Perfil:</strong> {TypeUserEnum[group]}
          </p>
        </DataUser>
          <select name="type" onChange={formik.handleChange}>
            <option value="COLLABORATOR">Colaborador</option>
            <option value="ADMINISTRATOR">Administrador</option>
            <option value="BUYER">Comprador</option>
            <option value="MANAGER">Gestor</option>
            <option value="FINANCIER">Financeiro</option>
          </select>
        <BtnAdm
          width={"200px"}
          background={"#C5C5C5"}
          color={"#202124"}
          type="submit"
        >
          Alterar perfil do usuário
        </BtnAdm>
      </CardUSerAdmin>
    </div>
  );
}

export default CardAdm;