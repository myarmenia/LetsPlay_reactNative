import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    address: null,
    longitude: null,
    latitude: null,
}
export const AddressSlice = createSlice({
    name: 'addressSlice',
    initialState,
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload.address
            state.latitude = action.payload.latitude
            state.longitude = action.payload.longitude
        },
        changeAddressName: (state, action) => {
            state.address = action.payload
            state.longitude = null
            state.latitude = null
        },
        resetAddress: (state) => {
            state.address = null
            state.longitude = null
            state.latitude = null
        },
    },
})

export const {
    setAddress,
    resetAddress,
    changeAddressName
} = AddressSlice.actions
export default AddressSlice.reducer
