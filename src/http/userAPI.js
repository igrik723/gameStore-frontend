import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (email, password) => {
    const { data } = await $host.post('api/user/registration', { email, password, role: 'USER' })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', { email, password })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const { data } = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const newBalance = async (userId, amount) => {
    const { data } = await $authHost.put('api/user/balance/' + userId, { amount: amount })
    return data
}

export const fetchUserInfo = async (userId) => {
    const { data } = await $authHost.get('api/user/getUserInfo/' + userId)
    return data
}




