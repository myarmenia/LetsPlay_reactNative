import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import Slider from '@react-native-community/slider'
import { RH } from '@/theme/utils'
import CircleSlide from '@/assets/imgs/CircleSlide.png'

function Index({ step, maxValue, val, setVal }) {
  const [steps, setSteps] = useState([])
  const p = maxValue / 100

  useEffect(() => {
    const temp = []
    const stetCount = maxValue / step
    let res = 0
    for (let i = 0; i < step; i++) {
      res = res + stetCount
      temp.push(res)
    }
    setSteps(temp)
  }, [])

  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <Slider
        style={{
          left: 0,
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          //   top: RH(-9.2),
        }}
        onValueChange={(ev) => setVal(Math.round(ev * 100 * p))}
        // value={(val/maxValue)}
        minimumTrackTintColor="#4D7CFE"
        maximumTrackTintColor="rgba(255, 0, 0, 0.01)"
        thumbImage={CircleSlide}
      />

      <View style={styles.body}>
        {steps.map((item, i) => (
          <View key={i} style={{ ...styles.stepBody, width: `${100 / steps.length - 0.5}%` }}>
            <View style={styles.stepFon} />
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                borderColor: 'red',
                justifyContent: i === 0 ? 'space-between' : 'flex-end',
              }}
            >
              {i === 0 ? <Text style={{ ...styles.stepText, left: 0 }}>0</Text> : null}
              <Text
                style={{
                  ...styles.stepText,
                  left: item === steps[steps.length - 1] ? '85%' : '95%',
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
