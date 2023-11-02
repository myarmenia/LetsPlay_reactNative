import { Platform, Pressable, Text, View } from 'react-native'
import React from 'react'
import { RH, RW, font } from '@/theme/utils'
import Row from '@/components/wrappers/row'
import { WHITE } from '@/theme/colors'
import FastImage from 'react-native-fast-image'
import LinearGradient from 'react-native-linear-gradient'
import moment from 'moment'

const TournamentItem = ({ item, onPress }) => {
    const data = moment(item?.start_date).format('DD.MM.YY, HH:mm,')
    return (
        <Pressable
            onPress={onPress}
            style={{
                maxHeight: RH(70),
                minHeight: (58),
                width: RW(340),
                alignSelf: 'center',
                marginVertical: RH(5),
            }}
        >

            <LinearGradient
                colors={['#7DCE8A', '#4D7CFE']}
                // start={{ x: 0 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1, borderRadius: 5 }}
            >
                <Row
                    wrapper={{
                        width: '95%',
                        height: '100%',
                        paddingHorizontal: Platform.OS == 'android' ? RW(10) : 0,
                        justifyContent: 'flex-start',
                        position: 'absolute',
                        alignSelf: 'center',
                    }}
                >
                    <FastImage
                        style={{ height: RW(30), width: '10%', marginRight: RW(20) }}
                        source={require('../../../../assets/imgs/tournir.png')}
                        resizeMode="contain"
                    />
                    <Text style={{ ...font('bold', 16, WHITE), width: '85%' }} numberOfLines={3}>
                        {`${data} ${item.address_name}`}

                    </Text>
                </Row>
            </LinearGradient>

        </Pressable>
    )
}

export default TournamentItem
