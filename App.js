import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

 //In this class definition, the Day Tab of the SmartPlan App is defined.
class DayView extends React.Component{
  render(){
    
    return(
    <View style={styles.container}>
      
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
      tableHead: ['', 'Head1', 'Head2', 'Head3'],
      tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
      tableData: [
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '3'],
        ['a', 'b', 'c']
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}

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