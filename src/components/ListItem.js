import React from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const ListItem = ({film, deleteRoutine}) => {
    // film = {id, title, year}

    const deleteData = (id) => {
        deleteRoutine(id)
    }

    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <View>
                    <Text style={styles.listTitle}  onPress={() => navigation.navigate('Details',{film})}>{film.title}</Text>
                    <Text style={styles.listYear}  onPress={() => navigation.navigate('Details', {film})}>{film.year}</Text>
                </View>
                <Button title='finish' color='red' onPress={() => {deleteData(film.id)}} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem : {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemView: {
        // untuk mengatur arah susunan child dari <View>
        // default value is column, sehingga child akan tersusun dari atas ke bawah (vertikal)
        // untuk nilai 'row' akan membuat child tersusun dari kiri ke kanan (horizontal)
        flexDirection : 'row',
        // untuk memberi jarak antar child
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listTitle: {
        fontSize: 18
    },
    listYear: {
        fontSize: 14
    }
})

export default ListItem
