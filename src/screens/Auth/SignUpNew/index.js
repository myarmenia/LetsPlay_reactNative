import React, {useState} from 'react';
import {View} from "react-native";
import ScreenMask from "@/components/wrappers/screen";

function Index(props) {
    const [message, setMessageData]=useState([]);
    const [dataFirstStep, setDataFirstStep]={
        surname:'',
        name:'',
        email:'',
    }
    const [dataSecondStep, setDataSecondStep]=useState({
        "verify_code": '',
        "expired_token": '',
        "password": '',
    })
    return (
        <ScreenMask>

        </ScreenMask>
    );
}

export default Index;
