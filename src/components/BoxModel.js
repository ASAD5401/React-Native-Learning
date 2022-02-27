import { Text, View, StyleSheet } from 'react-native'
import React, { PureComponent } from 'react'

const BoxModel = () => {
    return (
        <View>
            <View style={styles.parentView}>
                <Text style={[styles.child1, styles.commonStyle]}>Box Model 1</Text>
                <Text style={[styles.child2, styles.commonStyle]}>Box Model 2</Text>
                <Text style={[styles.child3, styles.commonStyle]}>Box Model 3</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    parentView: {
        // alignItems:'center',
        width: '95%',
        borderColor: "black",
        borderWidth: 5,
        marginHorizontal: 10,
        marginTop:100,

    },
    child1: {
        backgroundColor: "rgb(255,186,186)",
        borderColor: "rgb(255,0,0)",
        color: "rgb(255,0,0)",


    },
    child2: {
        backgroundColor: "#d2f2d4",
        borderColor: "#26cc00",
        color: "#26cc00",


    },
    child3: {
        backgroundColor: "#bac2ff",
        borderColor: "#2c2cff",
        color: "#2c2cff",


    },
    commonStyle: {
        textAlign: 'center',
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 5,
        marginHorizontal:40,
        marginVertical:30,
    }

})

export default BoxModel;