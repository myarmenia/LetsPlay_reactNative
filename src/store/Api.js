import axios from 'axios'
import { Platform } from 'react-native'
// const baseURL = Platform.OS == 'ios' ? 'https://to-play.ru/' : 'http://to-play.ru/'
const baseURL = 'https://to-play.ru/'

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
