import React from 'react';
import {StyleSheet, View,} from 'react-native';
import EventList from './EventList'

//Tab created that will display the list of events
export default class EventView extends React.Component{
    render(){
      return(
        //uses eventStyle to change layout of tab 
      <View style = {eventStyles.container}>
        {/* This will render the EventList component in the tab and allow
        the user to input events */}
        <EventList/>
      </View> 
      )}
  }
  const eventStyles = StyleSheet.create({
    container: { 
      flex: 1, 
      padding: 16, 
      paddingTop: 30, 
      backgroundColor: '#fff'
    },
    header: { 
      height: 50, 
      backgroundColor: '#537791' 
    },
    text: { 
      textAlign: 'center', 
      fontWeight: '100' 
    },
    dataWrapper: { 
      marginTop: -1 
    },
    row: { 
      height: 40, 
      backgroundColor: '#E7E6E1' 
    }
  });