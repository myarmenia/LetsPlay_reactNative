import { Pressable, StyleSheet, Text, View, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RH, RW, font } from '@/theme/utils'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import StarSvg from '@/assets/svgs/StarSvg'
import User from '@/components/User/User'
import Row from '@/components/wrappers/row'
import AddSvg from '@/assets/svgs/addSvg'
import CircleMain from '@/components/buttons/Circle/CircleMain'
import CheckSvg from '@/assets/svgs/CheckSvg'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

const RatePlayerModal = (props) => {
    let { item, visible, setVisible, setRating, invite } = props
    const [addedToTeam, setAddedToTeam] = useState(false)
    const navigation = useNavigation()


    return (
        <Modal
            visible={visible}
            transparent
            animated
            animationType="fade"
            statusBarTranslucent>
            <Pressable style={styles.container} onPress={() => { setVisible(false) }}>
                <Pressable style={styles.modal} onPress={(e) => { e.preventDefault() }}>
                    <Text style={[styles.text, styles.headerText]}>
                        По умолчанию все неоцененные вами  участники получают
                    </Text>
                    <View style={styles.starsContainer}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elm, key) => (
                            <Pressable
                                key={key}
                                onPress={() => {
                                    setRating(elm, item)
                                }}
                            >
                                <StarSvg fill={!item?.rating ? elm <= 1 : elm <= item?.rating} />
                            </Pressable>
                        ))}
                    </View>

                    <User size={250} user={item} />
                    <Row wrapper={styles.row}>
                        <Text style={styles.text}>Хотите пригласить игрока в свою команду?</Text>
                        <Pressable
                            onPress={() => {
                                if (!addedToTeam) {
                                    navigation.navigate('TeamNavigator', {
                                        screen: 'MyTeam',
                                        params: {
                                            navigateFrom: 'addToTeamFromTournament',
                                            id: item._id,
                                        },
                                    })
                                }
                            }}
                        >
                            <CircleMain
                                size={32}
                                label={addedToTeam ? <CheckSvg /> : <AddSvg plusColor={'#fff'} strokeWidth={3} />}
                            />
                        </Pressable>
                    </Row>
                </Pressable>
            </Pressable>
        </Modal>
    )
}

export default RatePlayerModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(1,1,6, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: RH(30)

    },
    modal: {
        width: '95%',
        height: RH(500),
        backgroundColor: LIGHT_LABEL,
        borderRadius: RW(20),
        padding: RW(20),
        marginHorizontal: RW(30.5),
        alignSelf: 'center',
        alignItems: 'center'
    },
    starsContainer: {
        flexDirection: 'row',
        marginBottom: RH(30),
    },
    row: {
        marginTop: RH(20),

        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
    },
    text: {
        ...font('inter', 16, WHITE),
        width: '80%',
    },
    headerText: {
        textAlign: 'center',
        marginBottom: RH(9),
        ...font('inter', 17, WHITE),

    }
})
