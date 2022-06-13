import React from 'react';
import {Text, ImageBackground, View} from 'react-native';
import styles from './style';
import StyledButton from '../StyledButton';

const  CarItem =(props) => {

    const {name, tagline, image , taglineCTA} = props.car;

    return (
        <View style={styles.carContainer}>
        <ImageBackground
        source={image}
        style={styles.image}
        />
        <View style = {styles.titles}>
          <Text style = {styles.title}>{name}</Text>
          <Text style = {styles.subtitle}>{tagline} {' '}
            <Text style={styles.taglineCTA}>{taglineCTA}</Text>
          </Text>
          
        </View>

        <View style={styles.buttonContainer}>
            <StyledButton type='primary' 
                content={"custom order"}
                onPress = {()=> {
                    console.warn('CUSTOM ORDER');
                }}
                />
            <StyledButton type='secondary' 
                content={"Existing inventory"}
                onPress = {()=> {
                    console.warn('EXISTING INV');
                }}
                />
        </View>
      </View>
      );
}

export default CarItem;
