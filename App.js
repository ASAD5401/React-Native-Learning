import React from "react";
import {Text,StyleSheet,View} from "react-native"
import CustomComponent from "./src/screens/CustomComponent";

const App=()=>{
  const name="Asad Ali Khan"
  return(
    <View>
      <Text style={styles.name}>{name}</Text>
    <Text style={styles.decorate}> started learning React Native on 24-Feb-2022</Text>
    <CustomComponent></CustomComponent>
    </View>
  )
}

const styles=StyleSheet.create({
  name:{
    fontSize:30,
    fontWeight: "bold",
    color:"crimson",
 marginTop: 10,
  },

})

export default App;