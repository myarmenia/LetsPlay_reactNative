import { Pressable, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import LeftArrow from '../../../../../assets/svgs/leftArrow'
import InfoSvg from '@/assets/svgs/infoSvg'
import Row from '@/components/wrappers/row'
import CircleSvg from '@/assets/svgs/CircleSvg'
import { RH, RW } from '@/theme/utils'
import { useNavigation } from '@react-navigation/native'
import GameInfoModal from './GameInfoModal'
import TeamInfoModal from './TeamInfoModal'
import TournamentInfoModal from './TournamentInfoModal'
import TeamGameInfoModal from './TeamGameInfoModal'

const PrivateChatHeader = ({ id, playersLength, type, team }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()
  return (
    <View
      style={styles.container}
    >
      <Pressable onPress={() => navigation.goBack()}>
        <Row>
          <LeftArrow />
          <View style={{ marginLeft: RW(8) }}>
            <CircleSvg count={playersLength || 1} />
          </View>
        </Row>
      </Pressable>
      <Pressable onPress={() => setModalVisible(true)}>
        <InfoSvg />
      </Pressable>
      {modalVisible &&
        (
          type === 'team' ? (
            <TeamInfoModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              team={team}
            />
          ) :
            type === 'game'
              ?
              (
                <GameInfoModal
                  modalVisible={modalVisible}
                  setModalVisible={setModalVisible}
                  gameID={id}
                  item={team}
                />
              )
              :
              type === 'tournament' ? (
                <TournamentInfoModal
                  modalVisible={modalVisible}
                  setModalVisible={setModalVisible}
                  id={id}
                />
              )
                : <TeamGameInfoModal
                  modalVisible={modalVisible}
                  setModalVisible={setModalVisible}
                  item={team} />
        )
      }
    </View>
  )
}

export default PrivateChatHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    top: '3%',
    zIndex: 9999,
    height: RH(44),
  }
})
