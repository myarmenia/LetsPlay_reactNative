import * as React from 'react'
import { RH, RW, SCREEN_HEIGHT, SCREEN_WIDTH } from '@/theme/utils'
import UserBody from './components/index'
import { Pressable, View, ImageBackground, StyleSheet } from 'react-native'
import Modal from '@/components/modal'
import { useState } from 'react'

function User({ onPressItem = () => { }, size, pressedUser, user, style = {} }) {

  const width = SCREEN_WIDTH > SCREEN_HEIGHT ? RW(size * 270 / 414) : RH(size * 270 / 414)
  const height = SCREEN_WIDTH > SCREEN_HEIGHT ? RW(size) : RH(size)

  const [modalVisible, setModalVisible] = useState(false)

  const imgStyle = {
    height,
    width
  }

  const Item = (
    <ImageBackground
      source={require('./images/img.png')}
      style={[imgStyle, styles.imageBackground, style]}
      resizeMode='contain'>
      <UserBody size={width} pressedUser={pressedUser} userProps={user} />
    </ImageBackground>
  )

  return onPressItem ? (

    <Pressable
      onPress={() => {
        onPressItem?.onClickFunc ? onPressItem?.onClickFunc() : setModalVisible(true)
      }}
    >
      {Item}
      {onPressItem.item ? (
        <Modal
          modalVisible={modalVisible}
          modalClose={onPressItem.modalClose}
          item={onPressItem.item}
          setIsVisible={setModalVisible}
        />
      ) : null}
    </Pressable>
  ) : (
    <View>
      {Item}
    </View>
  )
}

export default User


const styles = StyleSheet.create({
  imageBackground: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',

  }
})
