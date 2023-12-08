import { Pressable, StyleSheet, Text, View, Share } from 'react-native'
import React from 'react'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import { RW } from '@/theme/utils'
import { FONT_INTER_REGULAR } from '@/theme/fonts'
import ArrowRight from '@/assets/svgs/ArrowRight'
import Modal from '@/components/modal'
import User from '@/components/User/user'
import { useSelector } from 'react-redux'
import dateFormater from '../../../../../helpers/dateFormater'

const TeamitemModal = ({ modalVisible, setModalVisible, item }) => {
    console.log(item, 'item');

    const share = async () => {
        try {
            const result = await Share.share({
                message: 'React Native | A framework for building native apps using React',
            })
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            Alert.alert(error.message)
        }
    }
    return (
        <Modal
            modalVisible={modalVisible}
            setIsVisible={setModalVisible}
            btnClose={false}
            item={
                <View style={styles.modalWrapper}>
                    <View style={styles.regulationBlock}>
                        <View style={styles.rowBox}>
                            <Pressable onPress={share}>
                                <ArrowRight />
                            </Pressable>
                        </View>
                        <View style={styles.titleColumnBox}>
                            <Text style={styles.title}>
                                Имя команды: {item?.team?.name}
                            </Text>
                            <Text style={styles.title}>
                                {
                                    item?.between_players ?
                                        'Формат игры: Между игроками команды' :
                                        `Соперник :  ${item.enemy_team_name}`
                                }
                            </Text>
                            <Text style={styles.title}>Тип игры: {item?.game?.name}</Text>
                            {item.format && <Text style={styles.title}>Схема игры: {item?.format}</Text>}


                            <Text style={styles.title}>
                                Дата и время игры: {dateFormater(item?.start_date)}
                            </Text>

                            <Text style={styles.title}>
                                Адрес проведения игры: {item?.address_name}
                            </Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.title}>Участники:</Text>
                                <View style={{ left: 10, flexDirection: 'row' }}>
                                    {[...item.players, ...item.enemy_players].map((item) => {
                                        return <User
                                            size={31}
                                            key={item._id}
                                            user={item}
                                            pressedUser={item}
                                            style={{marginRight: 10}}
                                            onPressItem={{
                                                item: <User 
                                                user={item}
                                                size={370} />,
                                                modalClose: false,
                                            }}
                                        />
                                    })}
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.title}>Организатор игры:</Text>
                                <View style={{ left: 10 }}>
                                    <User
                                        size={31}
                                        onPressItem={{
                                            item: <User size={370} />,
                                            modalClose: false,
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            }
        />
    )
}
export default TeamitemModal

const styles = StyleSheet.create({
    regulationBlock: {
        backgroundColor: LIGHT_LABEL,
        borderRadius: RW(20),
        width: RW(357),
        top: '-5%',
        padding: RW(30),
        alignSelf: 'center',
    },
    rowBox: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    titleColumnBox: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
        alignItems: 'flex-start',
    },
    title: {
        color: WHITE,
        fontSize: RW(14),
        fontFamily: FONT_INTER_REGULAR,
        paddingTop: '5%',
    },
})
