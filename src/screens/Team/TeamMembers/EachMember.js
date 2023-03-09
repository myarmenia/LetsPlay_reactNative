import { _storageUrl } from '@/constants'
import { WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
const EachMember = ({ member }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        top: RH(14),
        marginHorizontal: RW(30),
      }}
    >
      <Image
        source={{ uri: _storageUrl + member?.img }}
        style={{
          width: RW(80),
          height: RH(82),
          borderRadius: RH(41),
          borderWidth: 1,
          borderColor: WHITE,
        }}
        resizeMode="cover"
      />
      <View
        style={{
          marginHorizontal: RW(30),
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
          height: '90%',
        }}
      >
        <Text style={styles.eachUserName}>Arsen Rustamyan</Text>
        <Text style={styles.eachUserId}>ID : 6189187</Text>
        <Text style={styles.eachUserVK}>ВК: vk.com</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  eachUserId: {
    ...font('regular', 15, WHITE),
    textAlign: 'center',
  },
  eachUserName: {
    ...font('bold', 17, WHITE),
    textAlign: 'center',
  },
  eachUserVK: {
    ...font('regular', 16, WHITE),
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
})
export default EachMember
