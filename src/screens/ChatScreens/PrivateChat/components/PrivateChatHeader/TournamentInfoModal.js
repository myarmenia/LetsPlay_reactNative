import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import { RH, RW } from '@/theme/utils'
import { FONT_INTER_REGULAR } from '@/theme/fonts'
import ArrowRight from '@/assets/svgs/ArrowRight'
import Modal from '@/components/modal'
import User from '@/components/User/User'
import { useSelector } from 'react-redux'
import moment from 'moment'
import Share from 'react-native-share'
import ViewShot from "react-native-view-shot";

const TournamentInfoModal = ({ modalVisible, setModalVisible, id }) => {
    const viewShot = React.useRef();
    const { selectedTournament } = useSelector(({ tournament }) => tournament)
    const genders = { m: 'М', f: 'Ж', 'm/f': 'Без ограничений' }

    const share = async () => {
        viewShot.current.capture().then(async (uri) => {
            const shareOptions = {
                message: 'Информация о турнире',
                url: uri,
            };
            await Share.open(shareOptions);
        }).catch((err) => {
        })

    }


    const countFrom = selectedTournament.team_tourney ? selectedTournament.number_of_teams_from : selectedTournament.number_of_participants_from

    const countTo = selectedTournament.team_tourney ? selectedTournament.number_of_teams_to : selectedTournament.number_of_participants_to



    return (
        <Modal
            modalVisible={modalVisible}
            setIsVisible={setModalVisible}
            btnClose={false}
            item={
                <ViewShot
                    ref={viewShot}
                    options={{
                        format: "jpg",
                        quality: 0.9,
                        fileName: 'Информация о турнире'
                    }}
                >
                    <View style={styles.modalWrapper}>
                        <View style={styles.regulationBlock}>
                            <View style={styles.rowBox}>
                                <Pressable onPress={share}>
                                    <ArrowRight />
                                </Pressable>

                            </View>
                            <View style={styles.titleColumnBox}>
                                <Text style={styles.title}>Тип турнира: {selectedTournament.game_name}</Text>
                                <Text style={styles.title}>
                                    Название турнира: {selectedTournament?.name}
                                </Text>
                                <Text style={styles.title} dataDetectorType='link'>Описание турнира: {selectedTournament.description}
                                </Text >
                                <Text style={styles.title}>
                                    Количество
                                    {selectedTournament.team_tourney ? ' команд' : ' участников'}: от {countFrom} до {countTo}
                                </Text>

                                {!selectedTournament.team_tourney
                                    &&
                                    <><Text style={styles.title}>
                                        Возраст участников: {selectedTournament.age_restrictions_from}-{selectedTournament.age_restrictions_to}
                                    </Text><Text style={styles.title}>
                                            Пол участников:  {genders[selectedTournament?.players_gender]}
                                        </Text></>}
                                <Text style={styles.title}>
                                    Дата турнира: {moment(selectedTournament.start_date).format('DD.MM.YYYY')}
                                </Text>
                                <Text style={styles.title}>
                                    Время: {moment(selectedTournament.start_date).format('HH:mm')}
                                </Text>
                                <Text
                                    selectable
                                    style={styles.title}>
                                    Адрес проведения турнира: {selectedTournament?.address_name}
                                </Text>


                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: RH(10) }}>
                                    <Text style={[styles.title, { paddingTop: 0 }]}>Организатор турнира:</Text>
                                    <View style={{ left: 10 }}>
                                        <User
                                            size={30}
                                            user={selectedTournament?.user}
                                            onPressItem={{
                                                item: <User size={370} user={selectedTournament?.user} />,
                                                modalClose: false,
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ViewShot>
            }
        />
    )
}
export default TournamentInfoModal

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
