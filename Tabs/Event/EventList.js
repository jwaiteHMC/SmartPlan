import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TextInput, TouchableOpacity, Picker} from 'react-native';
import { Table, Row,} from 'react-native-table-component';
import NewFirebase from './NewFirebase'
import * as firebase from 'firebase' 

global.tableData = []
export default class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      tableHead: ['Event', 'Date', 'Description', 'Time Start', 'Time End', 'Remove'],
      widthArr: [50, 120 , 200,  80, 80, 80],
      index: 1, 
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
        //update locally stores list if database changes 
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
      //access the global variable that stores our data locally
      global.tableData = newTable;
      //force re-render in order to update the list
      this.forceUpdate();
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
          <Text>Time Start</Text>
        <Picker
          style = {{width: 120}}
          selectedValue = {this.state.timeStart}
          onValueChange = {(itemValue, itemIndex) => this.setState({timeStart:itemValue})}
          >
        <Picker.Item label = "0:00" value = "0:00"></Picker.Item>
        <Picker.Item label = "0:00" value = "0:00"></Picker.Item>
        <Picker.Item label = "0:30" value = "0:30"></Picker.Item>
        <Picker.Item label = "1:00" value = "1:00"></Picker.Item>
        <Picker.Item label = "1:30" value = "1:30"></Picker.Item>
        <Picker.Item label = "2:00" value = "2:00"></Picker.Item>
        <Picker.Item label = "2:30" value = "2:30"></Picker.Item>
        <Picker.Item label = "3:00" value = "3:00"></Picker.Item>
        <Picker.Item label = "3:30" value = "3:30"></Picker.Item>
        <Picker.Item label = "4:00" value = "4:00"></Picker.Item>
        <Picker.Item label = "4:30" value = "4:30"></Picker.Item>
        <Picker.Item label = "5:00" value = "5:00"></Picker.Item>
        <Picker.Item label = "5:30" value = "5:30"></Picker.Item>
        <Picker.Item label = "6:00" value = "6:00"></Picker.Item>
        <Picker.Item label = "6:30" value = "6:30"></Picker.Item>
        <Picker.Item label = "7:00" value = "7:00"></Picker.Item>
        <Picker.Item label = "7:30" value = "7:30"></Picker.Item>
        <Picker.Item label = "8:00" value = "8:00"></Picker.Item>
        <Picker.Item label = "8:30" value = "8:30"></Picker.Item>
        <Picker.Item label = "9:00" value = "9:00"></Picker.Item>
        <Picker.Item label = "9:30" value = "9:30"></Picker.Item>
        <Picker.Item label = "10:00" value = "10:00"></Picker.Item>
        <Picker.Item label = "10:30" value = "10:30"></Picker.Item>
        <Picker.Item label = "11:00" value = "11:00"></Picker.Item>
        <Picker.Item label = "11:30" value = "11:30"></Picker.Item>
        <Picker.Item label = "12:00" value = "12:00"></Picker.Item>
        <Picker.Item label = "12:30" value = "12:30"></Picker.Item>
        <Picker.Item label = "13:00" value = "13:00"></Picker.Item>
        <Picker.Item label = "13:30" value = "13:30"></Picker.Item>
        <Picker.Item label = "14:00" value = "14:00"></Picker.Item>
        <Picker.Item label = "14:30" value = "14:30"></Picker.Item>
        <Picker.Item label = "15:00" value = "15:00"></Picker.Item>
        <Picker.Item label = "15:30" value = "15:30"></Picker.Item>
        <Picker.Item label = "16:00" value = "16:00"></Picker.Item>
        <Picker.Item label = "16:30" value = "16:30"></Picker.Item>
        <Picker.Item label = "17:00" value = "17:00"></Picker.Item>
        <Picker.Item label = "17:30" value = "17:30"></Picker.Item>
        <Picker.Item label = "18:00" value = "18:00"></Picker.Item>
        <Picker.Item label = "18:30" value = "18:30"></Picker.Item>
        <Picker.Item label = "19:00" value = "19:00"></Picker.Item>
        <Picker.Item label = "19:30" value = "19:30"></Picker.Item>
        <Picker.Item label = "20:00" value = "20:00"></Picker.Item>
        <Picker.Item label = "20:30" value = "20:30"></Picker.Item>
        <Picker.Item label = "21:00" value = "21:00"></Picker.Item>
        <Picker.Item label = "21:30" value = "21:30"></Picker.Item>
        <Picker.Item label = "22:00" value = "22:00"></Picker.Item>
        <Picker.Item label = "22:30" value = "22:30"></Picker.Item>
        <Picker.Item label = "23:00" value = "23:00"></Picker.Item>
        <Picker.Item label = "23:30" value = "23:30"></Picker.Item>
        </Picker>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Time End</Text>
        <Picker
          style = {{width: 120}}
          selectedValue = {this.state.timeEnd}
          onValueChange = {(itemValue, itemIndex) => this.setState({timeEnd:itemValue})}
          >
        <Picker.Item label = "0:00" value = "0:00"></Picker.Item>
        <Picker.Item label = "0:00" value = "0:00"></Picker.Item>
        <Picker.Item label = "0:30" value = "0:30"></Picker.Item>
        <Picker.Item label = "1:00" value = "1:00"></Picker.Item>
        <Picker.Item label = "1:30" value = "1:30"></Picker.Item>
        <Picker.Item label = "2:00" value = "2:00"></Picker.Item>
        <Picker.Item label = "2:30" value = "2:30"></Picker.Item>
        <Picker.Item label = "3:00" value = "3:00"></Picker.Item>
        <Picker.Item label = "3:30" value = "3:30"></Picker.Item>
        <Picker.Item label = "4:00" value = "4:00"></Picker.Item>
        <Picker.Item label = "4:30" value = "4:30"></Picker.Item>
        <Picker.Item label = "5:00" value = "5:00"></Picker.Item>
        <Picker.Item label = "5:30" value = "5:30"></Picker.Item>
        <Picker.Item label = "6:00" value = "6:00"></Picker.Item>
        <Picker.Item label = "6:30" value = "6:30"></Picker.Item>
        <Picker.Item label = "7:00" value = "7:00"></Picker.Item>
        <Picker.Item label = "7:30" value = "7:30"></Picker.Item>
        <Picker.Item label = "8:00" value = "8:00"></Picker.Item>
        <Picker.Item label = "8:30" value = "8:30"></Picker.Item>
        <Picker.Item label = "9:00" value = "9:00"></Picker.Item>
        <Picker.Item label = "9:30" value = "9:30"></Picker.Item>
        <Picker.Item label = "10:00" value = "10:00"></Picker.Item>
        <Picker.Item label = "10:30" value = "10:30"></Picker.Item>
        <Picker.Item label = "11:00" value = "11:00"></Picker.Item>
        <Picker.Item label = "11:30" value = "11:30"></Picker.Item>
        <Picker.Item label = "12:00" value = "12:00"></Picker.Item>
        <Picker.Item label = "12:30" value = "12:30"></Picker.Item>
        <Picker.Item label = "13:00" value = "13:00"></Picker.Item>
        <Picker.Item label = "13:30" value = "13:30"></Picker.Item>
        <Picker.Item label = "14:00" value = "14:00"></Picker.Item>
        <Picker.Item label = "14:30" value = "14:30"></Picker.Item>
        <Picker.Item label = "15:00" value = "15:00"></Picker.Item>
        <Picker.Item label = "15:30" value = "15:30"></Picker.Item>
        <Picker.Item label = "16:00" value = "16:00"></Picker.Item>
        <Picker.Item label = "16:30" value = "16:30"></Picker.Item>
        <Picker.Item label = "17:00" value = "17:00"></Picker.Item>
        <Picker.Item label = "17:30" value = "17:30"></Picker.Item>
        <Picker.Item label = "18:00" value = "18:00"></Picker.Item>
        <Picker.Item label = "18:30" value = "18:30"></Picker.Item>
        <Picker.Item label = "19:00" value = "19:00"></Picker.Item>
        <Picker.Item label = "19:30" value = "19:30"></Picker.Item>
        <Picker.Item label = "20:00" value = "20:00"></Picker.Item>
        <Picker.Item label = "20:30" value = "20:30"></Picker.Item>
        <Picker.Item label = "21:00" value = "21:00"></Picker.Item>
        <Picker.Item label = "21:30" value = "21:30"></Picker.Item>
        <Picker.Item label = "22:00" value = "22:00"></Picker.Item>
        <Picker.Item label = "22:30" value = "22:30"></Picker.Item>
        <Picker.Item label = "23:00" value = "23:00"></Picker.Item>
        <Picker.Item label = "23:30" value = "23:30"></Picker.Item>
        </Picker>
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
                  global.tableData.map((item) => (
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
