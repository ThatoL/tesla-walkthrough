import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import React from 'react';
import cars from './cars';
import CarItem from '../carItem';

export default function CarsList() {
  return (
    <View style={styles.container}>
      <FlatList
        data = {cars}
        renderItem={({item}) => {
            return <CarItem car={item} />
        }}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    }
})