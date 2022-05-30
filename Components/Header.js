import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ht = Dimensions.get('window').height;
const wd = Dimensions.get('window').width;
const font = value => (value / Dimensions.get('screen').height) * ht;

export default function Header(props) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TouchableOpacity
          disabled={props.name == 'My Balance' ? true : false}
          onPress={() => props.navigation.goBack()}
          style={{flex: 1}}>
          <Image
            source={
              props.name == 'My Balance'
                ? require('../assets/photo.jpg')
                : require('../assets/left.png')
            }
            style={{
              height: wd * 0.07,
              width: wd * 0.07,
              borderRadius: wd * 0.2,
            }}
          />
        </TouchableOpacity>
        <View style={{flex: 4, alignItems: 'center'}}>
          <Text style={{fontSize: font(20), color: '#000000'}}>
            {props.name}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Image
            source={require('../assets/notification.png')}
            style={{
              height: wd * 0.06,
              width: wd * 0.06,
              borderRadius: wd * 0.2,
              tintColor: '#000000',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    width: wd * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
