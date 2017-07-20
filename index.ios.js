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
  Image,
  StatusBar
} from 'react-native';
import CollapsibleHeader from './CollapsibleHeaderWithPanResponder'
import TabHeader from './TabHeader'


const data = [
  {
    "_id": "595ba57aad8224907f5e3115",
    "index": 0,
    "picture": "https://unsplash.it/400/300?image=51",
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
    "picture": "https://unsplash.it/400/300?image=52",
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
    "picture": "https://unsplash.it/400/300?image=53",
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
    "picture": "https://unsplash.it/400/300?image=54",
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
    "picture": "https://unsplash.it/400/300?image=55",
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
    "picture": "https://unsplash.it/400/300?image=56",
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
    "picture": "https://unsplash.it/400/300?image=57",
    "age": 34,
    "eyeColor": "brown",
    "name": "Tisha Mcbride",
    "gender": "female",
    "company": "CUJO",
    "email": "tishamcbride@cujo.com",
    "phone": "+1 (939) 435-3260",
    "address": "115 Dover Street, Aurora, Marshall Islands, 8178"
  },
  {
    "_id": "595badd5abb7918485f7fe45",
    "index": 0,
    "picture": "https://unsplash.it/400/300?image=58",
    "age": 39,
    "eyeColor": "blue",
    "name": "Rosales Hardin",
    "gender": "male",
    "company": "XERONK",
    "email": "rosaleshardin@xeronk.com",
    "phone": "+1 (883) 566-3797",
    "address": "313 Amber Street, Sabillasville, Kentucky, 6175"
  },
  {
    "_id": "595badd5b7e6643a1f47d673",
    "index": 1,
    "picture": "https://unsplash.it/400/300?image=59",
    "age": 31,
    "eyeColor": "green",
    "name": "Crane Holden",
    "gender": "male",
    "company": "SYBIXTEX",
    "email": "craneholden@sybixtex.com",
    "phone": "+1 (906) 408-2218",
    "address": "592 Moore Place, Limestone, Palau, 4677"
  },
  {
    "_id": "595badd576acb8920965258d",
    "index": 2,
    "picture": "https://unsplash.it/400/300?image=60",
    "age": 22,
    "eyeColor": "brown",
    "name": "Celeste Raymond",
    "gender": "female",
    "company": "COMBOT",
    "email": "celesteraymond@combot.com",
    "phone": "+1 (829) 503-3058",
    "address": "881 Brigham Street, Irwin, Ohio, 9265"
  },
  {
    "_id": "595badd57cb6514ca815bcfe",
    "index": 3,
    "picture": "https://unsplash.it/400/300?image=61",
    "age": 24,
    "eyeColor": "green",
    "name": "Shaw Gilmore",
    "gender": "male",
    "company": "OPPORTECH",
    "email": "shawgilmore@opportech.com",
    "phone": "+1 (842) 420-3041",
    "address": "408 Schenck Avenue, Leroy, Rhode Island, 5636"
  },
  {
    "_id": "595badd57736c3dedb18bfa2",
    "index": 4,
    "picture": "https://unsplash.it/400/300?image=62",
    "age": 36,
    "eyeColor": "blue",
    "name": "Hopper Macias",
    "gender": "male",
    "company": "SONGLINES",
    "email": "hoppermacias@songlines.com",
    "phone": "+1 (829) 431-3896",
    "address": "330 Albemarle Road, Motley, Pennsylvania, 4995"
  },
  {
    "_id": "595badd5ab41d3d46e95f4bf",
    "index": 5,
    "picture": "https://unsplash.it/400/300?image=63",
    "age": 26,
    "eyeColor": "brown",
    "name": "Liliana Lynn",
    "gender": "female",
    "company": "SLOFAST",
    "email": "lilianalynn@slofast.com",
    "phone": "+1 (819) 474-3605",
    "address": "108 Fairview Place, Frank, Colorado, 8309"
  },
  {
    "_id": "595badd592fddcb9dac7a899",
    "index": 6,
    "picture": "https://unsplash.it/400/300?image=64",
    "age": 40,
    "eyeColor": "blue",
    "name": "Anderson Robertson",
    "gender": "male",
    "company": "ROCKLOGIC",
    "email": "andersonrobertson@rocklogic.com",
    "phone": "+1 (994) 540-3597",
    "address": "368 Beayer Place, Summerset, Illinois, 7507"
  },
  {
    "_id": "595badd5ac2816249c609784",
    "index": 7,
    "picture": "https://unsplash.it/400/300?image=65",
    "age": 40,
    "eyeColor": "blue",
    "name": "Deanne Lott",
    "gender": "female",
    "company": "CANDECOR",
    "email": "deannelott@candecor.com",
    "phone": "+1 (848) 598-3063",
    "address": "847 Fane Court, Sunnyside, New York, 2194"
  },
  {
    "_id": "595badd5bfe944ad675d0a86",
    "index": 8,
    "picture": "https://unsplash.it/400/300?image=66",
    "age": 32,
    "eyeColor": "blue",
    "name": "Sawyer Combs",
    "gender": "male",
    "company": "GALLAXIA",
    "email": "sawyercombs@gallaxia.com",
    "phone": "+1 (810) 439-2828",
    "address": "650 Dearborn Court, Chalfant, New Jersey, 9428"
  },
  {
    "_id": "595badd55b85792973a6fdd4",
    "index": 9,
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "brown",
    "name": "Abigail Fowler",
    "gender": "female",
    "company": "RODEOLOGY",
    "email": "abigailfowler@rodeology.com",
    "phone": "+1 (886) 547-2540",
    "address": "519 Radde Place, Carrsville, District Of Columbia, 9405"
  },
  {
    "_id": "595badd5934b16cce967042c",
    "index": 10,
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "brown",
    "name": "Cooley Noble",
    "gender": "male",
    "company": "EXOPLODE",
    "email": "cooleynoble@exoplode.com",
    "phone": "+1 (843) 409-2028",
    "address": "119 Burnett Street, Rehrersburg, Virgin Islands, 445"
  },
  {
    "_id": "595badd56d6e0238f12df1a0",
    "index": 11,
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "green",
    "name": "Mooney Bowers",
    "gender": "male",
    "company": "MUSANPOLY",
    "email": "mooneybowers@musanpoly.com",
    "phone": "+1 (955) 490-3901",
    "address": "648 Orange Street, Chamberino, Arkansas, 951"
  },
]

