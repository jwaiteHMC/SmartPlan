import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, TextInput} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

// creates and renders Month table
export default class MonthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      widthArr: [100, 100, 100, 100, 100, 100, 100]
    }
  }
 
  render() {
    todayYear = new Date().getFullYear(); // gets current day
    todayMonth =  new Date().getMonth(); // gets current month (numerical representation, starts from 0)
    currentdate = new Date(todayYear,todayMonth);
    var moment = require('moment');
    var startMoment = moment([todayYear, todayMonth]); 
    var startMonth = moment(startMoment).startOf('month'); //gets first day of current month
    var weekdayStart = startMonth.getDay //gets the weekday of first of current month
    var daysInMonth = currentdate.getDate(); //gets number of days in current month

    // const state = this.state;
    // const tableData = [];
    // for (let i = 0; i < 5; i += 1) {
    //   const rowData = [];
    //   for (let j = 1; j < 9; j += 1) {
    //     day = (i*7)+j;
    //     rowData.push(`${day}`);
    //   }
    //   tableData.push(rowData);
    // } 

    // puts days in correct alignment on calender 
    const state = this.state;
    const tableData = [];
    const rowData = [];
    var daycounter = 0;

    //puts correct days for first week of the month - does not work 
    for (let i = 0; i < 7; i++){
      if (i < weekdayStart){
          rowData.push(' ')
      }
      if (i >= weekdayStart){
        rowData.push(`${daycounter}`); 
        daycounter++;
      }
      tableData.push(rowData);
    }

    
    return (
      <View style={monthtablestyles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={monthtablestyles.header} textStyle={monthtablestyles.text}/>
            </Table>
            <ScrollView style={monthtablestyles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[monthtablestyles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      //style={[weektablestyles.row]} // make all rows white 
                      textStyle={monthtablestyles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}
  //style for Month table 
  const monthtablestyles = StyleSheet.create({
    container: { flex: 1, padding: 0, paddingTop: 0, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#fff' }
  });
  