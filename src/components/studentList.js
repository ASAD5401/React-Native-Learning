import { ActivityIndicator, Text, View, StyleSheet, FlatList, Image } from 'react-native'
import React, { PureComponent, useEffect, useState } from 'react'

const StudentList = () => {
    const [userData, setUserData] = useState()
    const [isLoaded, setIsLoaded] = useState(true)

    const getData = async () => {
        try {
            const response = await fetch('https://thapatechnical.github.io/userapi/users.json')
            const data = await response.json()
            setUserData(data)
            setIsLoaded(false)
            console.log(data[0].name)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <View >{
            isLoaded ? <ActivityIndicator color='crimson' size="large" style={styles.loader}></ActivityIndicator> :
                <View style={styles.main}>
                    <Text style={styles.header}>LIST OF STUDENTS</Text>

                    <FlatList
                        data={userData}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.mainContainer}>
                                    <View style={styles.imageParent}>
                                        <Image style={styles.imageStyle} source={{ uri: item.image }}></Image>
                                    </View>
                                    <View style={styles.commonStyle}>
                                        <Text style={styles.textStyle}>Name</Text>
                                        <Text style={styles.textStyle}>{item.name}</Text>
                                    </View>
                                    <View style={styles.commonStyle}>
                                        <Text style={styles.textStyle}>Email</Text>
                                        <Text style={styles.textStyle}>{item.email}</Text>
                                    </View>
                                    <View style={styles.commonStyle}>
                                        <Text style={styles.textStyle}>Mobile #</Text>
                                        <Text style={styles.textStyle}>{item.mobile}</Text>
                                    </View>

                                </View>
                            )
                        }}
                    ></FlatList>

                </View>
        }
        </View>
    )

}
const styles = StyleSheet.create({
    main:{
        backgroundColor:'light-gray',
        marginBottom:160
    },
    header:{
        marginTop:20,
        textAlign:'center',
        fontSize:35,
        color:'crimson',
        marginBottom:10
    },
    mainContainer: {
        marginTop: 20,
        // marginBottom:,

    },
    commonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginHorizontal: '15%',
        backgroundColor: 'crimson',


    },
    imageStyle: {
        height: 250,
        width: '70%',
        borderWidth: 10,
        borderColor: "crimson"
    },
    imageParent: {
        alignItems: 'center',

    },
    textStyle: {
        fontSize: 15,
        color: 'white',
    },
    loader: {
        justifyContent: 'center',
        minHeight: '100%',
        // backgroundColor:''
    }

})
export default StudentList