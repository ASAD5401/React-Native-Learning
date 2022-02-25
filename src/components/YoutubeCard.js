import React from 'react'
import { View, Text, StyleSheet, Image, Button,Linking } from 'react-native'

const YoutubeCard = () => {
    return (
        <View style={styles.mainBox}>
            <View >
            <Text style={styles.titleBox}>THE IDIOTZ</Text>

            </View>
                <View style={styles.imageBox}>
                    <Image style={styles.image} source={require("../../assets/idiotz.jpg")} />

                </View>
                <View style={styles.textBox}>
                    <Text>Provides a report on the performance of the The Idiotz channel's subscriber ranking, average views, Super Chat revenue, and paid advertising content.</Text>

                </View>
                <View >
                    <Button
                     style={styles.buttonBox}
                      title="Watch Now"
                      onPress={()=>{Linking.openURL("https://www.youtube.com/c/theidiotz")}}
                       />

                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    mainBox: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        margin:30,
        padding:5,
        borderRadius:5
    },
    imageBox: {
        paddingHorizontal: 10
    },
    image: {
        height: 250,
        width: 275,
        marginTop: 10,
        marginBottom: 10,
    },
    textBox: {
        marginTop:10,
        marginBottom:10,
        paddingHorizontal: 10,
    },
    buttonBox:{
        fontSize:300,
        height:500
    },
    titleBox:{
        fontSize:40
    }



})

export default YoutubeCard;