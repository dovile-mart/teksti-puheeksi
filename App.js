import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Speech from 'expo-speech';
import { useState} from 'react';
import { TextInput } from 'react-native';

export default function App() {

  const [input, setInput] = useState('');

  const speak = () => {
    const thingToSay = input; //'some text to be said';
    Speech.speak(thingToSay);
  }


  return (
    <View style={styles.container}>

      <TextInput style={styles.input} value={input} onChangeText={text => setInput(text)} />

      <Button title='Press to hear text' onPress={speak}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    width: 200,
    height: 50,
    margin: 20
  }
});
