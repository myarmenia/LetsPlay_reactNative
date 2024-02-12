import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { RH, RW, font } from '@/theme/utils'
import { _storageUrl } from '@/constants'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import { WHITE } from '@/theme/colors'
import { useDispatch } from 'react-redux'
import OrganizatorSvg from '@/assets/svgs/OrganizatorSvg'
import { useSelector } from 'react-redux'
import { saveTeamDataForCreating } from '@/store/Slices/TeamSlice'

const EachCommand = ({ command, data }) => {

  const [back, setBack] = useState(false)
  const { user } = useSelector(({ auth }) => auth)
  const needAdminIcon = useMemo(() => {
    if (command.user._id === user._id) {
      return true
    } else {
      const index = command.admins.findIndex(item => item._id === user._id)
      if (index === -1) {
        return false
      } else {
        return true
      }
    }
  }, [command.user._id, user._id])

  const dispatch = useDispatch()
  const navigation = useNavigation()

  return (
    <Pressable
      style={styles.container}
      onPressIn={() => {
        setBack(true)
      }}
      onPressOut={() => {
        if (data?.navigateFrom == 'RatePlayerModal') {
          navigation.navigate('CreateGameNavigator', {
            screen: 'RatePlayers',
            params: { ...data.body, navigateFrom: 'MyTeam', inviteCommand: command },
          })
        } else {
          setBack(false)
          dispatch(saveTeamDataForCreating(command))
          navigation.navigate('MyTeamInfo')
        }
      }}
    >

      <LinearGradient
        colors={['#7DCE8A', '#4D7CFE']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0 }}
        useAngle={true}
        angle={105}
        angleCenter={{ x: 0.5, y: 0.5 }}
        style={[styles.gradientStyle, { opacity: !back ? 0.8 : 0.6 }]}>
        <View style={styles.teamContainer}>
          <FastImage
            style={styles.image}
            source={{ uri: _storageUrl + command?.img }}
            resizeMode="cover"
          />
          <View style={styles.textBlock}>
            <Text style={styles.text} numberOfLines={1}>{command.name} </Text>
            <Text style={styles.text} numberOfLines={1}>{command.address_name}</Text>
            <Text style={styles.text} numberOfLines={1}>{command.id}</Text>
          </View>
        </View>
        {needAdminIcon && <View style={styles.organaizerSGV}><OrganizatorSvg /></View>}
      </LinearGradient>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: RW(395),
    height: RH(111),
    marginVertical: RW(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RW(10),
    paddingHorizontal: RH(5),
    paddingVertical: RH(10),
  },
  teamContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: RH(80),
    aspectRatio: 1,
    borderRadius: RH(40),
  },
  text: {
    ...font('bold', 14, WHITE),
  },
  textBlock: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
    marginLeft: RW(15),

  },
  organaizerSGV: {
    position: 'absolute',
    top: RH(8),
    right: RH(8)
  },


})

export default EachCommand
