import axios from "axios";

const base = axios.create(
    {
        baseURL: "http://to-play.ru",
        headers: {
            'Content-Type': 'application/json',
        },
    }
)

export default base;
