import React from 'react';
import ScreenMask from "@/components/wrappers/screen";
import {Text, View} from "react-native";
import style from "@/screens/Profile/style";
import {RH} from "@/theme/utils";

function Index(props) {
    return (
        <ScreenMask>
            <View style={{...style.container , marginTop: RH(16)}}>
                <Text style={style.title}>Моя галерея</Text>
                <View style={style.galleryTextBlock}>
                    <Text style={style.GalleryTitle}>Галерея пуста.</Text>
                    <Text style={style.galleryText}>Фото/Видео добавляются после вашего  подтверждения  по окончанию проведенной игры.</Text>
                </View>
            </View>
        </ScreenMask>
    );
}

export default Index;
