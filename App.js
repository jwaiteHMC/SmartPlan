import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

 //In this class definition, the Day Tab of the SmartPlan App is defined.
class DayView extends React.Component{
  render(){
    
    return(
    <View style={tablestyles.container}>
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
      tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      tableData: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={tablestyles.container}>
        <Table borderStyle={{borderWidth: 5, borderColor: '#c1e1ff'}}>
          <Row data={state.tableHead} style={tablestyles.head} textStyle={tablestyles.text}/>
          <Rows data={state.tableData} textStyle={tablestyles.text}/>
        </Table>
      </View>
    )
  }
}
 
const tablestyles = StyleSheet.create({
  container: { flex: 1, padding: 15, paddingTop: 50, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
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