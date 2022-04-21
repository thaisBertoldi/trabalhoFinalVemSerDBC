export interface LoginDTO {
  email: string;
  password: string;
}

export interface isLoggedDTO {
  username: string;
  fullName: string;
  token: string;
  profile: string;
  isLogged: boolean;
  profileImage: string;
}

export interface RegisterDTO {
  user: string;
  password: string;
  confirmPassword: string;
  email: string;
}

