import { View,  Pressable ,Text } from 'react-native'
import React from 'react'
import styles from './styles'

const StyledButton = (props) => {
    const type = props.type;
    const bgcolor = type === 'primary' ? 'black' : 'white';
    const tcolor = type === "primary" ? 'white' : 'black';

  return (
    <View style = {styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: bgcolor}]}
        onPress= {()=> props.onPress()}
      >
        <Text style={[styles.text, {color: tcolor}]}>{props.content}</Text>
      </Pressable>
    </View>
  )
}

export default StyledButton