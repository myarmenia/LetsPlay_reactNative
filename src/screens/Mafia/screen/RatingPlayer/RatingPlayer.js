import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import VectorIcon from '@/assets/svgs/vectorSvg'
import { font, RH, RW } from '@/theme/utils'
import { ICON, WHITE } from '@/theme/colors'
import { RatingsData } from '@/screens/Game/Mafia/screen/RatingPlayer/RatingsData'
import LightButton from '@/assets/imgs/Button'

const RatingPlayer = () => {
  return (
    <ScreenMask>
      <ScrollView>
        {/*<View>*/}
        {/*    <View style={styles.ratingsView}>*/}
        {/*        <Text style={styles.ratingsText}> Рейтинги игроков</Text>*/}
        {/*        <View style={styles.vectorView}>*/}
        {/*            <VectorIcon/>*/}
        {/*        </View>*/}
        {/*    </View>*/}
        {/*    <View style={styles.ratingsCommon}>*/}
        {/*        {*/}
        {/*            RatingsData.map((item) => (*/}
        {/*                <View style={styles.ratingsPlayers} key={item.id}>*/}
        {/*                    <View style={styles.imgView}>*/}
        {/*                        <Image source={item.img} style={styles.img}/>*/}
        {/*                    </View>*/}
        {/*                    <View style={styles.definedView}>*/}
        {/*                        <Text style={styles.definedText}>{item.defined}</Text>*/}
        {/*                        <Text style={styles.RatingsText}>{item.ratings}</Text>*/}
        {/*                    </View>*/}
        {/*                </View>*/}
        {/*            ))*/}
        {/*        }*/}
        {/*    </View>*/}
        {/*    <View style={styles.btns}>*/}
        {/*        <View style={styles.btnsView}>*/}
        {/*            <LightButton*/}
        {/*                size={{width: 281, height: 48}}*/}
        {/*                labelStyle={styles.invitePlayers}*/}
        {/*                label={'Завершить игру'}*/}
        {/*            />*/}
        {/*        </View>*/}
        {/*        <View style={styles.btnsView}>*/}
        {/*            <LightButton*/}
        {/*                size={{width: 281, height: 48}}*/}
        {/*                labelStyle={styles.invitePlayers}*/}
        {/*                label={'Играть заново'}*/}
        {/*            />*/}
        {/*        </View>*/}
        {/*    </View>*/}
        {/*</View>*/}
      </ScrollView>
    </ScreenMask>
  )
}

const styles = StyleSheet.create({
  ratingsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: RW(34),
  },
  ratingsText: {
    ...font('inter', 24, ICON, 24),
    fontWeight: '700',
    letterSpacing: 0.01,
  },
  vectorView: {
    marginLeft: RW(30),
  },
  imgView: {
    width: RW(49),
    height: RH(82),
  },
  img: {
    width: '100%',
    height: '100%',
  },
  ratingsPlayers: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: RH(21),
  },
  definedView: {
    marginLeft: RW(26),
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginTop: RH(12),
  },
  definedText: {
    ...font('inter', 16, WHITE, 20),
    fontWeight: '600',
    marginBottom: RH(5),
  },
  RatingsText: {
    ...font('inter', 16, WHITE, 20),
    fontWeight: '600',
  },
  ratingsCommon: {
    paddingHorizontal: RW(15),
  },
  btns: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnsView: {
    marginBottom: RH(24),
  },
})
export default RatingPlayer
