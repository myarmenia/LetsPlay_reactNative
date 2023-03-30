import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH, RW } from '@/theme/utils'
import { _storageUrl } from '@/constants'
import { WHITE } from '@/theme/colors'
import { useSelector } from 'react-redux'

const SearchUserResult = ({ route }) => {
  const { findedPlayers } = useSelector(({ teams }) => teams)
  console.log('findedTeam', findedTeam)

  return (
    <ScreenMask>
      <ScrollView>
        <Text style={styles.pageTitle}>Результат поиска</Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {findedPlayers.map((user, i) => {
            return <Text>xxxx</Text>
          })}
        </View>
      </ScrollView>
    </ScreenMask>
  )
}

export default SearchUserResult

const styles = StyleSheet.create({
  pageTitle: {
    ...font('regular', 20, WHITE),
    textAlign: 'center',
    paddingVertical: RH(20),
  },
})
