import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';

const ht = Dimensions.get('window').height;
const wd = Dimensions.get('window').width;
const font = value => (value / Dimensions.get('screen').height) * ht;

export default function Card(props) {
  const chartData = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
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
  // console.log('props', props.navigation);
  let data = props.data;
  return (
    <View
      style={{
        height: wd * 0.4,
        width: wd * 0.9,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Details', {
            data: data,
          })
        }
        style={{flex: 1}}>
        <View style={{flex: 1.2, flexDirection: 'row'}}>
          <View
            style={{
              flex: 1.5,
              //   backgroundColor: 'aqua',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: data.coinImage}}
              style={{
                height: wd * 0.09,
                width: wd * 0.09,
                borderRadius: wd * 0.2,
              }}
            />
          </View>
          <View style={{flex: 4, justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: font(24),
                color: '#000000',
              }}>
              {data.coinName}
            </Text>
            <Text style={{fontSize: font(20), color: '#444444'}}>
              {data.coinSymbol}
            </Text>
          </View>
          <View
            style={{
              flex: 3,
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginRight: 10,
            }}>
            <Text
              style={{
                fontSize: font(20),
                color: '#000000',
              }}>
              ${data.usd_price.toFixed(2)}
            </Text>
            <Text
              style={{
                fontSize: font(18),
                color: data._24hrchange > 0 ? 'green' : 'red',
              }}>
              {data._24hrchange > 0
                ? '+' + data._24hrchange.toFixed(2)
                : '-' + data._24hrchange.toFixed(2)}
              %
            </Text>
          </View>
        </View>
        <View style={{flex: 1.8}}>
          <LineChart
            data={chartData}
            width={wd * 0.9}
            height={wd * 0.2}
            chartConfig={chartConfig}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
