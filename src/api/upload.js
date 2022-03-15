import instance from "./instance";

export const upload = (data) => {
    const url = "api/upload";
    return instance.post(url, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}