export default class Sample extends Component {

  state = {
    value: ''
  }

  _renderHeader = () => (

    <TabHeader
      placeholder='Search......'
      onChangeText={() => console.log("hello")}
      onClearSearch={() => console.log("onsearch")}
      value={this.state.value}
      leftLabel='LEFT TAB'
      onPressLeft={this.goLeft}
      rightLabel='RIGHT TAB'
      onPressRight={this.goRigth}
      leftSelected={true}
      rightSelected={false}
      contentType='benefit'
      minimized={false}
    />
  )

  renderItem = (data) => {
    let item = data.item
    return (
      <View style={styles.item}>
        <View style={{ flex: 1 }}>
          <Image source={{ uri: item.picture }} style={{ height: 400, width: 250 }} />
        </View>
        <View>
          <Text>{item.name}</Text>
          <Text>{item.eyeColor}</Text>
          <Text>{item.age}</Text>
          <Text>{item.gender}</Text>
          <Text>{item.company}</Text>
        </View>
      </View>
    )
  }

  keyExtractor = (item) => item._id

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="dark-content"
        />
        <CollapsibleHeader
          renderHeader={this._renderHeader()}
          headerColor={'#F25C5A'}
          headerHeight={110}
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
    height: 400,
    paddingBottom: 20,
    marginBottom: 5,
    flexDirection: 'row'
  }
});

AppRegistry.registerComponent('CollapsibleHeader', () => Sample);
