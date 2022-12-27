import React, {useMemo, useState} from 'react'
import {View, Text, Pressable, TouchableOpacity} from 'react-native'
import {styles} from '@/screens/Game/Play/style'
import ArrowDown from '@/assets/svgs/arrowDown'
import CheckboxNotChecked from '@/assets/svgs/checkboxNotChecked'
import CheckedCheckbox from '@/assets/svgs/checkedCheckbox'

function GameType({
                      setShowGameTypes,
                      gameTypes,
                      setGameTypes,
                      types,
                      errorMessage,
                      typesActive
                  }) {
    const [showDropDown, setShowDropDown] = useState(false)
    // GameTypeEdited1
    const [selected, setSelected] = useState('Выбрать игру')
    const [gameKindOf, setGameKindOf] = useState('')
    useMemo(()=>{
        if (gameKindOf === 'Активные игры'){
            setGameTypes(typesActive)
        }
    },[selected])
    const checkElem = id => {
        setGameTypes([
            ...gameTypes.map(elem => {
                if (elem.id === id) {
                    return {...elem, checked: !elem.checked}
                } else {
                    return elem
                }
            }),
        ])
    }
    const gameTypeBtns = [
        {id: 1, name: 'Активные игры'},
        {id: 2, name: 'Настольные игры'},
    ]
    return (
        <View style={styles.gameTypeContainer}>
            <Pressable
                style={showDropDown ? styles.gameTypeBtn : styles.openedGameBtn}
                onPress={() => {
                    setShowDropDown(!showDropDown)
                    if (selected === 'Активные игры'){
                        setGameTypes(typesActive)
                    }
                }}
            >
                <Text style={styles.gameTypeBtnText}>{selected}</Text>
                <View style={styles.arrowDown}>
                    {!showDropDown ? (
                        <ArrowDown/>
                    ) : (
                        <View style={{transform: [{rotate: '180deg'}]}}>
                            <ArrowDown/>
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
                                setGameTypes(types)
                                setShowGameTypes(showDropDown)
                                setShowDropDown(!showDropDown)
                                setSelected(elm.name)
                                setGameKindOf(elm.name)
                            }}
                        >
                            <Text style={styles.gameTypeBtnText}>{elm.name}</Text>
                        </Pressable>
                    )
                })
                : null}
            <View>
                {selected !== 'Выбрать игру'
                    ? gameTypes?.map(elm => {
                        return (
                            <TouchableOpacity
                                onPress={() => checkElem(elm.id)}
                                style={styles.checkboxBox}
                                key={elm.id}
                            >
                                {!elm.checked ? <CheckboxNotChecked/> : <CheckedCheckbox/>}
                                <Text style={styles.typeText}>{elm.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                    : null}
            </View>
            {errorMessage && !showDropDown && <Text style={styles.errorText}>Обязательное поле</Text>}
        </View>
    )
}

export default GameType
