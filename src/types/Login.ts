export type LoginPayload = {
    username: string
    password: string
}

export type LoginResponse = {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    accessToken: string
    refreshToken: string
}
