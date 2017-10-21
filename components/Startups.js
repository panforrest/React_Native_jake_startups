import React, { Component } from 'react'
import {
  Text,
  View,
  ListView,
  TouchableOpacity
} from 'react-native'
import StartupInfo from './StartupInfo'

class Startups extends Component {
  constructor(props, context){
    super(props, context)
    const startups = [
      {id: 0, name: 'uber', industry: 'transportation'},
      {id: 1, name: 'airbnb', industry: 'hospitality'},
      {id: 2, name: 'instagram', industry: 'social'}
    ]
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1: r2) => r1 !== r2
    })
    this.state = {
      startups: dataSource.cloneWithRows(startups)
    }
  }

  renderRow = (startup, sID, rID) => {  //NOT renderRow(startup, sID, rID){
  	return (
  	  <TouchableOpacity onPress={this.selectStartup.bind(this, startup)}>
  	    <Text>{startup.name}</Text>
  	  </TouchableOpacity>	      
  	)
  }

  selectStartup = (startup) => {
  	console.log('selectStartup: ' + JSON.stringify(startup))
  	this.props.navigator.push({
  	  title: startup.name,
  	  component: StartupInfo
  	})
  }

  render(){
    return (
        <ListView
          dataSource={this.state.startups}
          renderRow={this.renderRow}/>
    )
  }
}

export default Startups