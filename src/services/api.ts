import axios from 'axios'

export const api = axios.create({
    baseURL: '',
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})
