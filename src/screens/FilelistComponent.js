import { FlatList, Text, View, StyleSheet } from 'react-native'
import React from 'react'
import ScrollViewCommands from 'react-native/Libraries/Components/ScrollView/ScrollViewCommands'

const FilelistComponent = () => {
    const data = [{

        index: "1",
        name: "Asad"
    },
    {
        index: "2",
        name: "Ali"
    },
    {
        index: "3",
        name: "Khan"
    },
    {
        index: "4",
        name: "Saad"
    },
    {
        index: "5",
        name: "Nimra"
    },
    {
        index: "6",
        name: "Saima"
    },
    {
        index: "7",
        name: "Ahmas"
    },
    {
        index: "8",
        name: "Ahsan"
    },
    {
        index: "9",
        name: "Hassan"
    }]
    return (
        <View>

            <FlatList style={styles.box}
                keyExtractor={(key) => {
                    return key.index
                }}
                horizontal
                // numColumns={1}
                data={data}
                renderItem={(element) => {
                    console.log(element.item.name)
                    return <Text style={styles.list}>{element.item.name}</Text>
                }} />

        </View>
    )

}

const styles = StyleSheet.create({
    list: {
        fontSize: 30,
        backgroundColor: "yellow",
        padding: 10,
        margin: 10,
        textAlign: 'center',
        borderRadius: 25,
        borderWidth: 3,
        borderColor: 'crimson',
        minWidth: 200,
        maxHeight:60
    },
    box: {
        backgroundColor: 'lightgray',
        margin: 10,
        maxHeight:80

    }
})

export default FilelistComponent