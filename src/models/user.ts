export interface Usuario {
  id: number;
  name: string;
  surname: string;
  email: string;
  role_id: number;
  role_name: string;
}

export interface UserDetailResult {
  user: Usuario
  filteredIds: number[]
  filteredCount: number
}