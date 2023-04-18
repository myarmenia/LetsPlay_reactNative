import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import Row from '@/components/wrappers/row'
import { _storageUrl } from '@/constants'
import { RH, RW, font } from '@/theme/utils'
import { ICON, WHITE } from '@/theme/colors'
import User from '@/components/User/user'
import DraggableComponent from './components/DraggableComponent'

const TeamSchemes = ({ route }) => {
  const data = route.params
  // let containerLayout, imgLayout
  const [containerLayout, setContainerLayout] = useState()
  const [imageLayout, setImageLayout] = useState()
  console.log((containerLayout?.width - imageLayout?.width) / 2 + containerLayout?.y)

  return (
    <ScreenMask>
      <Row wrapper={styles.teamNameRow}>
        <Image style={styles.teamImg} source={{ uri: _storageUrl + data?.teamImg }} />
        <Text style={styles.teamName}>{data?.teamName}</Text>
      </Row>
      <View
        style={styles.schemaImgContainer}
        onLayout={(e) => {
          setContainerLayout(e.nativeEvent.layout)
        }}
      >
        <Image
          onLayout={(e) => {
            setImageLayout(e.nativeEvent.layout)
          }}
          style={styles.schemaImg}
          source={{ uri: _storageUrl + data?.schemaImg }}
        />
      </View>
      <View style={{ zIndex: 99999 }}>
        <Text style={styles.playersTitle}>Запасные игроки:</Text>
        <Row>
          {
            // containerLayout?.width && imageLayout?.width && containerLayout?.y ?
            [1, 2, 3, 4].map((item, key) => (
              <DraggableComponent
                children={<User />}
                key={key}
                maxTop={(containerLayout?.width - imageLayout?.width) / 2 + containerLayout?.y}
              />
            ))
            // : null
          }
        </Row>
      </View>
    </ScreenMask>
  )
}

export default TeamSchemes

const styles = StyleSheet.create({
  teamNameRow: {
    alignSelf: 'center',
  },
  teamImg: {
    height: RW(30),
    width: RW(30),
    borderRadius: RW(15),
  },
  teamName: {
    ...font('bold', 20, WHITE, 30),
    marginLeft: RW(20),
  },
  schemaImgContainer: {
    width: '100%',
    height: RH(516),
    marginTop: RH(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  schemaImg: {
    height: RW(516),
    width: RW(370),
    resizeMode: 'contain',
  },
  playersTitle: {
    ...font('regular', 16, ICON, 24),
    marginTop: RH(28),
    marginBottom: RH(16),
  },
})
