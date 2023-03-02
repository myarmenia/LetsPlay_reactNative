import { IS_IOS } from '@/constants'
import { getAsyncStorage } from '@/helpers/asyncStore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const baseURL = IS_IOS ? 'https://to-play.ru/' : 'http://to-play.ru/'

const axiosInstance = axios.create()
axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token')
    if (typeof token == 'string') {
      config.headers.Authorization = 'Bearer ' + token
    }
    config.headers.Accept = '*/*'
    config.headers['Content-Type'] = 'application/json; charset=utf-8'
    config.baseURL = baseURL
    return config
  },
  error => {
    console.log('axiosInstance error', error)
    return Promise.reject(error)
  },
)

export const getDefualtHeaders = async () => {
  const token = await getAsyncStorage('token')
  console.log(token)
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}
export default axiosInstance
