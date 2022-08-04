import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';

export default function App() {
  const [cityNm, setcityNm] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clima e tempo 3DS</Text>
      <TextInput
        onChangeText={text =>setcityNm(text)}
        style={styles.input}
        placeholder={"Cidade"}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={{}}>Botao</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  title:{
    fontSize:25
  },
  input:{
    borderWidth:1,
    borderRadius:3,
    width: Dimensions.get("window").width/1.1
  },
  btn:{
    borderWidth:1,
    marginTop:5,
    paddingLeft:Dimensions.get('window').height/5,
    borderRadius:3
  }
});


