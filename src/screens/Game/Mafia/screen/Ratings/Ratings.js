import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import VectorIcon from '@/assets/svgs/vectorSvg'
import {font, RH, RW} from '@/theme/utils'
import {GRAY, ICON, WHITE} from '@/theme/colors'
import LightButton from '@/assets/imgs/Button'
import Index from "@/components/modal";
import {useNavigation} from "@react-navigation/native";

const Ratings = () => {
    const [modalVisible, setIsVisible] = useState(true)
    const [data, setData] = useState([
        {id: 1, img: require('@/assets/imgs/detail.png'), boolean: false},
        {id: 2, img: require('@/assets/imgs/detail.png'), boolean: false},
        {id: 3, img: require('@/assets/imgs/detail.png'), boolean: false},
        {id: 4, img: require('@/assets/imgs/detail.png'), boolean: false},
        {id: 5, img: require('@/assets/imgs/detail.png'), boolean: false},
        {id: 6, img: require('@/assets/imgs/detail.png'), boolean: false},
        {id: 7, img: require('@/assets/imgs/detail.png'), boolean: false},
        {id: 8, img: require('@/assets/imgs/detail.png'), boolean: false},
        {id: 9, img: require('@/assets/imgs/detail.png'), boolean: false},
        {id: 10, img: require('@/assets/imgs/detail.png'), boolean: false},
        {id: 11, img: require('@/assets/imgs/detail.png'), boolean: false},
        {id: 12, img: require('@/assets/imgs/detail.png'), boolean: false},
    ])
    const navigation = useNavigation()


    return (
        <ScreenMask>
            <ScrollView>
                <View style={styles.common}>


                    <View style={styles.peopleInfo}>
                        {data.map((item, index) => (
                            <TouchableOpacity
                                key={item.id}
                                style={styles.imgView}
                            >
                                <Image source={item.img} style={styles.imgData}/>
                            </TouchableOpacity>
                        ))}
                    </View>

                </View>
                <View style={styles.modals}>
                    <Index
                        modalVisible={modalVisible}
                        setIsVisible={setIsVisible}
                        item={
                            <View style={styles.modals}>
                                <View style={styles.detailGray}>
                                    <Image source={require("@/assets/mafiaPng/PLeaceMen.png")}/>
                                </View>
                                <View style={styles.gameOver}>
                                    <Text style={styles.placeMan}>
                                        Игра окончена. Победили мирные жители.
                                    </Text>
                                </View>
                                <View style={{paddingBottom: 38}}>
                                    <LightButton
                                        size={{width: 281, height: 48}}
                                        labelStyle={styles.invitePlayers}
                                        label={'Рейтинги'}
                                        white={'white'}
                                        background={'#7DCE8A'}
                                        bgColor={'#4D7CFE'}
                                        onPress={() => navigation.navigate("RatingPlayer")}
                                    />
                                </View>
                            </View>
                        }
                    />
                </View>

            </ScrollView>
        </ScreenMask>
    )
}
const styles = StyleSheet.create({
    common: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    youPlaceMen: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: RH(36),
        paddingHorizontal: RW(20),
        borderBottomWidth: RW(1),
        borderBottomColor: GRAY,
        width: '100%',
    },
    img: {
        width: RW(46),
        height: RW(55),
    },
    infoMafia: {
        paddingRight: RW(90),
        paddingLeft: RW(10),
    },
    text: {
        ...font('inter', 14, WHITE, 24),
        fontWeight: '700',
        letterSpacing: 0.01,
    },
    textPlaceMen: {
        ...font('inter', 20, ICON, 24),
        fontWeight: '700',
        letterSpacing: 0.01,
        paddingBottom: RH(5.83),
    },
    morning: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: RH(15.84),
    },
    morningText: {
        ...font('inter', 24, WHITE, 24),
        fontWeight: '700',
        letterSpacing: 0.01,
        paddingVertical: RH(5),
    },
    imgView: {
        paddingHorizontal: RW(10.29),
        margin: RW(10),
        paddingVertical: RH(20),
    },
    imgData: {
        width: 76,
        height: 150,
        resizeMode: 'contain',
    },
    peopleInfo: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    borderRadius: {
        borderRadius: RW(20),
        borderWidth: 1,
        borderColor: '#7DCE8A',
        paddingHorizontal: RW(10.29),
        margin: RW(10),
        paddingVertical: RH(20),
    },
    modals: {
        width: RW(306),
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#001034",
        borderRadius: RW(20),
        marginHorizontal: RW(35)
    },
    icon: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    Texts: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        color: WHITE
    },
    night: {
        ...font("inter", 24, ICON, 24),
        fontWeight: "700",
        letterSpacing: 0.01,
        marginVertical: RH(24.33)
    },
    playerOut: {
        ...font("inter", 24, WHITE, 24),
        fontWeight: "700",
        letterSpacing: 0.01,
        marginBottom: RH(24.33)
    },
    detailGray: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    placeMan: {
        ...font("inter", 24, WHITE, 24),
        fontWeight: "700",
        letterSpacing: 0.01,
        marginTop: RH(15.16),

    },
    gameOver: {
        width: RW(218),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: RH(15.16)
    }
})
export default Ratings
