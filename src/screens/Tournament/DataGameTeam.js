import React, { useEffect, useMemo, useState } from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { RH, RW } from '@/theme/utils'
import ScreenMask from '@/components/wrappers/screen'
import { ScrollView } from 'react-native-gesture-handler'
import OrganizerSvg from '@/assets/svgs/OrganizerSvg'
import GestureRecognizer from 'react-native-swipe-gestures'
import LightButton from '@/assets/imgs/Button'
import style from '@/screens/GameCreating/style'
import Modal from '@/components/modal'

function DataGame(props) {
  const { navigation, route } = props
  const {isTeam} = route.params
  return (
    <ScreenMask>
        <GestureRecognizer style={{height: '100%'}} onSwipeRight={(state) => navigation.goBack()}>
          <View style={styles.svg}>
            <Image style={style.ticketImg} source={require('../Game/gamesDatas.js/gamePics/Футбол.png')} />
          </View>
          <View>
            <View style={styles.firstTextBlock}>
              <Text style={[styles.ticketText, { marginTop: RH(35) }]}>Тип турнира: Своя игра</Text>
            </View>
            <View style={styles.ticketTextBlock}>
              <Text style={[styles.ticketText, { marginTop: RH(15) }]}>
                Название турнира: Велосипедная гонка
              </Text>
            </View>
            <View style={styles.ticketTextBlock}>
              <Text style={[styles.ticketText, { lineHeight: 20 }]}>
                Описание турнира: Повседневная практика показывает, что укрепление и развитие
                структуры играет важную роль в формировании соответствующий условий активизации.{' '}
              </Text>
            </View>
            <View style={styles.ticketTextBlock}>
              <TouchableOpacity>
                <Text style={[styles.ticketText, { color: '#7DCE8A' }]}>
                  https://www.wikipedia.com/{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ticketTextBlock}>
              <Text style={styles.ticketText}>Количество участников: от 10 до 12</Text>
            </View>
            <View style={styles.ticketTextBlock}>
              <Text style={styles.ticketText}>Дата турнира: 07.07.2022</Text>
            </View>
            <View style={styles.ticketTextBlock}>
              <Text style={styles.ticketText}>Время: 18:30</Text>
            </View>
            <View style={styles.ticketTextBlock}>
              <Text style={styles.ticketText}>Адрес проведения турнира:</Text>
            </View>

            <View style={styles.ticketTextBlock}>
              <Text style={styles.ticketText}>Плата за участие: 500 руб.</Text>
            </View>
            <View
              style={[
                styles.ticketTextBlock,
                { marginBottom: RH(50), flexDirection: 'row', alignItems: 'center' },
              ]}
            >
              <Text style={[styles.ticketText, { marginRight: RW(10) }]}>Организатор турнира:</Text>
              <OrganizerSvg />
            </View>
          </View>
          <View style={styles.buttons}>
            <View>
              <LightButton
                label={'Редактировать'}
                onPress={() => {
                  navigation.navigate('TournamentCreatingTeam' , {isTeam})
                }}
                size={{ width: 192, height: 36 }}
              />
            </View>
            <View>
              <LightButton
                label={'Готово'}
                onPress={() => {
                  navigation.navigate('Home' , {type: 'tournament'} )
                }}
                size={{ width: 166, height: 36 }}
              />
            </View>
          </View>
          </GestureRecognizer>
    </ScreenMask>
  )
}

const styles = StyleSheet.create({
  ticketTextBlock: {
    marginBottom: RH(14),
  },
  ticketText: {
    // ...font('bold', 14, WHITE, 20),
    marginLeft: RW(11),
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  firstTextBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: RW(18),
  },

  ticketImgBlock: {
    alignItems: 'center',
    marginBottom: RW(46),
  },
  svg: {
    alignItems: 'center',
    marginTop: RH(25),
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto',
    marginBottom: RH(20),
    marginRight: RW(10)
  },
})

export default DataGame
