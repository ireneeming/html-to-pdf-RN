/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const CsvScreen = () => {
  return (
    <View style={styles.MainContainer}>
      <TouchableOpacity>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaJnsWXEDdlC5Hjn28KUVgd1IJp95h6YqsMKcC6SUq8RkWEuf0ef6IF7uJpHxWinpGFQM&usqp=CAU',
          }}
          style={styles.ImageStyle}
        />
        <Text style={styles.text}>Create CSV</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CsvScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
  ImageStyle: {
    height: 150,
    width: 150,
    resizeMode: 'center',
  },
});
