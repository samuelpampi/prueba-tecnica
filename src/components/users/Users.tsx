import UsersTable from "./UsersTable";
import "./users.css"

export default function Users(){
    return(
        <section className="users-section">
            <h2 className="title2">Usuarios</h2>
            <UsersTable/>
        </section>
    )
}