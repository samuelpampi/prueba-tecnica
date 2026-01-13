import "../components//users/users.css"
import type { UserDetailResult, Usuario } from "../models/user";
import type { Role } from "../models/role";
import { useEffect, useState } from "react";
import { getUserById } from "../api/users-api";
import { useNavigate, useParams } from "react-router-dom";
import { getNameParts } from "../utils/separateNameParts";
import { getRoles } from "../api/roles-api";
import Button from "../components/ui/Button";
import UserForm from "../components/users/UserForm";

export default function UserDetail(){
    const [user, setUser] = useState<Usuario | null>(null);
    const [filteredIds, setFilteredIds] = useState<number[]>([]);
    const [filteredCount, setFilteredCount] = useState<number>(0);
    const [roles, setRoles] = useState<Role[]>([]);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const cargarUsuario = async() => {
            if (id) {
                const {user, filteredIds, filteredCount}: UserDetailResult = await getUserById(Number(id));

                console.log("Usuario cargado:", user);
                setFilteredIds(filteredIds);
                setFilteredCount(filteredCount);

                //Desestructuramos el nombre y apellido del usuario
                const { name, surname }:{ name: string, surname: string } = user ? getNameParts(user.name) : { name: "", surname: "" }
                const usuario = {
                    ...user,
                    name,
                    surname,
                }

                setUser(usuario);
            }
        }

        const cargarRoles = async() => {
            const roles: Role[] = await getRoles();
            console.log("Roles cargados:", roles);
            setRoles(roles);
        }

        cargarUsuario();
        cargarRoles();
    }, [id]);


    function goToNextUser(){
            const currentIndex : number = filteredIds.indexOf(Number(id));
            if (currentIndex < filteredCount - 1) {
                console.log("Navegando al siguiente usuario");
                const nextUserId : number = filteredIds[currentIndex + 1];
                navigate(`/${nextUserId}`);
                
            } else{
                console.log("No hay siguiente usuario");
            }
    }

    function goToPreviousUser(){
        const currentIndex : number = filteredIds.indexOf(Number(id));
        if (currentIndex > 0) {
            console.log("Navegando al usuario anterior");
            const previousUserId : number = filteredIds[currentIndex - 1];
            navigate(`/${previousUserId}`);
        } else{
            console.log("No hay usuario anterior");
        }
    }


    return(
        <section className="user-detail-section">
            <div className="navigate-users">
                <Button label="Anterior" onClick={goToPreviousUser} />
                <Button label="Siguiente" onClick={goToNextUser} />
            </div>
            
            <h2>Detalle de Usuario</h2>
            <div className="user-data">
                {user && (
                    <UserForm user={user} roles={roles} setUser={setUser}/>
                )}
            </div>
        </section>
    )
}