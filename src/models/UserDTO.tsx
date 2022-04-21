export interface LoginDTO {
  email: string,
  password: string
}

export interface isLoggedDTO {
  username: string,
  token: string,
  profile: string
}

export interface RegisterDTO {
  user: string,
  password: string,
  confirmPassword: string,
  email: string,
}