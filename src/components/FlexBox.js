import { Text, View,StyleSheet } from 'react-native'
import React, { PureComponent } from 'react'

const FlexBox=()=>{
    return (
        <View>
            <View style={styles.parentView}>
                <Text style={[styles.child1, styles.commonStyle]}>Box Model 1</Text>
                <Text style={[styles.child2, styles.commonStyle]}>Box Model 2</Text>
                <Text style={[styles.child3, styles.commonStyle]}>Box Model 3</Text>
                <Text style={[styles.child1, styles.commonStyle]}>Box Model 1</Text>
                <Text style={[styles.child2, styles.commonStyle]}>Box Model 2</Text>
                <Text style={[styles.child3, styles.commonStyle]}>Box Model 3</Text>
                <Text style={[styles.child1, styles.commonStyle]}>Box Model 1</Text>
                <Text style={[styles.child2, styles.commonStyle]}>Box Model 2</Text>
                <Text style={[styles.child3, styles.commonStyle]}>Box Model 3</Text>
            </View>
        </View>
    )
  
}
const styles=StyleSheet.create({
    commonStyle:{
        borderWidth:2,
        width:60,
        marginVertical:20,

    },
    child1:{
        borderColor:'orange'

    },
    child2:{
        borderColor:'green'

    },
    child3:{
        borderColor:'blue'

    },
parentView:{
    borderWidth:5,
    borderColor:'red',
    marginTop:200,
    flexDirection:'row',
    justifyContent:'space-around',
    flexWrap:'wrap',
},


})
export default FlexBox