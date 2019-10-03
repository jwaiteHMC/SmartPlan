import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

 //In this class definition, the Day Tab of the SmartPlan App is defined.
class DayView extends React.Component{
  render(){
    return(
    <View style={daytablestyles.container}>
      <DayTable/> 
    </View>
    )}
}
  //This class defines the Week Tab of the SmartPlan App and will show a week view
class WeekView extends React.Component{
  render(){
    return(
    <View style = {weektablestyles.container}>
      <Text> Week </Text>
      <WeekTable/> 
    </View>
    )}
  
}
 //This class defines the Week Tab of the SmartPlan App and will show a month view 
class MonthView extends React.Component{
  render(){
    return(
    <View style = {monthtablestyles.container}>
      <Text> Month, Year </Text>
      <MonthTable/>
    </View>
    )}
  
}

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
      for (let j = 0; j < 8; j += 1) {
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


class WeekTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Times', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
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
      // for (let j = 0; j < 9; j += 1) {
      //   rowData.push(`${i}${j}`);
      // }
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


class DayTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Times', 'Date'],
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
 
const monthtablestyles = StyleSheet.create({
  container: { flex: 1, padding: 0, paddingTop: 50, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});

const daytablestyles = StyleSheet.create({
  container: { flex: 1, padding: 0, paddingTop: 25, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});

const weektablestyles = StyleSheet.create({
  container: { flex: 1, padding: 0, paddingTop: 50, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    padding: 16, 
    paddingTop: 30
  },
  scene: {
    flex: 1
  },
  head: {  
    height: 40,  backgroundColor: '#f1f8ff'  
  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' }
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