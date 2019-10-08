import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, TextInput} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { Table, TableWrapper, Row, Rows, Col,} from 'react-native-table-component';

 //In this class definition, the Day Tab of the SmartPlan App is defined.
class DayView extends React.Component{
  render(){
    
    return(
     
    <View style={styles.container}>
      <Text>Hi</Text>
      {/* Add Buttons to the Day Tab */}
      {/* This will show a pop-up with the text below */}
      <Button
          title="Press for help"
        
          onPress={() => Alert.alert('Sorry this feature is not available')}
        /> 
        {/*This will create a butotn that goes to the week tab on click */}
        <Button
          title="Go to Week" 
          onPress={() => this.props.navigation.navigate('Week')}
        />
        <DayTable/>
        </View>
        
        
    
 
    )}
}
  //This class defines the Week Tab of the SmartPlan App and will show a week view
class WeekView extends React.Component{
  render(){
    return(
    <View style = {styles.container}>
    <DayTable/>
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

class EventView extends React.Component{
  render(){
    return(
    <View style = {eventStyles.container}>
      <EventList/>
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

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Event', 'Date', 'Decription', 'Time Start', 'Time End'],
      widthArr: [50, 120 , 200,  80, 80,],
      index: 1,
      tableData: [],
      event: ' ',
      date: ' ',
      timeStart: ' ',
      timeEnd: ' ',

    }
  }
  __addRows() {
    table = this.state.tableData
    rowData = []
    rowData.push(`${this.state.index}`);
    rowData.push(`${this.state.date}`);
    rowData.push(`${this.state.event}`);
    rowData.push(`${this.state.timeStart}`)
    rowData.push(`${this.state.timeEnd}`)
    rowData.push(`${'-'}`)
    table.push(rowData)
    this.setState({tableData: table})
    this.setState({index: this.state.index + 1})
  }
  
  render() {
    const state = this.state; 
    
    return (
      <View style={eventStyles.container}>
        <View style = {{flexDirection: 'row'}}>
          <Text>Event Name </Text>
          <TextInput
            style={{height: 40, width: 150}}
            placeholder="Type here to translateeeee!"
            onChangeText={(event) => this.setState({event})}
            value={this.state.event}
          />
          <Text >Event Date </Text>
          <TextInput
            style={{height: 40, width: 100}}
            placeholder="Type here to translateeeee!"
            onChangeText={(date) => this.setState({date})}
            value={this.state.date}
            />
            </View> 
            <View style = {{flexDirection: 'row'}}>
          <Text >Time Start </Text>
          <TextInput
            style={{height: 40, width: 100}}
            placeholder="Type here to translateeeee!"
            onChangeText={(timeStart) => this.setState({timeStart})}
            value={this.state.timeStart}
          />
          <Text>Time End</Text>
          <TextInput
            style={{height: 40, width: 100}}
            placeholder="Type here to translateeeee!"
            onChangeText={(timeEnd) => this.setState({timeEnd})}
            value={this.state.timeEnd}
          />
          </View>
          <Button
          title="Add New Event"
          
          onPress={() => this.__addRows()}/>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 4, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={eventStyles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  state.tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
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

const astyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    padding: 16, 
    paddingTop: 60,
  },
  scene: {
    flex: 1
  },
});


const styles = StyleSheet.create({
  container: { flex: 1, padding: 16,justifyContent: 'center', color: 'red', paddingTop: 60, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' }
});

const eventStyles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
  
});

const AppNavigator = createBottomTabNavigator({
  Day: {screen: DayView},
  Week: {screen: WeekView},
  Month: {screen:MonthView},
  Events: {screen:EventView},
}
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}