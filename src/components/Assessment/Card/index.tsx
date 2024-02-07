import { Rating } from "@mui/material";
import IProfessional from "../../../types/IProfessional";

function Card({ profissional }: { profissional: IProfessional }) {
  return (
    <div>
      <ul>
        <li>
          <img
            src={profissional.imagem}
            alt={`Foto de perfil do profissional ${profissional.nome}`}
          />
        </li>
        <li>
          <p>{profissional.nome}</p>
          <p>{profissional.especialidade}</p>
        </li>
        <li>
          <Rating
            name="simple-controlled"
            value={profissional.nota}
            readOnly={true}
          />
        </li>
      </ul>
    </div>
  );
}

export default Card;
