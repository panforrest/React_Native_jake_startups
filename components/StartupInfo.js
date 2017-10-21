import React, { Component } from 'react'
import {
  Text,
  StyleSheet
} from 'react-native'

class StartupInfo extends Component {
  render = () =>{
  	return (
      <Text style={styles.container}>This is the StartupInfo</Text>
  	)
  }
}

const styles = StyleSheet.create({
  container: {
  	paddingTop: 64
  }
})

export default StartupInfo