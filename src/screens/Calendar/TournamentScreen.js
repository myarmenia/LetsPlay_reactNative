import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Soccer from '@/assets/imgs/games/soccer.png'
import {font, RH, RW} from '@/theme/utils'
import ScreenMask from '@/components/wrappers/screen'
import { ScrollView } from 'react-native-gesture-handler'
import OrganizerSvg from '@/assets/svgs/OrganizerSvg'
import GestureRecognizer from "react-native-swipe-gestures";
import User from "@/assets/imgs/user/user";
import {ICON, WHITE} from "@/theme/colors";

function TournamentScreen({props, navigation}) {
  // const { image } = props
  const item = {
    id: 1,
    lName: 'Maik',
    fName: 'Joni',
    image: 'https://cdnstatic.rg.ru/crop560x374/uploads/images/177/18/63/1000s.jpg',
    status: 'GOLD',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
  }
  return (
      <ScreenMask>
        <ScrollView showsVerticalScrollIndicator={false}>
          <GestureRecognizer
              onSwipeRight={(state) => navigation.goBack()}
              style={{
                flex: 1,
              }}
          >
            <View style={styles.svg}>
              <Image source={require('../Game/gamesDatas.js/gamePics/Футбол.png')} />
            </View>

            <View>
              <View style={styles.firstTextBlock}>
                <Text style={[styles.ticketText, { marginTop: RH(35) }]}>Тип турнира:</Text>
                <Text style={styles.ticketTextTwo}>Своя игра</Text>
              </View>
              <View style={styles.ticketTextBlock}>
                <Text style={styles.ticketText}>Название турнира:</Text>
                <Text style={styles.ticketTextTwo}>Велосипедная гонка</Text>
              </View>
              <View style={styles.ticketTextBlock}>
                <Text style={styles.ticketText}>
                  Описание турнира:
                </Text><Text style={styles.ticketTextTwo}>
                  Повседневная практика показывает, что укрепление и развитие
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
                <Text style={styles.ticketText}>Количество участников:</Text>
                <Text style={styles.ticketTextTwo}>от 10 до 12</Text>
              </View>
              <View style={styles.ticketTextBlock}>
                <Text style={styles.ticketText}>Возраст игроков:</Text>
                <Text style={styles.ticketTextTwo}>25-35</Text>
              </View>
              <View style={styles.ticketTextBlock}>
                <Text style={styles.ticketText}>Пол участников:</Text>
                <Text style={styles.ticketTextTwo}>М</Text>
              </View>
              <View style={styles.ticketTextBlock}>
                <Text style={styles.ticketText}>Дата турнира:</Text>
                <Text style={styles.ticketTextTwo}>07.07.2022</Text>
              </View>
              <View style={styles.ticketTextBlock}>
                <Text style={styles.ticketText}>Время:</Text>
                <Text style={styles.ticketTextTwo}>18:30</Text>
              </View>
              <View style={styles.ticketTextBlock}>
                <Text style={styles.ticketText}>Адрес проведения турнира:</Text>
              </View>

              <View style={styles.ticketTextBlock}>
                <Text style={styles.ticketText}>Плата за участие:</Text>
                <Text style={styles.ticketTextTwo}>500 руб.</Text>
              </View>
              <View style={styles.ticketTextBlock}>
                <Text style={styles.ticketText}>Организатор турнира:</Text>
                <View style={{width: RW(60)}}>
                   <User size={40} user={item} onPressItem={{
                      item: <User user={item} size={390}/>,
                      modalClose:false,
                  }}/>
                </View>
              </View>
            </View>
          </GestureRecognizer>
        </ScrollView>
      </ScreenMask>
  )
}

const styles = StyleSheet.create({
  ticketTextBlock: {
    marginBottom: RH(24),
  },
  ticketText: {
    ...font('regular', 14, WHITE, 20),
    marginLeft: RW(11),
    marginBottom: RH(6)
  },
  ticketTextTwo:{
    ...font('bold', 16, ICON, 20),
    marginLeft: RW(11),
  },
  firstTextBlock: {
    justifyContent: 'space-between',
    marginRight: RW(18),
    marginBottom: RH(24)
  },

  ticketImgBlock: {
    alignItems: 'center',
    marginBottom: RW(46),
  },
  svg: {
    alignItems: 'center',
    marginTop: RH(25),
  },
})

export default TournamentScreen
