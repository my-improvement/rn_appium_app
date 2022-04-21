import React, { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <SafeAreaView
      style = {{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
      }}
    >
      <Text
        accessibilityLabel='counter.number'
        style = {{
          fontSize: 36,
          fontWeight: 'bold'
        }}
      >
        {counter}
      </Text>

      <View
        style = {{
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: 20,
          paddingHorizontal: 20
        }}
      >
        <TouchableOpacity
          accessibilityLabel='counter.increment_button'
          onPress={() => setCounter(counter + 1)}
          style = {{
            alignItems: 'center',
            backgroundColor: 'green',
            flex: 1,
            justifyContent: 'center',
            borderRadius: 10,
            paddingVertical: 10
          }}
        >
          <Text
            style = {{
              color: 'white',
              fontSize: 28,
              fontWeight: 'bold'
            }}
          >
            Increment
          </Text>
        </TouchableOpacity>

        <View
          style = {{
            width: 20
          }}
        />

        <TouchableOpacity
          accessibilityLabel='counter.decrement_button'
          onPress={() => setCounter(counter - 1)}
          style = {{
            alignItems: 'center',
            backgroundColor: 'red',
            flex: 1,
            justifyContent: 'center',
            borderRadius: 10,
            paddingVertical: 10
          }}
        >
          <Text
            style = {{
              color: 'white',
              fontSize: 28,
              fontWeight: 'bold'
            }}
          >
            Decrement
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Counter