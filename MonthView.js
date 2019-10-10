import React from 'react';
import {Text, View,} from 'react-native';

 //This class defines the Week Tab of the SmartPlan App and will show a month view 
export default class MonthView extends React.Component{
    render(){
      return(
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> Month!</Text>
      </View>
      )}
}