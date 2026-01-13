
import UserRow from "./UserRow";
import "./users.css"
import { useUserFilters } from "../../hooks/useUserFilters";
import { useUsers } from "../../hooks/useUsers";


export default function UsersTable() {
    const { role, name } = useUserFilters(); //Obtener los filtros actuales
    const { users } = useUsers({ role, name }); //Obtener los usuarios filtrados

    return(
        <table className="users-table">
            <thead className="table-header">
                <tr>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Role</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {users.map((user) => (
                    <UserRow key={user.id} user={user}/>
                ))}
            </tbody>
        </table>
    )
}
