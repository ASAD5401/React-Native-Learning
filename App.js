import React from "react";
import { Image, Text, StyleSheet, View, ScrollView, Button, Alert, TouchableOpacity } from "react-native"
import CustomComponent from "./src/screens/CustomComponent";
import FilelistComponent from "./src/screens/FilelistComponent";
import CardDetails from "./src/components/CardDetail";
import YoutubeCard from "./src/components/YoutubeCard";
import BoxModel from "./src/components/BoxModel";
import YoutubeVerticalScrolling from "./src/components/YoutubeVerticalScrolling";


const App = () => {
  const name = "Asad Ali Khan"
  return (

    // <View style={styles.mainBox}>

    //   <Text style={styles.name}>{name}</Text>
    //   <Text style={styles.decorate}> started learning React Native on 24-Feb-2022</Text>
      
      
      
    //   <CustomComponent></CustomComponent>
      
      
      
    //   <FilelistComponent></FilelistComponent>
      
      
      
    //   <Button
    //     title="SUBSCRIBE"
    //     onPress={() => { Alert.alert("You have subscribed") }}
    //   />



    //   <TouchableOpacity
    //     onPress={() => { Alert.alert("You have subscribed") }}
    //   >
    //     <Text style={styles.touchText}>SUBSCRIBE</Text>
    //   </TouchableOpacity>


    //   <CardDetails name="Asad Ali Khan"></CardDetails>
    //   <CardDetails name="Saad Khan"></CardDetails>



    //   <ScrollView style={styles.scroll}>
    //     <Image style={styles.image} source={require("./assets/profile.png")} />
    //     <Image style={styles.image} source={require("./assets/test.jpg")} />
    //     <Image style={styles.image} source={require("./assets/test.jpg")} />
    //   </ScrollView>
    //   <Text style={styles.decorate}> started learning React Native on 24-Feb-2022</Text>

    // </View>

//Above and Below all commented to get YoutubeCard
    // <YoutubeCard></YoutubeCard>

    // Above and Below all commented to get BoxModel
    // <BoxModel></BoxModel>


    // Above and Below all commented to get YoutubeVerticalScrolling
    <YoutubeVerticalScrolling></YoutubeVerticalScrolling>
  )
}

const styles = StyleSheet.create({
  mainBox: {
    // justifyContent:"center",
    alignItems: "center",
    display: 'flex',
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "crimson",
    marginTop: 10,
  },
  image: {
    height: 250,
    width: 300,
    marginTop: 10,
    marginBottom: 10

  },
  touchText:{
    fontSize:30,
  },
  scroll: {
    marginBottom: 420
  }

})

export default App;