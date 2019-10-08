import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

 //In this class definition, the Day Tab of the SmartPlan App is defined.
class DayView extends React.Component{
  render(){
    todayDay = new Date().getDate(); // gets current day
    todayMonth =  new Date().getMonth(); // gets current month (numerical representation, starts from 0)
    // changes numerical representation of month to name representation of month
    const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    monthName = months[todayMonth];

    return(
    <View style={daytablestyles.container}>
      <View style={{flexDirection: 'row', height: 80, paddingTop: 50, justifyContent: 'center'}}>
        <Text style = {{fontSize: 20, fontWeight: 'bold'}}> {monthName} {todayDay}</Text> 
      </View>
      <View style={daytablestyles.container}>
        <DayTable/> 
      </View>
    </View>
    )}
}
  //This class defines the Week Tab of the SmartPlan App and will show a week view
class WeekView extends React.Component{
  render(){
    return(
    <View style={weektablestyles.container}>
      <View style={{flexDirection: 'row', height: 80, paddingTop: 50, justifyContent: 'center'}}>
        <Text style = {{fontSize: 20, fontWeight: 'bold'}}>Week</Text> 
      </View>
      <View style={weektablestyles.container}>
        <WeekTable/> 
      </View>
    </View>
    )}
}

 //This class defines the Month Tab of the SmartPlan App and will show a month view 
class MonthView extends React.Component{
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

// creates and renders Day table
class DayTable extends React.Component {
  constructor(props) {
    todayDay = new Date().getDate();
    super(props);
    this.state = {
      tableHead: ['Time', 'Events'],
      widthArr: [60, 355]
    }
  }

  
 
  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 24; i += 1) {
      const rowData = [];
      rowData.push(`${i}` + `:00`);
      tableData.push(rowData);
      rowData = [];
      rowData.push(`${i}` + `:30`);
      // for (let j = 0; j < 9; j += 1) {
      //   rowData.push(`${i}${j}`);
      // }
      tableData.push(rowData);
    }
 
    return (
      <View style={daytablestyles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={daytablestyles.header} textStyle={daytablestyles.text}/>
            </Table>
            <ScrollView style={daytablestyles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[daytablestyles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={daytablestyles.text}
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

// creates and renders Week table
class WeekTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Time', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      widthArr: [60, 100, 100, 100, 100, 100, 100, 100]
    }
  }
 
  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 24; i += 1) {
      const rowData = [];
      rowData.push(`${i}` + `:00`);
      tableData.push(rowData);
      rowData = [];
      rowData.push(`${i}` + `:30`);
      tableData.push(rowData);
    }
 
    return (
      <View style={weektablestyles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={weektablestyles.header} textStyle={weektablestyles.text}/>
            </Table>
            <ScrollView style={weektablestyles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[weektablestyles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={weektablestyles.text}
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

// creates and renders Month table
class MonthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      widthArr: [100, 100, 100, 100, 100, 100, 100]
    }
  }
 
  render() {

    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 5; i += 1) {

      const rowData = [];
      for (let j = 1; j < 9; j += 1) {
        day = (i*7)+j;
        rowData.push(`${day}`);
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
 
//style for Day table 
const daytablestyles = StyleSheet.create({
  container: { flex: 1, padding: 0, paddingTop: 0, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});

//style for Week table 
const weektablestyles = StyleSheet.create({
  container: { flex: 1, padding: 0, paddingTop: 0, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});

//style for Month table 
const monthtablestyles = StyleSheet.create({
  container: { flex: 1, padding: 0, paddingTop: 0, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});

const AppNavigator = createBottomTabNavigator({
  Day: {screen: DayView},
  Week: {screen: WeekView},
  Month: {screen:MonthView},
}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;

  }
}