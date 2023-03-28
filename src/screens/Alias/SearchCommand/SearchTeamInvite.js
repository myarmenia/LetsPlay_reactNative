import React, { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { _storageUrl } from '@/constants'
import { useNavigation } from '@react-navigation/native'
import ScreenMask from '@/components/wrappers/screen'
import BgMyTem from '@/assets/bgMyTem'
import { WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import LightButton from '@/assets/imgs/Button'

function SearchTeamInvite({ route }) {
  const { findedTeam } = useSelector(({ teams }) => teams)
  const navigation = useNavigation()
  const { sendingData, item } = route.params
  console.log('sendingData', item)
  return (
    <ScreenMask>
      <Text style={styles.title}>Результат поиска</Text>
      <ScrollView>
        {findedTeam?.map((item, i) => {
          return (
            <TouchableOpacity
              key={item?._id || Math.random()}
              onPress={() => navigation.navigate('SearchedTeamSubmit', item)}
            >
              <View style={styles.homeBlock}>
                <View style={{ zIndex: 1, flexDirection: 'row', alignItems: 'center' }}>
                  <View style={styles.imageBlock}>
                    <Image style={styles.image} source={{ uri: _storageUrl + item?.img }} />
                  </View>
                  <View style={styles.textBlock}>
                    <Text style={styles.text}>{item?.name}</Text>
                    <Text style={styles.text}>{item?.address_name}</Text>
                    <Text style={styles.text}>{item?._id?.substring(0, item?._id.length - 1)}</Text>
                  </View>
                </View>
                <View style={{ position: 'absolute' }}>
                  <BgMyTem gradient={i % 2 == 0} />
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
        <View style={styles.bottomBtn}>
          <LightButton label={'Подтвердить'} size={{ width: 260, height: 47 }} />
        </View>
      </ScrollView>
    </ScreenMask>
  )
}

export default SearchTeamInvite

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    ...font('bold', 20, WHITE),
    marginVertical: RH(15),
  },
  homeBlock: {
    width: RW(395),
    overflow: 'hidden',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: RH(18),
  },
  imageBlock: {
    width: RW(80),
    height: RW(80),
    borderWidth: 1,
    borderRadius: 50,
    borderColor: WHITE,
    margin: RW(15),
  },
  image: {
    borderWidth: 1,
    borderRadius: 50,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  text: {
    marginVertical: RH(3),
    width: '85%',
    ...font('bold', 11, WHITE),
  },
  textBlock: {
    marginLeft: RW(18),
  },
  bottomBtn: {
    position: 'relative',
    bottom: RH(24),
    width: '100%',
    alignItems: 'center',
  },
})
