/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import CollapsibleHeader from './CollapsibleHeader'


const data = [
  {
    "_id": "595ba57aad8224907f5e3115",
    "index": 0,
    "picture": "https://unsplash.it/50/50",
    "age": 28,
    "eyeColor": "blue",
    "name": "Walton Barber",
    "gender": "male",
    "company": "IMAGEFLOW",
    "email": "waltonbarber@imageflow.com",
    "phone": "+1 (850) 462-2039",
    "address": "386 Stuyvesant Avenue, Concho, Alaska, 6667"
  },
  {
    "_id": "595ba57ab09fc16e26e14867",
    "index": 1,
    "picture": "https://unsplash.it/50/50",
    "age": 26,
    "eyeColor": "blue",
    "name": "Dolores Tran",
    "gender": "female",
    "company": "LOTRON",
    "email": "dolorestran@lotron.com",
    "phone": "+1 (931) 484-2543",
    "address": "230 Barbey Street, Orviston, Massachusetts, 4600"
  },
  {
    "_id": "595ba57a50463c257d50ccf4",
    "index": 2,
    "picture": "https://unsplash.it/50/50",
    "age": 33,
    "eyeColor": "green",
    "name": "Mcguire Knapp",
    "gender": "male",
    "company": "PERMADYNE",
    "email": "mcguireknapp@permadyne.com",
    "phone": "+1 (876) 531-2767",
    "address": "262 Bayview Avenue, Chapin, South Carolina, 8153"
  },
  {
    "_id": "595ba57a4b2dd04623109948",
    "index": 3,
    "picture": "https://unsplash.it/50/50",
    "age": 21,
    "eyeColor": "green",
    "name": "White Mays",
    "gender": "male",
    "company": "INSECTUS",
    "email": "whitemays@insectus.com",
    "phone": "+1 (894) 516-3121",
    "address": "456 Jackson Court, Finzel, West Virginia, 9730"
  },
  {
    "_id": "595ba57af5e85dd5acca1533",
    "index": 4,
    "picture": "https://unsplash.it/50/50",
    "age": 25,
    "eyeColor": "green",
    "name": "Burris Vasquez",
    "gender": "male",
    "company": "CYCLONICA",
    "email": "burrisvasquez@cyclonica.com",
    "phone": "+1 (847) 550-2352",
    "address": "345 Manor Court, Jamestown, New Hampshire, 8342"
  },
  {
    "_id": "595ba57a57f8e7858d03feec",
    "index": 5,
    "picture": "https://unsplash.it/50/50",
    "age": 38,
    "eyeColor": "green",
    "name": "Bonita Sparks",
    "gender": "female",
    "company": "OMATOM",
    "email": "bonitasparks@omatom.com",
    "phone": "+1 (991) 470-2357",
    "address": "828 Aurelia Court, Lutsen, Hawaii, 6640"
  },
  {
    "_id": "595ba57a330dbcbf0d0c592c",
    "index": 6,
    "picture": "https://unsplash.it/50/50",
    "age": 34,
    "eyeColor": "brown",
    "name": "Tisha Mcbride",
    "gender": "female",
    "company": "CUJO",
    "email": "tishamcbride@cujo.com",
    "phone": "+1 (939) 435-3260",
    "address": "115 Dover Street, Aurora, Marshall Islands, 8178"
  }
]

export default class Sample extends Component {


  _renderHeader = () => (
    <View style={styles.headerBox}>
      <Text style={{ paddingTop: 10, fontSize: 20 }}>This is header</Text>
    </View>
  )

  _renderRemainHeader = () => (
    <View style={styles.remainder}>
      <Text style={{ paddingTop: 10, fontSize: 20 }}>This is remainder</Text>
    </View>
  )

  renderItem = (data) => {
    let item = data.item
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.picture }} style={{ height: 50 }} />
        <Text>{item.name}</Text>
        <Text>{item.eyeColor}</Text>
        <Text>{item.age}</Text>
        <Text>{item.gender}</Text>
        <Text>{item.company}</Text>
      </View>
    )
  }

  keyExtractor = (item) => item._id

  render() {
    return (
      <View style={styles.container}>
        <CollapsibleHeader
          renderHeader={this._renderHeader}
          headerColor={'#F25C5A'}
          headerHeight={90}
          renderRemainHeader={this._renderRemainHeader}
          remainHeaderHeight={40}
          remainHeaderColor={'#C2DE5A'}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  headerBox: {
    height: 90,
    width: 500,
    backgroundColor: '#F25C5A',
    borderWidth: 1,
    borderColor: 'red'
  },
  remainder: {
    height: 40,
    width: 500,
    backgroundColor: '#C2DE5A',
    borderWidth: 1,
    borderColor: 'yellow'
  },
  item: {
    height:200,
    paddingBottom:20,
    backgroundColor:'green',
    marginBottom:5
  }
});

AppRegistry.registerComponent('CollapsibleHeader', () => Sample);
