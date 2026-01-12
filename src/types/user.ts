export type UserRole = 'reviewer' | 'moderator' | 'admin'

export interface User {
  id: string
  name: string
  role: UserRole
}
