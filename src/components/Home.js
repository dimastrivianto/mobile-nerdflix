import React, {useState} from 'react'
import { Text, View, Button, Alert, FlatList, TouchableOpacity } from 'react-native'
import shortid from 'shortid'

import AddItem from './AddItem'
import ListItem from './ListItem'
import Details from './Details'


// object navigation memiliki method navigate untuk pinda ke screen lain
const Home = ({navigation}) => {

    const [films, setFilms] = useState([
        {id : 1, title: 'Stranger Things', year : 2016},
        {id : 2, title: 'Kingdom', year : 2019}
    ])

    const deleteRoutine = (id) => {
        let removeFilms = films.filter(film => {
            return !(film.id === id)
        })
        setFilms(removeFilms)
    }
    const addNewRoutine = (title, year) => {
      // setiap film akan disimpan dalam bentuk object, maka setiap menambah film baru, berarti kita menambah object baru
      // dalam pembuatan id kita membutuhkan library untuk membuat string random yang akan bersifat unique
        const newFilm = {id: shortid.generate(), title, year}
      // setFilms harus me-return sebuah array. Caranya adalah array yang lama ditambah dengan object yang baru mengguanakan metode 'titik tiga'. hehe lupa istilahnya eug
        setFilms([...films, newFilm])
    }
    
    return (
        <View>
            {/* di kirim sebagai props ke dalam addItema karena addItem tidak terdapat didalam component yang ada di App.js, sehingga halaman home harus mengirim props ke addItem */}
            <AddItem addNewRoutine={addNewRoutine} />
            {/* <Text> Home Component </Text>
            <Button
                title= 'Pindah Ke Detail'
                color= 'magenta'
                onPress={() => navigation.navigate('Details')}
                // onPress={() => Alert.alert('success', 'Yeaayy', [{text: 'cancel'}, {title: 'Ok'}])}
            /> */}
            <FlatList 
                // films = [{id, title, year}]
                data={films}
                // item = {id, title, year}
                // harus item tidak boleh yang lain
                renderItem={({item}) => <ListItem film={item} deleteRoutine={deleteRoutine} /> }
            />
            {/* <Details /> */}
        </View>
    )
}


export default Home

// jika pada react.js kita bisa memilih variable untuk function di dalam map
// const renderList = () => {
//    items.map(film => {return <li>{film.title}</li>})
// }

// pada react native, best practice kita akan selalu menggunakan {item}
// const renderListReactNative = () => {
//    items.map(
//       ({item})=> {return <li>{item.title}</li>}
//    )
// }
