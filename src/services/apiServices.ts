import { api } from '@/services/api'
import { LoginResponse, LoginPayload } from '@/types/Login'

async function postLogin({ username, password }: LoginPayload): Promise<LoginResponse> {
    const { data } = await api.post<LoginResponse>('api/login', {
        username,
        password,
    })

    return data
}

export default postLogin
