import ScreenMask from '@/components/wrappers/screen'
import React, { useState } from 'react'
import { styles } from '../Game/GameList/styles'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { _gamesData } from '../Game/gamesDatas/gamesData'
import { RH, RW } from '@/theme/utils'
import Button from '@/assets/imgs/Button'
import { useNavigation } from '@react-navigation/native'
import PrizeCup from '@/assets/svgs/prizeCup'
import Wave from '@/assets/svgs/wave'

function GamesList() {
  const navigation = useNavigation()
  const [prop, setProp] = useState()
  const tournamentData = [
    {
      title: 'Турниры',
      data: [
        {
          id: 11,
          bigComponent: (
            <PrizeCup width={RW(260)} height={RH(260)} top={RH(0)} viewBox={'0 0 40 50'} />
          ),
          component: <PrizeCup width={42} height={40} viewBox={'0 0 33 49'} />,
          date: '07.07.22 ',
          gender: 'M',
          time: '18:30 ',
          location: 'Пресненская ',
          playersAge: '25-35',
          addres: 'наб. 25',
          players: '10-12',
          distantion: '1.6 км',
          playersText: 'Игроки',
          playersIn: '12/10',
          wave: <Wave />,
        },
        {
          id: 12,
          bigComponent: (
            <PrizeCup width={RW(260)} height={RH(260)} top={RH(0)} viewBox={'0 0 40 50'} />
          ),
          component: <PrizeCup width={42} height={40} viewBox={'0 0 33 49'} />,
          date: '07.07.22 ',
          gender: 'M',
          time: '18:30 ',
          location: 'Пресненская ',
          playersAge: '25-35',
          players: '10-12',
          addres: 'наб. 25',
          distantion: '1.6 км',
          playersText: 'Игроки',
          playersIn: '12/10',
          wave: <Wave />,
        },
        {
          id: 13,
          bigComponent: (
            <PrizeCup width={RW(260)} height={RH(260)} top={RH(0)} viewBox={'0 0 40 50'} />
          ),
          component: <PrizeCup width={42} height={40} viewBox={'0 0 33 49'} />,
          date: '07.07.22 ',
          gender: 'M',
          time: '18:30 ',
          location: 'Пресненская ',
          playersAge: '25-35',
          players: '10-12',
          addres: 'наб. 25',
          distantion: '1.6 км',
          playersText: 'Игроки',
          playersIn: '12/10',
          wave: <Wave />,
        },
        {
          id: 14,
          bigComponent: (
            <PrizeCup width={RW(260)} height={RH(260)} top={RH(0)} viewBox={'0 0 40 50'} />
          ),
          component: <PrizeCup width={42} height={40} viewBox={'0 0 33 49'} />,
          date: '07.07.22 ',
          gender: 'M',
          time: '18:30 ',
          location: 'Пресненская ',
          playersAge: '25-35',
          players: '10-12',
          addres: 'наб. 25',
          distantion: '1.6 км',
          playersText: 'Игроки',
          playersIn: '12/10',
          wave: <Wave />,
        },
        {
          id: 15,
          bigComponent: (
            <PrizeCup width={RW(260)} height={RH(260)} top={RH(0)} viewBox={'0 0 40 50'} />
          ),
          component: <PrizeCup width={42} height={40} viewBox={'0 0 33 49'} />,
          date: '07.07.22 ',
          gender: 'M',
          time: '18:30 ',
          location: 'Пресненская ',
          playersAge: '25-35',
          players: '10-12',
          addres: 'наб. 25',
          distantion: '1.6 км',
          playersText: 'Игроки',
          playersIn: '12/10',
          wave: <Wave />,
        },
      ],
    },
    {
      title: 'ТОП Турниры',
      data: [
        {
          id: 26,
          bigComponent: (
            <PrizeCup width={RW(260)} height={RH(260)} top={RH(0)} viewBox={'0 0 40 50'} />
          ),
          component: <PrizeCup width={42} height={40} viewBox={'0 0 33 49'} />,
          date: '07.07.22 ',
          gender: 'M',
          time: '18:30 ',
          location: 'Пресненская ',
          playersAge: '25-35',
          addres: 'наб. 25',
          players: '10-12',
          distantion: '1.6 км',
          playersText: 'Игроки',
          playersIn: '12/10',
          wave: <Wave />,
        },
        {
          id: 27,
          bigComponent: (
            <PrizeCup width={RW(260)} height={RH(260)} top={RH(0)} viewBox={'0 0 40 50'} />
          ),
          component: <PrizeCup width={42} height={40} viewBox={'0 0 33 49'} />,
          date: '07.07.22 ',
          gender: 'M',
          time: '18:30 ',
          location: 'Пресненская ',
          playersAge: '25-35',
          players: '10-12',
          addres: 'наб. 25',
          distantion: '1.6 км',
          playersText: 'Игроки',
          playersIn: '12/10',
          wave: <Wave />,
        },
        {
          id: 28,
          bigComponent: (
            <PrizeCup width={RW(260)} height={RH(260)} top={RH(0)} viewBox={'0 0 40 50'} />
          ),
          component: <PrizeCup width={42} height={40} viewBox={'0 0 33 49'} />,
          date: '07.07.22 ',
          gender: 'M',
          time: '18:30 ',
          location: 'Пресненская ',
          playersAge: '25-35',
          players: '10-12',
          addres: 'наб. 25',
          distantion: '1.6 км',
          playersText: 'Игроки',
          playersIn: '12/10',
          wave: <Wave />,
        },
        {
          id: 29,
          bigComponent: (
            <PrizeCup width={RW(260)} height={RH(260)} top={RH(0)} viewBox={'0 0 40 50'} />
          ),
          component: <PrizeCup width={42} height={40} viewBox={'0 0 33 49'} />,
          date: '07.07.22 ',
          gender: 'M',
          time: '18:30 ',
          location: 'Пресненская ',
          playersAge: '25-35',
          players: '10-12',
          addres: 'наб. 25',
          distantion: '1.6 км',
          playersText: 'Игроки',
          playersIn: '12/10',
          wave: <Wave />,
        },
        {
          id: 30,
          bigComponent: (
            <PrizeCup width={RW(260)} height={RH(260)} top={RH(0)} viewBox={'0 0 40 50'} />
          ),
          component: <PrizeCup width={42} height={40} viewBox={'0 0 33 49'} />,
          date: '07.07.22 ',
          gender: 'M',
          time: '18:30 ',
          location: 'Пресненская ',
          playersAge: '25-35',
          players: '10-12',
          addres: 'наб. 25',
          distantion: '1.6 км',
          playersText: 'Игроки',
          playersIn: '12/10',
          wave: <Wave />,
        },
      ],
    },
  ]

  const handleSubmit = (elm) => {
    if (elm !== undefined) {
      setProp({ ...elm, clicked: true })
    } else {
      return null
    }
  }
  const passIdGameItem = (id) => {
    tournamentData.map((elem) =>
      elem.data.map((elm) => {
        if (elm.id === id) {
          return (
            { ...elm, clicked: true },
            // if (elm !== undefined) {
            setProp({ ...elm, clicked: true }),
            navigation.navigate('TournamentTicket')
            // }
          )
        } else {
          return null
        }
      }),
    )
  }
  return (
    <ScreenMask>
      <ScrollView>
        {tournamentData.map((elm) => {
          return (
            <View style={styles.gameListContainer} key={elm.id}>
              <Text style={styles.gameTitle}>{elm.title}</Text>
              <>
                {elm.data.map((elem) => {
                  return (
                    <TouchableOpacity
                      key={elem.id + 10}
                      style={styles.gameBox}
                      onPress={() => {
                        passIdGameItem(elem.id)
                      }}
                    >
                      <View style={styles.iconComponent}>{elem?.component}</View>
                      <View style={styles.gameMiddleContainer}>
                        <View style={styles.gameItemTop}>
                          <Text style={styles.gameItemTopText}>
                            {[elem.date, elem.time, elem.location]}
                          </Text>
                        </View>
                        <View style={styles.gameItemBottom}>
                          <Text style={styles.gameItemTopText}>{elem.addres}</Text>
                          <View style={styles.distanceBox}>
                            {elem.wave}
                            <Text style={[styles.gameItemTopText, { paddingLeft: RW(10) }]}>
                              {elem.distantion}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.line} />
                      </View>
                      <View style={styles.gameItemRight}>
                        <Text style={styles.gameItemRightText}>{elem.playersText}</Text>
                        <Text style={styles.gameItemRightText}>{elem.players}</Text>
                        {elem.availablePlayers ? (
                          <View style={styles.gameItemCircle}>
                            <Text style={styles.circleText}>{elem.availablePlayers}</Text>
                          </View>
                        ) : (
                          <Text style={styles.playersIn}>{elem.playersIn}</Text>
                        )}
                      </View>
                    </TouchableOpacity>
                  )
                })}
              </>
            </View>
          )
        })}
        <View style={{ alignSelf: 'center', paddingTop: RH(99), paddingBottom: RH(48) }}>
          <Button label={'Обновить'} size={{ width: 375, height: 48 }} />
        </View>
      </ScrollView>
    </ScreenMask>
  )
}

export default GamesList
