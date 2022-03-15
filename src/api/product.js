import instance from "./instance";

export const getAll = () => {
    const url = "/api/products";
    return instance.get(url)
}

export const create = (data) => {
    const url = "/api/products";
    return instance.post(url, data)
}