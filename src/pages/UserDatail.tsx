import "../components//users/users.css"
import { useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import UserForm from "../components/users/UserForm";
import { useRoles } from "../hooks/useRoles";
import { useUserDetail } from "../hooks/useUserDetail";
import { useUserNavigation } from "../hooks/useUserNavigation";

export default function UserDetail(){
    const { id } = useParams<{ id: string }>();
    const { roles } = useRoles();
    const { user, setUser, filteredIds, filteredCount } = useUserDetail(id);
    const { goToNextUser, goToPreviousUser } = useUserNavigation({
        filteredIds,
        filteredCount,
        id,
    });


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
