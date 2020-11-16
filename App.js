import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatBot from 'react-native-chatbot';

export default function App() {
  return (
    <View style={styles.container}>
      <ChatBot steps={steps} />
    </View>
  );
}

const steps = [
  {
    id: '1',
    message: 'hello how are you?',
    trigger: '2',
  },
  {
    id: '2',
    message: 'Subscribe',
    trigger: '3',
  },
  {
    id: '3',
    user: true,
    end: true,
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
