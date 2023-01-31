import axios from 'axios'
const baseURL = 'http://to-play.ru/'

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  data: {
    email: 'arsenrustamyan@mail.ru',
    name: 'Arsen',
    surname: 'Rustamyan',
  },
})

export default axiosInstance
