import React, { memo, useEffect, useRef, useState, useId } from 'react'
import { Keyboard, Pressable, StyleSheet, Text, View } from 'react-native'
import { ICON, MESSAGE_CONTAINER, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import Button from '@/assets/imgs/Button'
import Row from '@/components/wrappers/row'

const Message = ({ message, id }) => {
  const [change, setChange] = useState(true)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [text, setText] = useState(message.text)
  const inputRef = useRef(null)
  Keyboard.addListener('keyboardDidHide', () => {
    setChange(false)
  })

  if (message.type === 'BTN') {
    return (
      <View
        key={id}
        style={{ alignSelf: 'flex-end', width: RW(170), height: RH(36), marginVertical: RH(19) }}
      >
        <Button
          size={{ width: 170, height: 36 }}
          label={message.text}
          onPress={() => {
            btnDisabled ? message.ev() : null
            setBtnDisabled(false)
          }}
        />
      </View>
    )
  }
  useEffect(() => {
    if (change) {
      inputRef.current?.focus()
    }
  }, [change])
  if (message.position != 'left') {
    return (
      <View style={[styles.right, { marginTop: RH(25) }]} key={id}>
        <Pressable
          onPress={() => {
            // setChange(true)
          }}
        >
          <Row>
            {/* <PencelSvg /> */}
            <View
              style={[
                styles.container,
                { backgroundColor: ICON, marginLeft: RW(10), width: RW(178) },
              ]}
            >
              {/* <TextInput
                ref={inputRef}
                style={styles.label}
                editable={change}
                value={text}
                onChangeText={setText}
  
              ></TextInput> */}
              <Text style={styles.label}>{text}</Text>
            </View>
          </Row>
        </Pressable>
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
        message.type === 'FILE' ? { flexDirection: 'row' } : null,
      ]}
    >
      {message.type === 'FILE' ? message.svg : null}
      <Text
        style={[styles.label, message.error && { color: 'rgba(214, 0, 0, 1)' }]}
        secureTextEntry={true}
      >
        {message.error && 'Ошибка: '}
        {message.text}
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
