import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}

export const createPublisher = async (publisher) => {
    const { data } = await $authHost.post('api/publisher', publisher)
    return data
}

export const fetchPublishers = async () => {
    const { data } = await $host.get('api/publisher')
    return data
}

export const createGame = async (game) => {
    const { data } = await $authHost.post('api/game', game)
    return data
}

export const fetchGames = async (typeId, publisherId, page, limit) => {
    const { data } = await $host.get('api/game', {params: {
        typeId, publisherId, page, limit
    }})
    return data
}

export const fetchOneGame = async (id) => {
    const { data } = await $host.get('api/game/' + id)
    return data
}