import React from 'react'
import { View, Text, StyleSheet, Image, Button,Linking } from 'react-native'

const YoutubeCard = () => {
    const title="THE IDIOTZ"
    const text="Provides a report on the performance of the The Idiotz channel's subscriber ranking, average views, Super Chat revenue, and paid advertising content."
    // by require you can use local machine images and by uri you can use images on internet
    const img1=require("../../assets/idiotz.jpg")
    const img2={uri:"https://yt3.ggpht.com/ytc/AKedOLTY9-J-2Yr_stAiOZZ_NtFX-dGIbZe224IWpAwWCQ=s900-c-k-c0x00ffffff-no-rj"}
    const link="https://www.youtube.com/c/theidiotz"
    return (
        <View style={styles.mainBox}>
            <View >
            <Text style={styles.titleBox}>{title}</Text>

            </View>
                <View style={styles.imageBox}>
                    <Image style={styles.image} source={img1} />
                    {/* <Image style={styles.image} source={img2} /> */}


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
        fontVariant : ["small-caps"],

        fontSize:40,
        letterSpacing:3,
        textShadowOffset:{width:-3,height:4},
        textShadowRadius:10,
        textShadowColor:"gray",
    }



})

export default YoutubeCard;