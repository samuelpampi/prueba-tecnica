import type { ApiResponse, ApiUsersResponse, ApiUserResponse } from "./types";
import type { Usuario, UserDetailResult } from "../models/user";
import axios from "axios";

const API_URL = "https://dev.justnetsystems.com/pruebareact/api/";

//Peticion para obtener todos los usuarios
export async function getUsers({role, name}: {role?: string, name?: string}): Promise<Usuario[]> {
    
    const response = await axios.get<ApiResponse<ApiUsersResponse>>(API_URL + "users" , {
        params: {
            filters: {
                role_id: role,
                name: name,
            }
        }
    });

    return response.data.data.data;
}

//Peticion para obtener un usuario por su ID, y la info de navegacion
export async function getUserById(id: number): Promise<UserDetailResult> {
    
    const response = await axios.get<ApiResponse<ApiUserResponse>>(API_URL + "users/" + id);

    const data = response.data.data

    return {
        user: data.data,
        filteredIds: data.filteredIds,
        filteredCount: data.filteredCount,
    }
}


