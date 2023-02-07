import React, { useState } from 'react'
import { Platform, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '@/components/inputs/styles'
import { ICON, RED, WHITE } from '@/theme/colors'
import { font, RW } from '@/theme/utils'
import MapSvg from '@/assets/svgs/mapSvg'
import { useNavigation } from '@react-navigation/native'

function Map(props) {
  const { placeholder, data, setData, errorText, width, availablePress } = props
  const [value, setValue] = useState('')
  const navigation = useNavigation()
  return (
    <>
      <Pressable
        onPress={() => navigation.navigate('Map')}
        style={[
          styles.mapInputBlock,
          width
            ? {
                width: RW(width),
                alignSelf: 'center',
                marginLeft: 0,
                justifyContent: 'space-between',
              }
            : null,
        ]}
      >
        {!availablePress ? (
          <Text style={styles.mapInput}>{placeholder}</Text>
        ) : (
          <TextInput
            style={{ ...styles.mapInput, color: WHITE }}
            value={value}
            onChangeText={ev => {
              setValue(ev)
              setData({ ...data, addressValue: ev })
            }}
            placeholder={placeholder}
            placeholderTextColor={ICON}
          />
        )}
        <TouchableOpacity>
          <MapSvg />
        </TouchableOpacity>
      </Pressable>
      {errorText && !value ? (
        <Text style={{ ...font('regular', 16, RED, 24), marginLeft: RW(12) }}>{errorText}</Text>
      ) : null}
    </>
  )
}

export default Map
