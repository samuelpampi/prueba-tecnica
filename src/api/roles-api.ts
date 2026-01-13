import type { ApiResponse, ApiRolesResponse } from "./types";
import type { Role } from "../models/role";
import axios from "axios";

const API_URL = "https://dev.justnetsystems.com/pruebareact/api/";

//Peticion para obtener todos los roles (infinity)
export async function getRoles(): Promise<Role[]> {
  const response = await axios.get<ApiResponse<ApiRolesResponse>>(API_URL + "roles/infinity/");

  return response.data.data.data;
}
