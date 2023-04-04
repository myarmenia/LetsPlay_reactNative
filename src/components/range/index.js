import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import Slider from '@react-native-community/slider'
import CircleSlide from '@/assets/imgs/CircleSlide.png'

function Index({ step, minVal, maxValue, val, setVal }) {
  const [steps, setSteps] = useState([])
  const p = maxValue / 100

  useEffect(() => {
    const temp = []
    const stetCount = maxValue / (step + 1)
    console.log('stetCount', stetCount)
    let res = 0
    for (let i = 0; i <= step; i++) {
      res = res + stetCount
      // if (i === 0 && minVal >= res) {
      //   continue
      // }
      temp.push(res)
    }
    setSteps(temp)
  }, [])

  return (
    <View style={{ width: '80%', alignItems: 'center' }}>
      <Slider
        style={{
          left: 0,
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        onValueChange={(ev) => {
          setVal(
            Math.floor(
              Math.round(ev * 100 * p) <= steps[0]
                ? Math.round(ev * 100 * p) / (steps[0] / minVal) + minVal
                : Math.round(ev * 100 * p),
            ),
          )
        }}
        minimumTrackTintColor="#4D7CFE"
        maximumTrackTintColor="rgba(255, 0, 0, 0.01)"
        thumbImage={CircleSlide}
        // step={10}
      />

      <View style={styles.body}>
        {steps.map((item, i) => (
          <View key={i} style={{ ...styles.stepBody, width: `${100 / (step - 1)}%` }}>
            <View style={styles.stepFon} />
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'flex-end',
              }}
            >
              <Text
                style={{
                  ...styles.stepText,
                  // left: item === steps[steps.length - 1] ? '85%' : '95%',
                }}
              >
                {item}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Index
