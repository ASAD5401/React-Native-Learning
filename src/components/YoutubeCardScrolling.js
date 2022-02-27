import React from 'react'
import { View, Text, StyleSheet, Image, Button,Linking } from 'react-native'

const YoutubeCardScrolling = (props) => {
    // console.log(props)
    const title=props.title
    const text=props.text
    const img1=  {uri:props.img1}
    const link=props.link
    // console.log(title,text,img1,link)
    console.log(img1)
  

    return (
        <View style={styles.mainBox}>
            <View >
            <Text style={styles.titleBox}>{title}</Text>

            </View>
                <View style={styles.imageBox}>
                    <Image style={styles.image} source={img1} />


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
        borderRadius:5,
        width:300
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

export default YoutubeCardScrolling;