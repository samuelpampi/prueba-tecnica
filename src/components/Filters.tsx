import type { Role } from "../models/role";
import "./filter.css"
import { useUserFilters } from "../hooks/useUserFilters";

type FiltersProps = {
    roles: Role[];
};

export default function Filters({ roles }: FiltersProps) {
    const { role, name, setRole, setName } = useUserFilters();

    // Manejadores de cambio para los filtros
    const onRoleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setRole(e.target.value);
    }

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value);
    }

    return(
        <div className="filters-section">
            <h2 className="title2">Filtros</h2>

            <div className="filters-container">

                {/* Filtro para roles */}
                <div className="filter-item">
                    <label htmlFor="role">Role:</label>
                    <select id="role" name="role" value={role} onChange={onRoleChange}>
                        <option value="">Todos</option>
                        {roles.map((role: Role) => (
                            <option key={role.id} value={String(role.id)}>
                                {role.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Filtro para nombre */}
                <div className="filter-item">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" value={name} placeholder="Buscar por nombre" onChange={onNameChange}/>
                </div>
            </div>
        </div>
    );
}
