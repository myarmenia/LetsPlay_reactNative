import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import ScreenMask from '@/components/wrappers/screen';
import { RH, RW, font } from '@/theme/utils';
import { WHITE } from '@/theme/colors';
import { _storageUrl } from '@/constants';
import LightButton from '@/assets/imgs/Button';
import User from "@/components/User/user"
import BorderGradient from '@/assets/svgs/BorderGradiend';
import { Players } from '@/assets/TestData';

const SelectMembers = ({route}) => {
   const command = route?.params
   const test = [1,2,3,4,5,6,7,8]
   const [reservedUsers, setReservedUsers] = useState([])
   const handleClick = (user)=>{
    if(!reservedUsers.includes(user)){
        setReservedUsers([...reservedUsers, user])
    } else {
        setReservedUsers(reservedUsers.filter(elm=>elm !== user))
    }
   }
   const EachUser = ({user}) => {
    return (
        <View
            style={{
                alignItems:"center",
                justifyContent:"center",
                padding:RW(5)
            }}
      >
       
          <BorderGradient
            height={142}
            width={105}
            opacity={reservedUsers.includes(user)? 1 : 0}
          />
          <Pressable
            style={{
              position: 'absolute',
              zIndex: 65,
            }}
            onPress={() => handleClick(user)}
          >
            <User
              size={100}
              pressedUser={Players[0]}
              zoom={true}
              onPressItem={{
                item: <User size={390} pressedUser={Players[0]} />,
                modalClose: false,
                onClickFunc: () => handleClick(user),
              }}
            />
          </Pressable>
      </View>
    )
   }
  return (
    <ScreenMask>
      <View style={{flex:0.9, justifyContent:"space-between"}}>
        <View style={styles.header}>
            <View style={styles.headerChild}>
            <Image source={{uri:_storageUrl + command?.img}} style={styles.commandImg} resizeMode='cover'/>
           <Text style={styles.teamName}>
             Dinamo
            {/* {command?.name} */}
            </Text>
            </View>
        </View>
        <View style={styles.usersContainer}>
        {test.map((user,i)=>{
            return (
               <EachUser key={i} user={user}/>
            )
        })}
        </View>
        <View style={{alignSelf:"center"}}>
            <LightButton label={"Подтвердить"} size={{width: 280, height: 43}}/>
        </View>
      </View>
    </ScreenMask>
  )
}

export default SelectMembers

const styles = StyleSheet.create({
    commandImg:{
        width:RW(40),
        height:RH(40),
        borderRadius:RW(20),
        right:"20%",
        borderWidth:2,
        borderColor:WHITE
    },
    headerChild:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    header:{

    },
    teamName:{
        ...font("medium", 20, WHITE)
    },
    usersContainer:{
        width:"93%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        flexWrap:"wrap"
    }
})