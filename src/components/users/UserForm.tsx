import type { Usuario } from "../../models/user";
import type { Role } from "../../models/role";
import "./users.css"

interface UserFormProps {
    user: Usuario;
    roles: Role[];
    setUser: React.Dispatch<React.SetStateAction<Usuario | null>>;
}

export default function UserForm({ user, roles, setUser }: UserFormProps) {

    // Manejador genérico para cambios en los campos del formulario
    const handleChange = (field: keyof Usuario) => (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const value = field === "role_id" ? Number(event.target.value) : event.target.value;
        setUser(prev => (prev ? { ...prev, [field]: value } : prev));
    };

    return(
        <form className="user-form" action="#">
            <label htmlFor="user-name">Nombre</label>
            <input
                id="user-name"
                type="text"
                value={user.name}
                onChange={handleChange("name")}
            />

            <label htmlFor="user-surname">Apellido</label>
            <input
                id="user-surname"
                type="text"
                value={user.surname}
                onChange={handleChange("surname")}
            />

            <label htmlFor="user-role">Role</label>

            {/* Select de roles */}
            <select
                name="user-role"
                id="user-role"
                value={user.role_id}
                onChange={handleChange("role_id")}
            >
                {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                        {role.name}
                    </option>
                ))}
            </select>

            <button className="save-button" type="submit">Save</button>
        </form>
    );
}
