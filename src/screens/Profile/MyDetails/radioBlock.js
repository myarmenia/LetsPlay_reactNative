import React from 'react';
import {Text, View} from "react-native";
import style from "./style";
import {RW} from "@/theme/utils";
import Radio from "@/components/checkbox/radio";

function RadioBlock(props) {
    const {title , list } = props
    return (
        <View>
            <Text style={style.inputTitle}>{title}</Text>
            <Radio  margin={RW(20)} list={list}/>
        </View>
    );
}

export default RadioBlock;
