import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import styles from '../style'
import style from './style'
import {RH, RW} from "@/theme/utils";
import SvgForTariff from "@/assets/svgs/svgForTariff";

function Tariff(props) {
    return (
        <ScreenMask style={{paddingHorizontal: 0}}>
            <Text style={{...styles.title , marginVertical: RH(43) , marginLeft: 'auto' , marginRight: 'auto'}}>Тарифы</Text>
            <Text style={{...style.bannerTitle , marginTop: RH(43) , marginLeft: RW(24)}}>Документы:</Text>
            <TouchableOpacity style={{...styles.linkBlock , borderTopWidth: RW(1) , paddingLeft: RW(21), paddingRight: RW(21), paddingVertical: RH(25)}}>
                <SvgForTariff style={style.tariffSvg}/>
                <Text style={style.tariffText}>Политика конфиденциальности для мобильного приложения "Играем"</Text>
            </TouchableOpacity>
        </ScreenMask>
    );
}

export default Tariff;
