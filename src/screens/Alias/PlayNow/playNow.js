import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH, RW } from '@/theme/utils'
import { ICON, WHITE } from '@/theme/colors'
import LightButton from '@/assets/imgs/Button'
import { useNavigation } from '@react-navigation/native'
import User from '@/components/User/user'
import { useSelector } from 'react-redux'

const PlayNow = () => {
  const navigation = useNavigation()
  const { commands } = useSelector(({ alias }) => alias)
  return (
    <ScreenMask>
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.commandsConatainer}>
            {commands.map((elm, i) => {
              return (
                <View key={i}>
                  <Text style={styles.commandName}>{elm.value}</Text>
                  <View style={styles.eachCommandBox}>
                    {elm?.members?.map(user => {
                      return (
                        <View>
                          {/* pass user in User component with pressed user prop */}
                          <User
                            size={70}
                            onPressItem={{
                              item: <User size={390} />,
                              modalClose: false,
                              // onClickFunc: handleClick,
                            }}
                          />
                        </View>
                      )
                    })}
                  </View>
                </View>
              )
            })}
          </View>
        </ScrollView>
        <View>
          <View style={{ position: 'absolute', bottom: RH(50), alignSelf: 'center' }}>
            <LightButton
              size={{ width: 281, height: 48 }}
              // labelStyle={styles.countinue}
              label={'Продолжить'}
              white={'white'}
              background={'#7DCE8A'}
              bgColor={'#4D7CFE'}
              onPress={() => navigation.navigate('GameStart')}
            />
          </View>
        </View>
      </View>
    </ScreenMask>
  )
}

const styles = StyleSheet.create({
  titleBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBlock: {
    width: RW(50),
    height: RW(50),
    borderRadius: RW(50),
    marginRight: RW(15),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: RW(50),
  },
  title: {
    textAlign: 'center',
    ...font('bold', 24, WHITE),
    marginVertical: RH(30),
  },
  commandName: {
    ...font('medium', 20, ICON),
    textAlign: 'left',
  },
  mainContainer: {
    flex: 1,
  },
  commandsConatainer: {
    paddingTop: RH(100),
  },
  eachCommandBox: {
    flexDirection: 'row',
    paddingVertical: RH(10),
  },
})
export default PlayNow
