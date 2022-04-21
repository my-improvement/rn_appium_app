import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  const [isShowLoggedInLabel, setIsShowLoggedInLabel] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Login</Text>
      <View style={styles.inputView} >
        <TextInput
          accessibilityLabel='email'
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setEmail(text)} />
      </View>
      <View style={styles.inputView} >
        <TextInput
          accessibilityLabel='password'
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setPassword(text)} />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsShowLoggedInLabel(true)} style={styles.loginBtn} accessibilityLabel='login-button'>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>

      {
        isShowLoggedInLabel &&
          <Text
            accessibilityLabel='logged-in'
            style = {{
              color: 'goldenrod',
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 20,
            }}
          >
            Logged In
          </Text>
      }
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#3CB371",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#3CB371",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  }
});
export default App;