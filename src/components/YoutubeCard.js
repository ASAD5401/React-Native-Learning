import React from 'react'
import { View, Text, StyleSheet, Image, Button,Linking } from 'react-native'

const YoutubeCard = () => {
    const title="THE IDIOTZ"
    const text="Provides a report on the performance of the The Idiotz channel's subscriber ranking, average views, Super Chat revenue, and paid advertising content."
    const img=require("../../assets/idiotz.jpg")
    const link="https://www.youtube.com/c/theidiotz"
    return (
        <View style={styles.mainBox}>
            <View >
            <Text style={styles.titleBox}>{title}</Text>

            </View>
                <View style={styles.imageBox}>
                    <Image style={styles.image} source={img} />

                </View>
                <View style={styles.textBox}>
                    <Text>{text}</Text>

                </View>
                <View >
                    <Button
                     style={styles.buttonBox}
                      title="Watch Now"
                      onPress={()=>{Linking.openURL(link)}}
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