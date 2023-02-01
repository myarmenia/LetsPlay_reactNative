import React, { useState } from 'react'
import { Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '@/components/inputs/styles'
import {ICON, RED, WHITE} from '@/theme/colors'
import { font, RW } from '@/theme/utils'
import MapSvg from '@/assets/svgs/mapSvg'
import SearchSvg from "@/assets/svgs/searchSvg";

function Map(props) {
  const [value, setValue] = useState('')
    const {width} = props
  return (
    <>
      <View
        style={[
          styles.mapInputBlock,
          width
            ? {
                alignSelf: 'center',
                marginLeft: 0,
                justifyContent: 'space-between',
              }
            : null,
        ]}
      >
          <TextInput
            style={{...styles.mapInput, width: width}}
            value={value}
            onChangeText={ev => {
              setValue(ev)
            }}
            placeholder={"Поиск"}
            placeholderTextColor={ICON}
          />
        <TouchableOpacity>
          <SearchSvg/>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Map
