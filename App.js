import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, TextInput} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

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

class EventView extends React.Component{
  render(){
    return(
    <View style = {eventStyles.container}>
      <EventList/>
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
  Events: {screen:EventView},
}
);

const AppContainer = createAppContainer(AppNavigator); 

export default class App extends React.Component {
  render() {
    return <AppContainer />;

  }
}