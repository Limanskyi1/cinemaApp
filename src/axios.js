import axios from "axios";

const instance = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2'
})

instance.interceptors.request.use((config) => {
    config.headers.accept = 'application/json';
    // config.headers["X-API-KEY"] = '9218efeb-04b0-4da8-9b71-f6ec3e2228f3';
    config.headers["X-API-KEY"] = '74ba9db8-7c4a-45a1-9d5a-f5ebce69a56d';

    return config;
})

export default instance;


