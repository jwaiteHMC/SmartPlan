import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, TextInput} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import MonthTable from './MonthTable'

//This class defines the Month Tab of the SmartPlan App and will show a month view 
export default class MonthView extends React.Component{
    render(){
      todayYear = new Date().getFullYear(); // gets current day
      todayMonth =  new Date().getMonth(); // gets current month (numerical representation, starts from 0)
      
      // changes numerical representation of month to name representation of month
      const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      monthName = months[todayMonth];
  
      return(
      <View style={monthtablestyles.container}>
        <View style={{flexDirection: 'row', height: 80, paddingTop: 50, justifyContent: 'center'}}>
          <Text style = {{fontSize: 20, fontWeight: 'bold'}} >{monthName} {todayYear}</Text> 
        </View>
        <View style={monthtablestyles.container}>
          <MonthTable/> 
        </View>
      </View>
      )}
    
  }
  //style for Month table 
const monthtablestyles = StyleSheet.create({
    container: { flex: 1, padding: 0, paddingTop: 0, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }
  });
  