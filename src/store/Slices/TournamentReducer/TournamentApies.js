import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '@/store/Api'

export const createTournament = createAsyncThunk('tournament/create', async (obj, {}) => {
  try {
    const data = await axiosInstance.post('api/tourney/', obj)
    console.log(data, 'data')
    return data
  } catch (error) {
    console.error('Error: creating tournament', err.request?._response)
  }
  // axiosInstance
  //     .post('api/tourney/', data)
  //     .then((response) => {
  //         console.log(response, 'response');
  //         // setModalVisible(true)
  //     })
  //     .catch((err) => {
  //         // setModalVisible('error')
  //         console.error('Error: creating tournament', err.request?._response)
  //     })
})

// (data, setModalVisible) => (dispatch) => {
//     axiosInstance
//         .post('api/tourney/', data)
//         .then((response) => {
//             setModalVisible(true)
//         })
//         .catch((err) => {
//             setModalVisible('error')
//             console.error('Error: creating tournament', err.request?._response)
//         })
// }

// export const searchTourney = (data, nav, setNotFoundError) => async (dispatch) => {
//     axiosInstance
//         .get('api/tourney', {
//             params: data,
//         })

//         .then((response) => {
//             dispatch(setFindedTouney(response?.data?.datas))
//             if (response?.data?.datas.length) {
//                 console.log('response?.data?.datas.length', response?.data?.datas.length)
//                 setNotFoundError(false)
//                 nav.navigate('AllTournaments')
//             } else {
//                 setNotFoundError(true)
//             }

//             return response?.data?.datas
//         })
//         .catch((err) => {
//             console.error('Error: searching players in this team :', err.request._response)
//         })
// }
