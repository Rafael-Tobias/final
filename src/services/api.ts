import axios from "axios";
const api = axios.create({
    baseURL: "https://laravelweb2022.herokuapp.com/api",
    headers: {
        Accept: 'application/json',
    }
})
export default api;