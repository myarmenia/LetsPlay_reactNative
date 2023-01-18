import React, {useEffect, useMemo, useState} from 'react'
import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import Ticket from '@/screens/GameCreating/GameTicket/ticket'
import style from '@/screens/GameCreating/style'
import Button from '@/assets/imgs/Button'
import {RH, RW} from '@/theme/utils'
import Modal from '@/components/modal'
import EditSvg from "@/assets/svgs/editSvg";
import CheckedCheckbox from "@/assets/svgs/checkedCheckbox";
import ShareSvg from "@/assets/svgs/shareSvg";

function Index(props) {
    const {navigation, route} = props
    const {flag, game, data} = route.params
    const [isVisible, setIsVisible] = useState(false)
    const [success, setSuccess] = useState(false)
    const [modalClose, setModalClose] = useState(true)
    useEffect(() => {
        if (flag) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [])
    return (
        <ScreenMask style={{paddingHorizontal: 0}}>
            <View style={{height: '100%'}}>
                <View style={style.ticketBlock}>
                    <Ticket data={data} game={game}/>
                </View>
                <View style={style.gameTicketButtonsBlock}>
                    <TouchableOpacity onPress={() => {navigation.navigate('GameCreating', {data: game})}}>
                    <EditSvg/>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.shareButton}>
                    <ShareSvg/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Home', {flag: true, game, data})}>
                        <CheckedCheckbox/>
                    </TouchableOpacity>
                    {/*<Button*/}

                    {/*    size={{width: 192, height: 36}}*/}
                    {/*    label={'Редактировать'}*/}
                    {/*/>*/}
                    {/*<Button*/}
                    {/*    size={{width: 166, height: 36}}*/}
                    {/*    label={'Готово'}*/}
                    {/*/>*/}
                </View>
                <View style={{position: 'absolute'}}>
                    <Modal
                        modalClose={modalClose}
                        modalVisible={isVisible}
                        setIsVisible={setIsVisible}
                        btnClose={false}
                        item={
                            !success ? (
                                <View style={style.firstTicketModalBlock}>
                                    <Text style={{...style.text, width: RW(209), marginBottom: 0}}>
                                        Для завершения необходимо оплатить стоимость комиссий за организацию платной
                                        игры.
                                    </Text>
                                    <Text style={{...style.text, marginTop: 0, marginBottom: RH(42)}}>
                                        {' '}
                                        Стоимость: 100 р
                                    </Text>
                                    <Button
                                        onPress={() => {
                                            setSuccess(true)
                                            setModalClose(false)
                                        }}
                                        size={{width: 144, height: 36}}
                                        label={'Оплатить'}
                                    />
                                </View>
                            ) : (
                                <View style={style.secondTicketModalBlock}>
                                    <Text style={style.text}>Оплата прошла успешна. Вы успешно создали игру!</Text>
                                </View>
                            )
                        }
                    />
                </View>
            </View>
        </ScreenMask>
    )
}

export default Index
