import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

import ProfileActiveIcon from '@/assets/imgs/profileActive'
import { TAB_BAR_COLOR, TRANSPARENT } from '@/theme/colors'
import ChatActiveIcon from '@/assets/imgs/chatActive'
import ProfileIcon from '@/assets/imgs/profile'
import { TAB_BAR_HEIGHT } from '@/constants'
import { RH, shadow } from '@/theme/utils'
import ChatIcon from '@/assets/imgs/chat'

const TabBarButton = ({ state, descriptors, navigation, setIsHome, tabBarHidden }) => {
  return (
    <View style={{...styles.tabBar,  display:tabBarHidden?'none':'flex'}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]

        const isFocused = state.index === index
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })
          setIsHome(route.name === 'Home')
          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true })
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        let TabIcon
        if (route.name === 'Profile') {
          TabIcon = isFocused ? ProfileActiveIcon : ProfileIcon
        } else if (route.name === 'Chat') {
          TabIcon = isFocused ? ChatActiveIcon : ChatIcon
        }

        if (!TabIcon) return null

        return (
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            key={index.toString()}
            onLongPress={onLongPress}
            accessibilityRole="button"
            testID={options.tabBarTestID}
            style={{ alignItems: 'center' }}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            accessibilityState={isFocused ? { selected: true } : {}}
          >
            <TabIcon height={RH(27)} width={RH(27)} />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default TabBarButton

const styles = StyleSheet.create({
  tabBar: {
    // display:'none',
    alignItems: 'center',
    flexDirection: 'row',
    height: TAB_BAR_HEIGHT,
    paddingVertical: RH(20),
    borderTopColor: TRANSPARENT,
    justifyContent: 'space-around',
    backgroundColor: TAB_BAR_COLOR,
    ...shadow,
  },
})
