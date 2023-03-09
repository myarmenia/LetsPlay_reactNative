import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { useNavigation } from '@react-navigation/native'
import { _storageUrl } from '@/constants'
import { font, RH, RW } from '@/theme/utils'
import { BACKGROUND, ICON, WHITE } from '@/theme/colors'
import Input from '@/screens/Chat/PrivateChat/components/Input'
import SearchAddresses from '@/screens/Map/SearchAddresses'
import LightButton from '@/assets/imgs/Button'

const EditTeamInfo = ({ route }) => {
  const command = route.params
  const [addresName, setAddressName] = useState('')
  const [name, setName] = useState('')
  const navigation = useNavigation()
  //command is initial coming state from navigation and from map after changing location
  return (
    <ScreenMask>
      <View style={styles.row}>
        <Image source={{ uri: _storageUrl + command?.img }} resizeMode="cover" style={styles.img} />
        <TextInput style={styles.input} value={command?.name} onChangeText={e => setName(e)} />
      </View>
      <View style={styles.colBox}>
        <Text style={styles.text}>Адрес нахождения команды:</Text>
        <SearchAddresses
          setAddressName={setAddressName}
          navigateTo="EditTeam"
          command={command}
          show={true}
        />
        <Text style={styles.text}>{addresName}</Text>
      </View>
      <View style={styles.bottomBox}>
        <LightButton
          label={'Сохранить'}
          size={{ width: RW(366), height: RH(50) }}
          onPress={() => navigation.navigate('MyTeamInfo', command)}
        />
      </View>
    </ScreenMask>
  )
}

export default EditTeamInfo

const styles = StyleSheet.create({
  img: {
    height: RH(121),
    width: RW(120),
    borderRadius: RW(66),
    borderWidth: 1,
    borderColor: WHITE,
  },
  input: {
    backgroundColor: BACKGROUND,
    marginBottom: RH(49),
    borderRadius: RW(10),
    width: RW(246),
    height: RH(48),
    color: ICON,
    top: '4%',
    paddingLeft: RW(24),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: RH(40),
  },
  text: {
    // textAlign: 'center',
    marginVertical: RH(15),
    ...font('regular', 16, WHITE),
  },
  colBox: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  bottomBox: {
    position: 'absolute',
    bottom: RW(30),
    alignSelf: 'center',
  },
})
