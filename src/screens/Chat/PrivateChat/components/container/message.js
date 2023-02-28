import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICON, MESSAGE_CONTAINER, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import Row from '@/components/wrappers/row'

const Message = ({ message, id, myMessage }) => {
  if (myMessage) {
    return (
      <View style={[styles.right, { marginTop: RH(25) }]} key={id}>
        <Row>
          <View
            style={[
              styles.container,
              { backgroundColor: ICON, marginLeft: RW(10), width: RW(178) },
            ]}
          >
            <Text style={styles.label}>{message}</Text>
          </View>
        </Row>
      </View>
    )
  }

  return (
    <View
      key={id}
      style={[
        styles.container,
        styles.left,
        { backgroundColor: MESSAGE_CONTAINER, marginTop: RH(25) },
      ]}
    >
      <Text style={[styles.label]} secureTextEntry={true}>
        {message}
      </Text>
    </View>
  )
}

export default memo(Message)

const styles = StyleSheet.create({
  container: {
    width: RW(270),
    minHeight: RH(42),
    borderRadius: RW(10),
    paddingVertical: RH(10),
    paddingHorizontal: RW(14),
  },
  left: {
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
  },
  right: {
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0,
  },
  label: {
    ...font('regular', 16, WHITE, 20),
    flexWrap: 'wrap',
  },
})
