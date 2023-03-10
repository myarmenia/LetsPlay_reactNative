import React, {useState, useEffect} from "react";
import {View, TextInput, StyleSheet, Text, TouchableOpacity, ToastAndroid, Alert} from "react-native"
import ScreenMask from "@/components/wrappers/screen";
import {font, RH, RW} from "@/theme/utils";
import {BACKGROUND, ICON, LIGHT_LABEL, RADIO_TEXT, WHITE} from "@/theme/colors";
import DownloadingIcon from "@/assets/svgs/downloadingSvg";
import LightButton from "@/assets/imgs/Button";
import {launchImageLibrary} from "react-native-image-picker";
import Index from "@/components/modal";
import style from "@/screens/GameCreating/style";

const CreateTeamTitle = () => {
    const [avatar, setAvatar] = useState("")
    const [modalVisible, setModalVisible] = useState(false)
    const [teamName, setTeamName] = useState('')
    const [teamAddress, setTeamAddress] = useState('')
    const [errorText, setErrorText] = useState(false)

    console.log(teamName, teamAddress)
    const setToastMsg = (msg) => {
        ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER)
    }

    const uploadImageHandle = () => {
        let options = {
            mediaType: "photo",
            quality: 1,
            includeBase64: false
        }
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                setToastMsg("Cancelled image selection")
            } else if (response.errorCode === "permission") {
                setToastMsg("permission not satsified")
            } else if (response.errorCode === "others") {
                setToastMsg(response.errorMessage)
            } else if (response.assets[0].fileSize > 2097152) {
                Alert.alert(
                    "Maximum image size exceeded",
                    "Please choose image under 1 MB",
                    [{text: "Ok"}]
                )
            } else {
                setAvatar(response.assets[0])
            }
        })
    }

    return (
        <ScreenMask>
                <View style={{height: '100%'}}>
                    <View style={styles.inputsView}>
                        <View style={styles.inputBlock}>
                        <TextInput
                            placeholder={"???????????????? ??????????????"}
                            placeholderTextColor={ICON}
                            style={styles.inputs}
                            onChangeText={(value) => setTeamName(value)}
                        />
                        {!teamName && errorText ? <Text style={style.errorText}>???????????????????????? ???????? ?????? ????????????????????</Text> : null}
                        </View>
                        <View style={styles.inputBlock}>
                        <TextInput
                            placeholder={"?????????? ???????????????????? ??????????????"}
                            style={styles.inputs}
                            placeholderTextColor={ICON}
                            onChangeText={(value) => setTeamAddress(value)}
                        />
                        {!teamAddress && errorText ? <Text style={style.errorText}>???????????????????????? ???????? ?????? ????????????????????</Text> : null}
                        </View>
                    </View>
                    <TouchableOpacity style={styles.downloadingImg} onPress={uploadImageHandle}>
                        <DownloadingIcon/>
                        <View>
                            <Text style={styles.downloadingIcon}>
                                ?????????????????? ?????????????? ??????????????
                            </Text>
                            <Text style={styles.noMore}>???? ?????????? 1????, 240x240px</Text>
                        </View>

                    </TouchableOpacity>
                    <Text style={styles.fileName}>{avatar.fileName}</Text>
                </View>
                <View style={styles.nextBtn}>
                    <LightButton
                        label={"????????????"}
                        size={{width: 144 , height: 36}}
                        onPress={() => {
                            if (teamName && teamAddress) {
                                setModalVisible(true)
                            }else {
                                setErrorText(true)
                            }
                        }}
                    />

                </View>
            <Index
                item={
                    <View style={styles.modal}>
                        <Text style={styles.successTeam}>
                            ???? ?????????????? ?????????????? ??????????????!
                        </Text>
                    </View>
                }
                modalVisible={modalVisible}
                setIsVisible={setModalVisible}
                navigationText={"Home"}
            />
        </ScreenMask>

    )
}
const styles = StyleSheet.create({
    common: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-end",
        height: "100%"
    },
    inputsView: {
        width: '100%',
        marginTop: RH(60),
    },
    inputs: {
        borderWidth: RW(0),
        backgroundColor: BACKGROUND,
        borderRadius: RW(10),
        padding: RW(12),
        color: ICON,
        width: RW(375),
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    inputBlock: {
        width: "100%",
        marginBottom: RH(20)
    },
    downloadingImg: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: RH(31)
    },
    downloadingIcon: {
        ...font("inter", 16, RADIO_TEXT, 19),
        fontWeight: "400",
        marginBottom: RH(5)
    },
    noMore: {
        ...font("inter", 12, RADIO_TEXT, 15),
        fontWeight: "400"
    },
    nextBtn: {
        marginBottom: RH(30),
        marginTop: 'auto',
        marginLeft: "auto",
        marginRight: RW(20)
    },
    fileName: {
        margin: RW(30),
        ...font("inter", 16, WHITE, 20)
    },
    modal: {
        width: RW(306),
        backgroundColor: LIGHT_LABEL,
        borderRadius: RW(20),
        padding: RW(50),
        marginHorizontal: RW(30.5)
    },
    successTeam: {
        ...font("inter", 16, WHITE, 20),
        textAlign: "center"
    }
})
export default CreateTeamTitle
