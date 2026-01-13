
import { useEffect, useState } from "react";
import UserRow from "./UserRow";
import { getUsers } from "../../api/users-api";
import type { Usuario } from "../../models/user";
import "./users.css"
import { useSearchParams } from "react-router-dom";


export default function UsersTable() {
    const [users, setUsers] = useState<Usuario[]>([])
    const [searchParams] = useSearchParams()

    //Parametros de busqueda
    const role = searchParams.get("role") ?? ""
    const name = searchParams.get("name") ?? ""

    //Cargamos los usuarios al montar el componente
    useEffect(() => {
        const cargarUsuarios = async () => {
        const usuarios = await getUsers({
            role: role || undefined,
            name: name || undefined,
            });

        setUsers(usuarios)
        }

        cargarUsuarios()
    }, [role, name]);

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