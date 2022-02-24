import React from "react";
import {Text,StyleSheet} from "react-native"


const CustomComponent=()=>{
  return(
<Text style={styles.name}>This is custom component</Text>
  )
}

const styles=StyleSheet.create({
  name:{
    color:"red"
  },

})

export default CustomComponent;