import React, { useState } from 'react'
import { TextInput } from 'react-native'
import styles from './styles'
import { ICON } from '@/theme/colors'
import { RW } from '@/theme/utils'
import { useDispatch } from 'react-redux'
import {
  setAge_restrictions_from,
  setAge_restrictions_to,
  setNumber_of_players_from,
  setNumber_of_players_to,
} from '@/store/Slices/GameCreatingSlice'

const Count = props => {
  const { placeholder, width, type, countType } = props
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  // game: {
  //   start_date: '',
  //   number_of_players_from: 0,
  //   number_of_players_to: 0,
  //   age_restrictions_from: 0,
  //   age_restrictions_to: 0,
  //   players_gender: '',
  //   latitude: 0,
  //   longitude: 0,
  //   end_date: '',
  //   organizer_in_the_game: true,
  //   ticket_price: 0,
  //   game: '',
  // },
  return (
    <>
      <TextInput
        value={value}
        onChangeText={number => {
          setValue(number)
          if (type === 'player') {
            countType === 'from'
              ? dispatch(setNumber_of_players_from(number))
              : dispatch(setNumber_of_players_to(number))
          } else if (type === 'age') {
            countType === 'from'
              ? dispatch(setAge_restrictions_from(number))
              : dispatch(setAge_restrictions_to(number))
          }
        }}
        keyboardType={'numeric'}
        style={{ ...styles.countInput, width: width || RW(124) }}
        placeholder={placeholder}
        placeholderTextColor={ICON}
      />
    </>
  )
}

export default Count
