import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Table, Row,} from 'react-native-table-component';
import NewFirebase from './NewFirebase'
import * as firebase from 'firebase' 
export default class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tableHead: ['Event', 'Date', 'Description', 'Time Start', 'Time End', 'Remove'],
      widthArr: [50, 120 , 200,  80, 80, 80],
      index: 1, 
      tableData: [],
      eventName: '', 
      date: '',
      timeStart: '',
      timeEnd: '',

    }
    //this.handleSubmit = this.handleSubmit.bind(this);
    //Initialize firebase
    if(!firebase.apps.length) {firebase.initializeApp(NewFirebase.FirebaseConfig); }
  }
  //Add the input information to the the table storing event information
  onHandleSubmit(){
    const itemsRef = firebase.database().ref('event');
    const event = {
      num: this.state.index,
      eventName: this.state.eventName, 
      date: this.state.date,
      timeStart: this.state.timeStart,
      timeEnd: this.state.timeEnd,
    }

    itemsRef.push(event);


    this.setState({
      eventName: '',
      index: this.state.index + 1,
      date: '',
      timeStart: '',
      timeEnd: '',
    })
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('event');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newTable = [];
        for (let item in items) {
        newTable.push({
          
          id: item,
          num: items[item].num,
          eventName: items[item].eventName, 
          date: items[item].date,
          timeStart: items[item].timeStart,
          timeEnd: items[item].timeEnd,
        });
      }
      this.setState({
        tableData: newTable
        
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/event/${itemId}`);
    itemRef.remove();
  }
  render() {
    const state = this.state; 
    const RemoveButton = (index) => (
      <TouchableOpacity onPress={() => this.removeItem(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Remove</Text>
        </View> 
      </TouchableOpacity>
    );

    return (
      <View>
        <View style={{flexDirection: 'row', padding: 10}}>
        <TextInput
          style={{height: 40, width: 200}}
          placeholder="Event Name"
          onChangeText={(eventName) => this.setState({eventName})}
          value={this.state.eventName}
        />
        <TextInput
          style={{height: 40, width: 200}}
          placeholder="Event Date"
          onChangeText={(date) => this.setState({date})}
          value={this.state.date}
        />
        </View> 
        <View style={{flexDirection: 'row'}}>
        <TextInput
          style={{height: 40, width: 200}}
          placeholder="Start Time "
          onChangeText={(timeStart) => this.setState({timeStart})}
          value={this.state.timeStart}
        />
        <TextInput
          style={{height: 40, width: 200}} 
          placeholder="End Time"
          onChangeText={(timeEnd) => this.setState({timeEnd})}
          value={this.state.timeEnd }
        />
        </View>
          <Button

          title="Add New Event"
          
          onPress={() => this.onHandleSubmit()}/>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 4, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={eventStyles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  state.tableData.map((item) => (
                    <Row 
                      key={item.id}
                      data={[item.num,item.date,item.eventName,item.timeStart, item.timeEnd, RemoveButton(item.id)]}
                      widthArr={state.widthArr}
                      style={[styles.row, item%2 && {backgroundColor: '#F7F6E7'}]}
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
    container: { flex: 1, backgroundColor: '#fff'},
    dataWrapper: { marginTop: -1 },
    row: {backgroundColor: '#E7E6E1' }
    
  });

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16,justifyContent: 'center', color: 'red', paddingTop: 60, backgroundColor: '#fff' },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' }
  });