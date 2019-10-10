import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, TextInput} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import WeekTable from './WeekTable'

//This class defines the Week Tab of the SmartPlan App and will show a week view
export default class WeekView extends React.Component{
    render(){
      todayweekDay = new Date().getDay(); // gets current weekday
      days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      weekDay = days[todayweekDay]; 
        return(
        <View style={weektablestyles.container}>
          <View style={{flexDirection: 'row', height: 80, paddingTop: 50, justifyContent: 'center'}}>
            <Text style = {{fontSize: 20, fontWeight: 'bold'}}>Today is: {weekDay}</Text> 
          </View>
          <View style={weektablestyles.container}>
            <WeekTable/> 
          </View>
        </View>
        )}
}

//style for Week table 
const weektablestyles = StyleSheet.create({
    container: { flex: 1, padding: 0, paddingTop: 0, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }
  });