import { useSearchParams } from "react-router-dom";

type FilterKey = "role" | "name";

//Custom hook para manejar los filtros de usuario mediante los parametros de la URL
export function useUserFilters() {
    const [searchParams, setSearchParams] = useSearchParams();

    //Obtenemos los valores actuales de los filtros desde los parametros de la URL
    const role = searchParams.get("role") ?? "";
    const name = searchParams.get("name") ?? "";

    //Funcion para actualizar un parametro de filtro en la URL
    const updateParam = (key: FilterKey, value: string): void => {
        setSearchParams((params) => {
            const next = new URLSearchParams(params);

            if (value) {
                next.set(key, value);
            } else {
                next.delete(key);
            }

            return next;
        });
    };

    //Funciones para actualizar los filtros
    const setRole = (value: string): void => {
        updateParam("role", value);
    };

    const setName = (value: string): void => {
        updateParam("name", value);
    };

    return { role, name, setRole, setName };
}
