import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Details = ({route}) => {
    // console.log(route.params.film.title)
    return (
        <View style= {styles.view}>
            <Text>{route.params.film.title}</Text>
            <Text>{route.params.film.year}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Details
