import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import style from './style'
import Button from '@/assets/imgs/Button'
import { BLACK, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import User from '@/components/User/user'
import { Players } from '@/assets/TestData'
import Modal from '@/components/modal'
import FastImage from 'react-native-fast-image'

function Index({ navigation, route }) {
  const { item, data } = route.params
  const [modal, setModal] = useState(false)
  const team = item
  return (
    <ScreenMask>
      <Text style={style.team}>{team?.name}</Text>
      <View style={style.imageBlock}>
        <FastImage resizeMode='contain' style={style.image} source={{ uri: team?.image }} />
      </View>
      <Text style={style.text}>Адрес нахождения команды</Text>
      <Text
        style={{
          ...style.text,
          marginRight: 'auto',
          marginLeft: 'auto',
          width: RW(160),
          ...font('thin', 18, WHITE),
          borderBottomColor: 'white',
          borderBottomWidth: 1,
        }}
      >
        {team?.address}
      </Text>
      <View style={style.teamInfoBlock}>
        <View style={{ alignItems: 'center' }}>
          <Text style={style.textTeam}>Организатор команды:</Text>
          <TouchableOpacity onPress={() => setModal(true)}>
            <User user={Players[1]} pressedUser={Players[1]} size={90} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', marginTop: RH(10) }}>
          <Text style={style.textTeam}>Администратор команды:</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <User
              user={Players[1]}
              size={60}
              pressedUser={Players[1]}
              onPressItem={{
                item: <User size={390} pressedUser={Players[1]} />,
                modalClose: false,

                onClickFunc: () => {},
              }}
            />
            <User user={Players[2]} size={45} pressedUser={Players[1]} />
            <User user={Players[3]} size={45} pressedUser={Players[1]} />
            <User user={Players[4]} size={45} pressedUser={Players[1]} />
          </View>
        </View>
      </View>
      <Modal
        modalVisible={modal}
        setIsVisible={setModal}
        item={
          <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <User user={Players[1]} size={370} />
          </View>
        }
      />

      <View style={style.btn}>
        <Button
          onPress={() => navigation.navigate('SelectPlayersRival', { data, team: item })}
          size={{ width: 265, height: 48 }}
          label={'Подтвердить'}
          labelStyle={font('bold', 18, BLACK)}
        />
      </View>
    </ScreenMask>
  )
}

export default Index
