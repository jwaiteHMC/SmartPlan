import React from 'react';
import AppContainer from './AppContainer';
import NewFirebase from './Tabs/Event/NewFirebase'
import * as firebase from 'firebase'
global.startTimes = [];
global.endtimes = [];
global.mediumTimes = [];

global.getTimeBlock = (time) => {
  hourMinute = time.split(":");
  hour = 2 * parseInt(hourMinute[0], 10);
  minute = (parseInt(hourMinute[1], 10)) / 30 ;
  return hour + minute;
};

global.getStartTimes = (start, end) => {
  newStart = global.getTimeBlock(start);
  newEnd = global.getTimeBlock(end);
  for(let x = newStart; x <= newEnd; x++ ){
    if(x == newStart){
      global.startTimes.push(x);
    }
    else if(x == newEnd){
      global.endTimes.push(x);
    }
    else{
      global.mediumTimes.push(x);
    }
  }
}


export default class App extends React.Component {
  constructor(props){
    super(props);
      if(!firebase.apps.length) {firebase.initializeApp(NewFirebase.FirebaseConfig); }
      global.tableData = [];  
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
  render() {
    return <AppContainer />;

  }
} 
