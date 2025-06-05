import axios from "axios"

const BASE_URL = "https://localhost:8801/api/v1";

export const userRequest = axios.create({
    baseUrl: BASE_URL
})