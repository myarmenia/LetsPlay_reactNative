import React from "react";
import {Text, View} from "react-native";
import style from "./style";
import Radio from "@/components/checkbox/radio";
import {RW} from "@/theme/utils";

const ThirdBlock = (props) => {
    const {title , data, setData, type, list , setFlag} = props
    return (
        <View>
            <Text style={{...style.titles, marginBottom: RW(23)}}>{title}</Text>
            <Radio data={data} setData={setData} setFlag={setFlag} type={type} margin={RW(30)} list={list}/>
        </View>
    )
}
export default ThirdBlock
