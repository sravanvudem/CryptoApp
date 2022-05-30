import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './Components/Header';
import axios from 'axios';
import {LineChart} from 'react-native-chart-kit';

const ht = Dimensions.get('window').height;
const wd = Dimensions.get('window').width;
const font = value => (value / Dimensions.get('screen').height) * ht;

export default function Details({navigation, route}) {
  // console.log('royute', route.params.data);

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${route.params.data.coinSymbol}&tsym=USD&limit=10`,
      )
      .then(res => {
        // console.log('response', res.data.Data.Data);
        let data = [];
        res.data.Data.Data.map((item, index) => data.push(item.high));
        // console.log('data after push;-', Math.max(...data));
        setData(data);
        // setData(res.data.coins);
      })
      .catch(err => console.log('error', err));
  };

  const chartData = {
    labels: data && data.length > 0 && data,
    datasets: [
      {
        data: data && data.length > 0 && data,
        color: (opacity = 1) => `rgba(134, 65, 244, ${1})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    // legend: ['Rainy Days'], // optional
  };

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(26, 255, 146, ${0})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header name={route.params.data.coinName} navigation={navigation} />
      </View>
      <View style={styles.body}>
        <View
          style={{
            flex: 1,
            // width: wd * 0.9,
            // backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: route.params.data.coinImage}}
            style={{
              height: wd * 0.09,
              width: wd * 0.09,
              borderRadius: wd * 0.2,
            }}
          />
          <Text
            style={{fontSize: font(30), color: '#000000', fontWeight: 'bold'}}>
            $2,564.25
          </Text>
          <Text
            style={{
              fontSize: font(18),
              color: route.params.data._24hrchange > 0 ? 'green' : 'red',
            }}>
            {route.params.data._24hrchange > 0
              ? '+' + route.params.data._24hrchange.toFixed(2)
              : '-' + route.params.data._24hrchange.toFixed(2)}
            %
          </Text>
        </View>
        <View
          style={{
            flex: 4,
            justifyContent: 'center',
            // backgroundColor: 'red',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              width: wd * 0.9,
              // backgroundColor: 'green',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Button
              title="Day"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              title="Week"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              title="Month"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              title="Year"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              title="All"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={{flex: 5}}>
            {data?.length > 1 && (
              <LineChart
                data={chartData}
                width={wd * 0.9}
                height={wd * 0.8}
                chartConfig={chartConfig}
              />
            )}
          </View>
          <View
            style={{
              flex: 1.5,
              width: wd * 0.9,
              // backgroundColor: 'olive',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={{
                  fontSize: font(24),
                  color: route.params.data._24hrchange > 0 ? 'green' : 'red',
                }}>
                {data._24hrchange > 0
                  ? '+' + route.params.data._24hrchange.toFixed(2)
                  : '-' + route.params.data._24hrchange.toFixed(2)}
                %
              </Text>
              <Text
                style={{
                  fontSize: font(16),
                  color: '#000000',
                }}>
                24h Change
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: font(24),
                  color: route.params.data._24hrchange > 0 ? 'green' : 'red',
                }}>
                {data._24hrchange > 0
                  ? '+' + route.params.data._24hrchange.toFixed(2)
                  : '-' + route.params.data._24hrchange.toFixed(2)}
                %
              </Text>
              <Text
                style={{
                  fontSize: font(16),
                  color: '#000000',
                }}>
                24h Change
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: font(24),
                  color: route.params.data._24hrchange > 0 ? 'green' : 'red',
                }}>
                {data._24hrchange > 0
                  ? '+' + route.params.data._24hrchange.toFixed(2)
                  : '-' + route.params.data._24hrchange.toFixed(2)}
                %
              </Text>
              <Text
                style={{
                  fontSize: font(16),
                  color: '#000000',
                }}>
                24h Change
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 2,
              width: wd * 0.9,
              // backgroundColor: 'green',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{
                height: wd * 0.15,
                width: wd * 0.3,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: font(20),
                  fontWeight: 'bold',
                }}>
                BUY
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: wd * 0.15,
                width: wd * 0.3,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: font(20),
                  fontWeight: 'bold',
                }}>
                SELL
              </Text>
            </TouchableOpacity>
          </View>
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
    width: wd * 0.9,
    // backgroundColor: 'green',
  },
});
