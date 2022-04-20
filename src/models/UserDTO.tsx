export interface LoginDTO {
    user: string,
    password: string
}

export interface RegisterDTO {
    user: string,
    password: string,
    photo: string,
    type: string,
    email: string,
}