import React from 'react';
import {StyleSheet, View,} from 'react-native';
import RestrictionList from './RestrictionList'

//Tab created that will display the list of events
export default class RestrictionView extends React.Component{
    render(){
      return(
        //uses eventStyle to change layout of tab 
      <View style = {restrictionStyles.container}>
        {/* This will render the EventList component in the tab and allow
        the user to input events */}
        <RestrictionList/>
      </View> 
      )}
  }
  const restrictionStyles = StyleSheet.create({
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
