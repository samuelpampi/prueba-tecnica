import type { Role } from "../models/role";
import { useSearchParams } from "react-router-dom"
import "./filter.css"

export default function Filters({roles}: {roles: Role[]}){
    const [searchParams, setSearchParams] = useSearchParams()

    const roleValue = searchParams.get("role") ?? ""
    const nameValue = searchParams.get("name") ?? ""

    const updateParam = (key: "role" | "name", value: string) => {
        setSearchParams(params => {
            const next = new URLSearchParams(params);

            if (value) {
                next.set(key, value);
            } else {
                next.delete(key);
            }

            return next;
        });
    }

    const onRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        updateParam("role", e.target.value);
    }

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateParam("name", e.target.value);
    }

    return(
        <div className="filters-section">
            <h2 className="title2">Filtros</h2>

            <div className="filters-container">

                {/* Filtro para roles */}
                <div className="filter-item">
                    <label htmlFor="role">Role:</label>
                    <select id="role" name="role" value={roleValue} onChange={onRoleChange}>
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
                    <input type="text" id="name" name="name" value={nameValue} placeholder="Buscar por nombre" onChange={onNameChange}/>
                </div>
            </div>
        </div>
    );
}
