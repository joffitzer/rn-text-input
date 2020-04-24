import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native'  

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ]);

  return (
    <View style={styles.container}>

      <FlatList 
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
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
