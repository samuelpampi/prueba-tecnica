import { useNavigate } from "react-router-dom";

type UseUserNavigationParams = {
    filteredIds: number[];
    filteredCount: number;
    id: string | undefined;
};

//Custom hook para manejar la navegacion entre usuarios filtrados por id
export function useUserNavigation({ filteredIds, filteredCount, id }: UseUserNavigationParams) {
    const navigate = useNavigate();
    const currentId = id ? Number(id) : null; //Id del usuario actual

    //Funcion para navegar al siguiente usuario en la lista filtrada
    const goToNextUser = (): void => {
        if (currentId === null) return;        

        const currentIndex: number = filteredIds.indexOf(currentId);

        if (currentIndex > -1 && currentIndex < filteredCount - 1) {
            console.log("Navegando al siguiente usuario");
            const nextUserId: number = filteredIds[currentIndex + 1];
            navigate(`/users/${nextUserId}`);

        } else {
            console.log("No hay siguiente usuario");
        }
    };
    
    //Funcion para navegar al usuario anterior en la lista filtrada
    const goToPreviousUser = (): void => {
        if (currentId === null) {
            return;
        }

        const currentIndex: number = filteredIds.indexOf(currentId);

        if (currentIndex > 0) {
            console.log("Navegando al usuario anterior");
            const previousUserId: number = filteredIds[currentIndex - 1];
            navigate(`/users/${previousUserId}`);

        } else {
            console.log("No hay usuario anterior");
        }
    };

    return { goToNextUser, goToPreviousUser };
}
