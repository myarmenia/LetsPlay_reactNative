import React, {useRef, useState} from 'react'
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native'

import { font, RH, RW, shadow } from '@/theme/utils'
import { BACKGROUND, ICON } from '@/theme/colors'
import ChevronIcon from '@/assets/imgs/chevron'
import OnBoardingIndicator from './indicator'
import Carousel from "react-native-reanimated-carousel";
import Game from "@/components/game";
import index from "@/screens/Profile/Main";

const OnBoardingItem = ({ items = [], next, previous }) => {
  const scrollRef = useRef();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [activeIndex, setActiveIndex]=useState(0);

  const nextSlide = () => {
    scrollRef.current.prev()
  }

  const prevSlide = () => {
    scrollRef.current.next()
  }

  return (
    <View style={[styles.container]}>
      {items.length > 1 && (
        <View style={styles.buttons}>
          <ChevronIcon onPress={nextSlide} />
          <ChevronIcon isRight onPress={prevSlide} />
        </View>
      )}
      <Carousel
          loop
          width={width}
          ref={scrollRef}
          onScrollBegin={()=>setActiveIndex(scrollRef.current.getCurrentIndex())}
          height={height}
          data={[...items.keys()]}
          scrollAnimationDuration={1000}
          renderItem={({index}) => (
                <View
                  key={index}
                  style={{
                  width:'100%',
                  height:'100%',
                  alignItems:'center',
                  }}
              >
                  {items[index].svg?items[index].svg:<Image source={items[index].image} style={styles.image} />}
                  <Text style={[styles.description]}>{items[index].description}</Text>
              </View>
          )}
      />


      <View style={styles.indicator}>
        <OnBoardingIndicator activeIndex={activeIndex} itemsCount={items.length} />
      </View>
    </View>
  )
}

export default OnBoardingItem

const styles = StyleSheet.create({
  container: {
    ...shadow,
    width: RW(382),
    height: RH(568),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: RW(20),
    paddingVertical: RH(18),
    paddingHorizontal: RW(20),
    backgroundColor: BACKGROUND,
  },
  itemContainer: {
    height: '100%',
    width: RW(302),
    alignItems: 'center',
    flexDirection: 'column',
  },
  description: {
    maxWidth: RW(280),
    textAlign: 'center',
    letterSpacing: 0.5,
    ...font('regular', 16, ICON, 24),
  },
  buttons: {
    zIndex: 2,
    width: '100%',
    marginTop: RH(266),
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: RW(233),
    height: RH(236),
    marginTop: RH(44),
    marginBottom: RH(17),
  },
  indicator: {
    bottom: RH(18),
    position: 'absolute',
  },
})
