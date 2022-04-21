import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

const SplashScreen = ({ navigation }) => {
    return (
        <SafeAreaView
            style = {{
                alignItems: 'center',
                backgroundColor: 'deepskyblue',
                flex: 1,
                justifyContent: 'center'
            }}
        >
            <Text
                accessibilityLabel='splashscreen.title'
                style = {{
                    color: 'white',
                    fontSize: 36,
                    fontWeight: 'bold'
                }}
            >
                SplashScreen
            </Text>

            <TouchableOpacity
                accessibilityLabel='splashscreen.start'
                onPress={() => navigation.navigate("Counter")}
                style = {{
                    alignItems: 'center',
                    backgroundColor: 'crimson',
                    padding: 10,
                    borderRadius: 10,
                    width: 250,
                    marginTop: 20
                }}
            >
                <Text
                    style = {{
                        color: 'white',
                        fontSize: 24,
                        fontWeight: 'bold'
                    }}
                >
                    Start
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SplashScreen