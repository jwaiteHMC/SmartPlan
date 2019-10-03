import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

 //In this class definition, the Day Tab of the SmartPlan App is defined.
class DayView extends React.Component{
  render(){
    return(
    <View style={tablestyles.container}>
      <Text>Date</Text>
      <DayTable/> 
    </View>
    )}
}
  //This class defines the Week Tab of the SmartPlan App and will show a week view
class WeekView extends React.Component{
  render(){
    return(
    <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text> Week!</Text>
    </View>
    )}
  
}
 //This class defines the Week Tab of the SmartPlan App and will show a month view 
class MonthView extends React.Component{
  render(){
    return(
    <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text> Month!</Text>
    </View>
    )}
  
}



class DayTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Times', 'Events'],
      widthArr: [60, 355]
    }
  }
 
  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }
 
    return (
      <View style={tablestyles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={tablestyles.header} textStyle={tablestyles.text}/>
            </Table>
            <ScrollView style={tablestyles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[tablestyles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={tablestyles.text}
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
 
const tablestyles = StyleSheet.create({
  container: { flex: 1, padding: 0, paddingTop: 40, backgroundColor: '#fff' },
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