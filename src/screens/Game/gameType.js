import React, { memo, useEffect, useMemo, useState } from 'react'
import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import { styles } from '@/screens/Game/Play/style'
import ArrowDown from '@/assets/svgs/arrowDown'
import CheckboxNotChecked from '@/assets/svgs/checkboxNotChecked'
import CheckedCheckbox from '@/assets/svgs/checkedCheckbox'
import CircleAdd from '@/components/buttons/circleAdd'
import { useSelector } from 'react-redux'

function GameType({ setShowGameTypes, gameTypes, setGameTypes, errorMessage }) {
  const [showDropDown, setShowDropDown] = useState(false)
  const { nameOfGames } = useSelector(gameSlice => gameSlice.games)
  const [selected, setSelected] = useState('Выбрать игру')
  const checkElem = elm => {
    setGameTypes([
      ...gameTypes.map(elem => {
        if (elem.id === elm.id) {
          return { ...elm, checked: !elm.checked }
        } else {
          return elem
        }
      }),
    ])
  }
  const gameTypeBtns = [
    { id: 1, name: 'Активные игры' },
    { id: 2, name: 'Настольные игры' },
  ]
  useEffect(() => {
    selected !== 'Выбрать игру'
      ? setGameTypes([...gameTypes.map(elm => ({ ...elm, checked: false }))])
      : null
  }, [selected])

  return (
    <View style={styles.gameTypeContainer}>
      <Pressable
        style={showDropDown ? styles.gameTypeBtn : styles.openedGameBtn}
        onPress={() => {
          setShowDropDown(!showDropDown)
          if (selected === 'Активные игры') {
            setSelected('Активные игры')
          }
        }}
      >
        <Text style={styles.gameTypeBtnText}>{selected}</Text>
        <View style={styles.arrowDown}>
          {!showDropDown ? (
            <ArrowDown />
          ) : (
            <View style={{ transform: [{ rotate: '180deg' }] }}>
              <ArrowDown />
            </View>
          )}
        </View>
      </Pressable>
      {showDropDown
        ? gameTypeBtns.map(elm => {
            return (
              <Pressable
                key={elm.id}
                style={styles.gameTypeLastBtn}
                onPress={() => {
                  // setGameTypes(types)
                  setSelected(elm.name)
                  setShowGameTypes(showDropDown)
                  setShowDropDown(!showDropDown)
                  // setGameKindOf(elm.name)
                }}
              >
                <Text style={styles.gameTypeBtnText}>{elm.name}</Text>
              </Pressable>
            )
          })
        : null}
      <View>
        {selected !== 'Выбрать игру' ? (
          <>
            {selected == 'Активные игры'
              ? gameTypes.slice(0, 7)?.map(elm => {
                  return (
                    <TouchableOpacity
                      onPress={() => checkElem(elm)}
                      style={styles.checkCheckbox}
                      key={elm.id}
                    >
                      {!elm.checked ? <CheckboxNotChecked /> : <CheckedCheckbox />}
                      <Text style={styles.typeText}>{elm.name}</Text>
                    </TouchableOpacity>
                  )
                })
              : gameTypes?.slice(7, gameTypes?.length)?.map(elm => {
                  return (
                    <TouchableOpacity
                      onPress={() => checkElem(elm)}
                      style={styles.checkCheckbox}
                      key={elm.id}
                    >
                      {!elm.checked ? <CheckboxNotChecked /> : <CheckedCheckbox />}
                      <Text style={styles.typeText}>{elm.name}</Text>
                    </TouchableOpacity>
                  )
                })}
            {/* <View style={styles.circleAddBox}>
              <CircleAdd />
              <Text style={styles.addGameText}>Добавить игру</Text>
            </View> */}
          </>
        ) : null}
      </View>
      {errorMessage && !showDropDown && <Text style={styles.errorText}>Обязательное поле</Text>}
    </View>
  )
}

export default GameType
