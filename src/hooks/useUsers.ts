import { useEffect, useState } from "react";
import type { Usuario } from "../models/user";
import { getUsers } from "../api/users-api";

type UseUsersParams = {
    role?: string;
    name?: string;
};

//Custom hook para obtener los usuarios segun los filtros dados
export function useUsers({ role, name }: UseUsersParams) {
    const [users, setUsers] = useState<Usuario[]>([]);

    useEffect(() => {
        const cargarUsuarios = async (): Promise<void> => {
            const usuarios = await getUsers({
                role: role || undefined,
                name: name || undefined,
            });

            setUsers(usuarios);
        };

        cargarUsuarios();
    }, [role, name]);

    return { users };
}
