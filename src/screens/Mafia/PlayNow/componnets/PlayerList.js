import React from 'react'
import { ScrollView, TouchableOpacity, View, StyleSheet } from 'react-native'
import User from '@/assets/imgs/user/user'
import { font, RH, RW } from '@/theme/utils'
import { WHITE } from '@/theme/colors'

function PlayerList({ players, isSelected = false, activePlayers = [], setActivePlayers }) {
  const handlerActiveUser = (id) => {
    if (isSelected) {
      if (activePlayers.includes(id)) {
        const temp = activePlayers.filter((item, i) => item !== id)
        setActivePlayers(temp)
      } else {
        setActivePlayers([...activePlayers, id])
      }
    }
  }
  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {players.map((item, i) => (
          <TouchableOpacity
            onPress={() => handlerActiveUser(item.id)}
            key={i}
            style={activePlayers.includes(item.id) && isSelected ? styles.activeItem : styles.item}
          >
            <User
              size={90}
              user={item}
              onPressItem={
                !isSelected
                  ? {
                      item: <User user={item} size={390} />,
                      modalClose: false,
                    }
                  : null
              }
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

export const styles = StyleSheet.create({
  btn: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: RH(85),
  },
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
  scroll: {
    width: '90%',
    height: RH(600),
    flexGrow: 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },

  item: {
    padding: RW(3),
    marginTop: RH(30),
  },
  activeItem: {
    padding: RW(3),
    marginTop: RH(30),
    borderWidth: 1,
    borderColor: '#7DCE8A',
    borderRadius: RW(15),
  },
})

export default PlayerList
