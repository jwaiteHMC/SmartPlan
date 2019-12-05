import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import DayTable from './DayTable'
import App from '../../App';

 //In this class definition, the Day Tab of the SmartPlan App is defined.
export default class DayView extends React.Component{


incrementDay(){
  global.currentDayPage.setDate(global.currentDayPage.getDate() + 1);
  //need to force App to update to reflect change (code below does not work, but omething like this)
  this.forceUpdate();
}


decrementDay(){
  global.currentDayPage.setDate(global.currentDayPage.getDate() - 1);
  //need to force App to update to reflect change (code below does not work, but omething like this)
  this.forceUpdate();
}

 render(){
   todayDay = currentDayPage.getDate(); // gets day
   todayMonth =  currentDayPage.getMonth(); // gets month (numerical representation, starts from 0)
   // changes numerical representation of month to name representation of month
   const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
   monthName = months[todayMonth];

   return(
   <View style={daytablestyles.container}>
      <TouchableOpacity onPress={() => this.incrementDay()}> 
        <View style={{flexDirection: 'row-reverse', height: 80, paddingLeft: 20, paddingTop: 50}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Next Day</Text>
        </View> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.decrementDay()}>
        <View style={{flexDirection: 'row-reverse', height: 80, paddingTop: 30, paddingLeft: 20, justifyContent: 'right'}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Previous Day</Text>
        </View> 
      </TouchableOpacity>
     <View style={{flexDirection: 'row', height: 30, paddingTop: 0, justifyContent: 'center'}}>
       <Text style = {{fontSize: 20, fontWeight: 'bold'}}> Today is: {monthName} {todayDay}</Text> 
     </View>
     <View style= {daytablestyles.container}>
       <DayTable/> 
     </View>
   </View>
   )}
}

//style for Day table 
const daytablestyles = StyleSheet.create({
    container: { flex: 1, padding: 0, paddingTop: 10, backgroundColor: '#fff' },
    header: { height: 20, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' },
  });


