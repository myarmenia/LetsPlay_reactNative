import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { _storageUrl } from '@/constants'
import { font, RH, RW } from '@/theme/utils'
import { BACKGROUND, ICON, WHITE } from '@/theme/colors'
import RadioBlock from '@/components/RadioBlock'
import LightButton from '@/assets/imgs/Button'
import { useDispatch } from 'react-redux'
import { getMembersList } from '@/store/Slices/TeamSlice'
import BgMyTem from '@/assets/bgMyTem'
import EachMember from './EachMember'
const TeamMembers = ({ route }) => {
  const command = route.params

  const btnsList = [
    { id: 1, text: 'По ID карточки', checked: true },
    { id: 2, text: 'По ФИО / Логин', checked: false },
    { id: 3, text: 'По номеру телефона / e-mail', checked: false },
    { id: 4, text: 'По страничке “Вконтакте”', checked: false },
  ]
  // const { members } = useSelector(({ teams }) => teams)
  const members = [
    {
      id: 1,
      img: '/user/avatar/a7d0c02e-225e-4382-9310-0930526843aa.jpg',
      name: 'Arsen Rustamyan',
      _id: 610978946,
    },
    {
      id: 2,
      img: '/user/avatar/a7d0c02e-225e-4382-9310-0930526843aa.jpg',
      name: 'Arsen Rustamyan',
      _id: 610978946,
    },
    {
      id: 3,
      img: '/user/avatar/a7d0c02e-225e-4382-9310-0930526843aa.jpg',
      name: 'Arsen Rustamyan',
      _id: 610978946,
    },
    {
      id: 4,
      img: '/user/avatar/a7d0c02e-225e-4382-9310-0930526843aa.jpg',
      name: 'Arsen Rustamyan',
      _id: 610978946,
    },
    {
      id: 5,
      img: '/user/avatar/a7d0c02e-225e-4382-9310-0930526843aa.jpg',
      name: 'Arsen Rustamyan',
      _id: 610978946,
    },
  ]
  const dispatch = useDispatch()
  const [list, setList] = useState(btnsList)
  const [value, setValue] = useState('')
  useEffect(() => {
    dispatch(getMembersList(command?._id))
  }, [])

  return (
    <ScreenMask>
      <View style={styles.rowBox}>
        <Image source={{ uri: _storageUrl + command?.img }} style={styles.img} resizeMode="cover" />
        <Text style={styles.text}>{command?.name}</Text>
      </View>
      <View style={styles.midBlock}>
        <RadioBlock
          list={list}
          title={'Поиск игрока'}
          titleStyle={styles.searchText}
          left={0}
          onChange={setList}
        />
        <TextInput
          placeholder={list.find((e) => e?.checked)?.text}
          placeholderTextColor={ICON}
          style={styles.input}
          value
          onChangeText={(e) => setValue(e)}
        />
        <View style={{ alignSelf: 'center', paddingVertical: RH(10) }}>
          <LightButton label={'Поиск'} size={{ width: RW(400), height: RH(48) }} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {members?.map((member) => {
          return (
            <TouchableOpacity style={{ width: '100%', marginVertical: RH(10) }} key={member.id}>
              <BgMyTem children={<EachMember member={member} />} />
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </ScreenMask>
  )
}

export default TeamMembers

const styles = StyleSheet.create({
  rowBox: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    justifyContent: 'space-evenly',
    marginVertical: RH(15),
  },
  img: {
    width: RW(40),
    height: RH(41),
    borderRadius: RW(20),
    borderWidth: 1,
    borderColor: WHITE,
  },
  text: {
    textAlign: 'center',
    ...font('bold', 20, WHITE),
    marginVertical: RH(15),
  },
  searchText: {
    // textAlign: 'center',
    ...font('regular', 16, ICON),
    marginVertical: RH(15),
  },
  midBlock: {
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: BACKGROUND,
    marginBottom: RH(49),
    borderRadius: RW(10),
    width: RW(363),
    height: RH(48),
    color: ICON,
    top: '4%',
    paddingLeft: RW(24),
  },
})
