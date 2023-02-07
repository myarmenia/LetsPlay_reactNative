import axios from 'axios'
import { Platform } from 'react-native'
const baseURL = Platform.OS == 'ios' ? 'https://to-play.ru/' : 'http://to-play.ru/'

const axiosInstance = axios.create({
  baseURL,
  headers: {
    accept: '*/*',
    'Content-Type': 'application/json; charset=utf-8',
  },
})

export default axiosInstance
