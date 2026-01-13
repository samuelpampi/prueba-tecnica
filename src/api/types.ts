import type { Usuario } from "../models/user";
import type { Role } from "../models/role";

export interface ApiUsersResponse {
  data: Usuario[]
  page: number
  nextPage: number | null
  totalRecords: number
  totalPages: number
  totalWithoutFilter: number
}

export interface ApiUserResponse {
    data: Usuario
    allCount: number
    filteredCount: number
    filteredIds: number[]
}

export interface ApiResponse<T> {
  data: T
}

export interface ApiRolesResponse {
  data: Role[]
  page: number
  nextPage: number | null
  totalRecords: number
  totalPages: number
  totalWithoutFilter?: number
}
