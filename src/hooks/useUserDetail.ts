import { useEffect, useState } from "react";
import type { UserDetailResult, Usuario } from "../models/user";
import { getUserById } from "../api/users-api";
import { getNameParts } from "../utils/separateNameParts";

//Custom hook para obtener el detalle de un usuario por su ID, incluyendo la info de navegacion y estado
export function useUserDetail(id: string | undefined) {
    const [user, setUser] = useState<Usuario | null>(null);
    const [filteredIds, setFilteredIds] = useState<number[]>([]);
    const [filteredCount, setFilteredCount] = useState<number>(0);

    useEffect(() => {
        const cargarUsuario = async () => {
            if (!id) return;

            //Obetenemos los datos de la api
            const { user, filteredIds, filteredCount }: UserDetailResult = await getUserById(Number(id));             
            console.log("Usuario cargado:", user);

            setFilteredIds(filteredIds);
            setFilteredCount(filteredCount);

            //Separamos el nombre y apellido si hay usuario
            const { name, surname }: { name: string; surname: string } = user ? getNameParts(user.name) : { name: "", surname: "" };

            //Actualizamos el estado del usuario con nombre y apellido separados
            const usuario = {
                ...user,
                name,
                surname,
            };

            setUser(usuario);
        };

        cargarUsuario();
    }, [id]);

    return { user, setUser, filteredIds, filteredCount };
}
