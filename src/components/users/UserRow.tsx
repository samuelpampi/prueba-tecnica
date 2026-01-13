import "./users.css"
import { Link } from "react-router-dom";
import type { Usuario } from "../../models/user";
import { getNameParts } from "../../utils/separateNameParts";

//DEvolvemos una fila de la tabla para cada usuario
export default function UserRow({user}: {user: Usuario}) {

    const { name, surname }: { name: string; surname: string } = getNameParts(user.name);
    
    return(
        <tr>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{user.role_name}</td>
            <td>
                <Link to={`/${user.id}`} className="view-user-detail">Ver detalles</Link>
            </td>
        </tr>
    )
}