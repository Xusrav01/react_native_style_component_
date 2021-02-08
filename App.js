import React, { Component } from 'react';
import { Alert } from 'react-native';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {

  return (
    <View style={styles.viewsty}>
      <Text style={styles.textsty}>WELCOME!!</Text>
      <TextInput
        placeholderTextColor={'#34495e'}
        style={styles.inputsty}
        placeholder={'Email...'}
        autoCorrect={false}
        autoCapitalize="none" />
      <TextInput
        placeholderTextColor={'#34495e'}
        style={styles.inputsty}
        placeholder={'Password...'}
        secureTextEntry={true}
        underlineColorAndroid="transparent"
        autoCorrect={false}
        autoCapitalize='none' />
      <Text style={styles.forgetsty}>Forget Password?
        </Text>
      <TouchableOpacity style={styles.btnlog}>
        Login
        </TouchableOpacity>
      <TouchableOpacity style={styles.btnsig}>
        Signup
        </TouchableOpacity>
    </View >

  )
}

const styles = StyleSheet.create({
  viewsty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: 'teal'
  },
  textsty: {
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 30,
    color: "red",
    fontSize: 50,
    marginBottom: 30
  },
  inputsty: {
    width: '80%',
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    borderStyle: 'solid',
    borderColor: '#fff'
  },
  forgetsty: {
    padding: 10,
    color: '#fff',
    fontSize: 10,
    marginTop: 10,
    marginBottom: 30

  },
  btnlog: {
    fontSize: 20,
    flex: 1,
    width: 270,
    padding: 10,
    margin: 10,
    backgroundColor: 'red',
    borderRadius: 50,
    borderStyle: 'solid',
    alignItems: "center",
    textAlign: "center",
    color: '#fff'

  },
  btnsig: {
    fontSize: 20,
    width: '80',
    color: "#fff",
    width: 250,
    margin: 10,
    alignItems: "center",
    textAlign: "center"
  }
})