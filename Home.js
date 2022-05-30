import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './Components/Header';
import axios from 'axios';
import Card from './Components/Card';

const ht = Dimensions.get('window').height;
const wd = Dimensions.get('window').width;
const font = value => (value / Dimensions.get('screen').height) * ht;

export default function Home({navigation}) {
  const [data, setData] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    getData();
    getTime();
  }, []);

  const getTime = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let time = `${day}.${month}.${year} | ${hour}:${minute}`;
    setTime(time);
  };

  const getData = async () => {
    axios
      .get('https://comms.globalxchange.com/coin/vault/get/all/coins')
      .then(res => {
        // console.log('response', res.data.coins);
        setData(res.data.coins);
      })
      .catch(err => console.log('error', err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header name={'My Balance'} navigation={navigation} />
      </View>
      <View style={styles.body}>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: font(30), color: '#000000', fontWeight: 'bold'}}>
            $2,564.25
          </Text>
          <Text style={{fontSize: font(20), color: '#000000'}}>
            updated:{time}
          </Text>
        </View>
        <View style={{flex: 4}}>
          <FlatList
            keyExtractor={index => 'key' + Math.random()}
            data={data.slice(0, 30)}
            renderItem={({item, index}) => {
              return (
                <View
                  key={index.toString()}
                  style={{
                    alignItems: 'center',
                    width: wd,
                    marginVertical: wd * 0.02,
                  }}>
                  <Card data={item} navigation={navigation} />
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: wd,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 0.07,
    width: wd,
  },
  body: {
    flex: 0.93,
    width: wd,
    // backgroundColor: 'green',
  },
});
