import React, { useEffect } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { _storageUrl } from '@/constants'
import { useNavigation } from '@react-navigation/native'
import ScreenMask from '@/components/wrappers/screen'
import style from './styles'
import BgMyTem from '@/assets/bgMyTem'

function Index() {
  const { findedTeam } = useSelector(({ teams }) => teams)
  const navigation = useNavigation()

  return (
    <ScreenMask>
      <Text style={style.title}>Результат поиска</Text>
      <ScrollView>
        {findedTeam?.map((item, i) => {
          return (
            <TouchableOpacity
              key={item?._id || Math.random()}
              onPress={() => navigation.navigate('TeamSearchInfo', item)}
            >
              <View style={style.homeBlock}>
                <View style={{ zIndex: 1, flexDirection: 'row', alignItems: 'center' }}>
                  <View style={style.imageBlock}>
                    <Image style={style.image} source={{ uri: _storageUrl + item?.img }} />
                  </View>
                  <View style={style.textBlock}>
                    <Text style={style.text}>{item?.name}</Text>
                    <Text style={style.text}>{item?.address_name}</Text>
                    <Text style={style.text}>{item?._id?.substring(0, item?._id.length - 1)}</Text>
                  </View>
                </View>
                <View style={{ position: 'absolute' }}>
                  <BgMyTem gradient={i % 2 == 0} />
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </ScreenMask>
  )
}

export default Index
