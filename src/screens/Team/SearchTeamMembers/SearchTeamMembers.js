import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import { _storageUrl } from '@/constants'
import { font, RH, RW } from '@/theme/utils'
import { BACKGROUND, ICON, WHITE } from '@/theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import { getMembersList, searchPlayer, setFindedPlayers } from '@/store/Slices/TeamSlice'
import { useNavigation } from '@react-navigation/native'
import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/assets/imgs/Button'
import RadioBlock from '@/components/RadioBlock'
import User from '@/components/User/user'
import LinearGradient from 'react-native-linear-gradient'
const SearchTeamMembers = ({ route }) => {
  const command = route.params
  const btnsList = [
    { id: 1, text: 'По ID игрока', checked: true },
    { id: 2, text: 'По ФИО / Логин', checked: false },
    { id: 3, text: 'По номеру телефона / e-mail', checked: false },
    { id: 4, text: 'По страничке “Вконтакте”', checked: false },
  ]

  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { findedPlayers, findedTeam } = useSelector(({ teams }) => teams)
  const [list, setList] = useState(btnsList)
  const [value, setValue] = useState('')
  const radioValue = list.find((elm) => elm.checked).text

  const EachUser = ({ member }) => {
    const [back, setBack] = useState(false)
    return (
      <Pressable
        style={styles.eachUserBox}
        key={member.id}
        onPressIn={() => setBack(true)}
        onPressOut={() => setBack(false)}
        onPress={() =>
          navigation.navigate('SearchedUserInfo', { member: member, command: command?._id })
        }
      >
        {back ? (
          <LinearGradient
            colors={['#7DCE8A', '#4D7CFE']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            useAngle={true}
            angle={105}
            angleCenter={{ x: 0.5, y: 0.5 }}
            style={{
              width: '100%',
              height: '100%',
              zIndex: -1,
              position: 'absolute',
              opacity: 0.7,
              borderRadius: RW(10),
            }}
          ></LinearGradient>
        ) : (
          <LinearGradient
            colors={['#7DCE8A', '#4D7CFE']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            useAngle={true}
            angle={105}
            angleCenter={{ x: 0.5, y: 0.5 }}
            style={{
              width: '100%',
              height: '100%',
              zIndex: -1,
              position: 'absolute',
              opacity: 0.5,
              borderRadius: RW(10),
            }}
          ></LinearGradient>
        )}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            height: '100%',
            width: '80%',
            alignSelf: 'flex-start',
          }}
        >
          <View style={{ marginLeft: RW(15) }}>
            <User size={90} pressedUser={member} />
          </View>
          <Text style={styles.userID}>ID{member?.id}</Text>
        </View>
      </Pressable>
    )
  }

  let url = ''
  const handleSearch = async () => {
    switch (radioValue) {
      case 'По ID игрока': {
        url = `id=${value}`
        break
      }
      case 'По ФИО / Логин': {
        url = `name=${value}`
        break
      }
      case 'По номеру телефона / e-mail': {
        url = `userId=${value}`
        break
      }
      case 'По страничке “Вконтакте”': {
        url = `vkId=${value}`
        break
      }
    }
    dispatch(searchPlayer(url))
  }

  useEffect(() => {
    dispatch(setFindedPlayers([]))
    dispatch(getMembersList(command?._id))
  }, [])

  return (
    <ScreenMask>
      <View style={styles.rowBox}>
        <Text style={styles.text}>{command?.name}</Text>
        <Image source={{ uri: _storageUrl + command?.img }} style={styles.img} resizeMode="cover" />
      </View>
      <View style={styles.midBlock}>
        <RadioBlock
          list={list}
          onChange={setList}
          title={'Поиск игрока'}
          titleStyle={styles.searchText}
          left={0}
        />
        <TextInput
          placeholder={list.find((e) => e?.checked)?.text}
          placeholderTextColor={ICON}
          style={styles.input}
          value
          onChangeText={(e) => setValue(e)}
        />
        <View style={{ alignSelf: 'center', paddingVertical: RH(10) }}>
          <LightButton
            label={'Поиск'}
            size={{ width: RW(400), height: RH(48) }}
            onPress={handleSearch}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {findedPlayers?.map((member, i) => {
          return <EachUser member={member} key={i} />
        })}
      </ScrollView>
    </ScreenMask>
  )
}

export default SearchTeamMembers

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
  userID: {
    ...font('regular', 14, WHITE),
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
  eachUserBox: {
    width: '100%',
    height: RH(110),
    marginVertical: RH(10),
    borderRadius: RW(10),
  },
})
