import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'  

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', key: '1' },
    { name: 'yoshi', key: '2' },
    { name: 'mario', key: '3' },
    { name: 'luigi', key: '4' },
    { name: 'peach', key: '5' },
    { name: 'toad', key: '6' },
    { name: 'bowser', key: '7' },
  ]);

  const pressHandler = (id) => {
    console.log(id)
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.key != id)
    })
  }

  return (
    <View style={styles.container}>

      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView>
        {people.map(person => (
            <View key={person.key}>
              <Text style={styles.item}>{person.name}</Text>
            </View>
          ))}
      </ScrollView> */}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});









// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput } from 'react-native';

// export default function App() {
//   const [name, setName] = useState('jonah')
//   const [age, setAge] = useState('26')
  
//   return (
//     <View style={styles.container}>
//       <Text>Enter name:</Text>
//       <TextInput 
//         multiline
//         style={styles.input}
//         placeholder='e.g. John Doe'
//         onChangeText={(val) => setName(val)}/>

//       <Text>Enter age:</Text>
//       <TextInput 
//         keyboardType='numeric'
//         style={styles.input}
//         placeholder='e.g. 99'
//         onChangeText={(val) => setAge(val)}/>

//       <Text>name: {name}, age: {age}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#777',
//     padding: 8,
//     margin: 10,
//     width: 200,
//   }
// });
