import UsersTable from "../components/users/UsersTable"
import Filters from "../components/Filters"
import { useEffect, useState } from "react";
import type { Role } from "../models/role";
import { getRoles } from "../api/roles-api";
import "../components/users/users.css"

export default function Users(){

    const [roles, setRoles] = useState<Role[]>([]);

    useEffect(() => {
        const cargarRoles = async() => {
            const roles: Role[] = await getRoles();
            console.log("Roles cargados:", roles);
            setRoles(roles);
        }

        cargarRoles();
    }, []);

    return(
        <section className="users-section">
            <Filters roles={roles} />
            <h2 className="title2">Usuarios</h2>
            <UsersTable/>
        </section>
    )
}