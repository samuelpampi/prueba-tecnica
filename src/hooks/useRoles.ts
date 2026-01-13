import { useEffect, useState } from "react";
import type { Role } from "../models/role";
import { getRoles } from "../api/roles-api";

//Custom hook para obtener los roles
export function useRoles() {
    const [roles, setRoles] = useState<Role[]>([]);

    useEffect(() => {
        const cargarRoles = async (): Promise<void> => {
            const rolesResponse = await getRoles();
            console.log("Roles cargados:", rolesResponse);
            setRoles(rolesResponse);
        };

        cargarRoles();
    }, []);

    return { roles };
}
