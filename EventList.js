import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, TextInput} from 'react-native';
import { Table, Row,} from 'react-native-table-component';

export default class EventList extends React.Component {
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
  //Add the input information to the the table storing event information
  __addRows() {
    table = this.state.tableData
    rowData = []
    //pushing values to the 
    rowData.push(`${this.state.index}`);
    rowData.push(`${this.state.date}`); 
    rowData.push(`${this.state.event}`);
    rowData.push(`${this.state.timeStart}`)
    rowData.push(`${this.state.timeEnd}`)
    rowData.push(`${'-'}`)
    table.push(rowData)
    //Rerender table with new information
    this.setState({tableData: table})
    //Update index value
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
const eventStyles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }
    
  });

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16,justifyContent: 'center', color: 'red', paddingTop: 60, backgroundColor: '#fff' },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' }
  });