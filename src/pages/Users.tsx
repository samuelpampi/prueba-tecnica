import UsersTable from "../components/users/UsersTable";
import Filters from "../components/Filters";
import { useRoles } from "../hooks/useRoles";
import "../components/users/users.css";

export default function Users() {
    const { roles } = useRoles();

    return(
        <section className="users-section">
            <Filters roles={roles} />
            <h2 className="title2">Usuarios</h2>
            <UsersTable/>
        </section>
    )
}
