import axios from "axios";
import Config from "./config";

const http = (headers?:any) => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const access_token = 'Bearer ' + user?.token;

    return axios.create({
        baseURL: Config.REACT_BASE_URL,
        timeout: Config.Timeout,
        headers: {
            ...headers,
            authorization: access_token
        }
    })
}

export default http;