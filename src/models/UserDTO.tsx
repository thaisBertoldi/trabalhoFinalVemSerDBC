export interface LoginDTO {
  email: string;
  password: string;
}

export interface isLoggedDTO {
  auth: {
    username: string;
    fullName: string;
    token: string;
    profile: string;
    isLogged: boolean;
    profileImage?: string;
  };
}
export interface RegisterDTO {
  username: string;
  fullName: string;
  password: string;
  profileImage?: any;
  confirmPassword?: string;
}

export interface PurshaceDTO {
  auth: {
    listName: string;
    itemName: string;
    description: string;
    price: number;
    file: File;
  };
}
