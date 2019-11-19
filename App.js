import React from 'react';
import AppContainer from './AppContainer';
import NewFirebase from './Tabs/Event/NewFirebase'
import * as firebase from 'firebase'
global.startTimes = [];
global.endtimes = [];
global.mediumTimes = [];
global.restrictionStartTimes = [];
global.restrictionMediumTimes = [];
global.restrictionEndTimes = [];

global.getTimeBlock = (time) => {
  hourMinute = time.split(":");
  hour = 2 * parseInt(hourMinute[0], 10);
  minute = (parseInt(hourMinute[1], 10)) / 30 ;
  return hour + minute;
};

global.getStartTimes = (start, end) => {
  newStart = global.getTimeBlock(start);
  newEnd = global.getTimeBlock(end);
  global.startTimes.push(newStart);
  global.endtimes.push(newEnd);
  for(let x = newStart + 1; x < newEnd; x++ ){
      mediumTimes.push(x);
    }
    
  }

global.getRestrictionStartTimes = (start, end) => {
  newStart = global.getTimeBlock(start);
  newEnd = global.getTimeBlock(end);
  global.restrictionStartTimes.push(newStart);
  global.restrictionEndTimes.push(newEnd);
  for(let x = newStart + 1; x < newEnd; x++ ){
      global.restrictionMediumTimes.push(x);
    }
    
  }


global.num = 42; 

export default class App extends React.Component {
  constructor(props){
    super(props);
      if(!firebase.apps.length) {firebase.initializeApp(NewFirebase.FirebaseConfig); }
      global.eventData = [];  
      global.restrictionData = [];
      const eventItemsRef = firebase.database().ref('event');
      eventItemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newEventTable = [];
        //update locally stores list if database changes 
        for (let item in items) {
        newEventTable.push({
          
          id: item,
          num: items[item].num,
          eventName: items[item].eventName, 
          date: items[item].date,
          timeStart: items[item].timeStart,
          timeEnd: items[item].timeEnd,
        });
      }
      //access the global variable that stores our data locally
      global.eventData = newEventTable;
      //force re-render in order to update the list
      this.forceUpdate();
    });   
    const restrictionItemsRef = firebase.database().ref('restriction');
      restrictionItemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newRestrictionTable = [];
        //update locally stores list if database changes 
        for (let item in items) {
        newRestrictionTable.push({
          
          id: item,
          num: items[item].num,
          restrictionName: items[item].restrictionName, 
          date: items[item].date,
          timeStart: items[item].timeStart,
          timeEnd: items[item].timeEnd,
        });
      }
      //access the global variable that stores our data locally
      global.restrictionData = newRestrictionTable;
      //force re-render in order to update the list
      this.forceUpdate();
    });  
  }
  render() {
    return <AppContainer />;

  }
} 
