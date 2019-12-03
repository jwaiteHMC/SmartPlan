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
global.currentDayPage = new Date();

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

// Function to update the restriction time block arrays
// with the the first time block of a restriction, the
// final time block of a restriction, and all other time
// blocks in between of that restriction.
global.getRestrictionStartTimes = (start, end) => {
  newStart = global.getTimeBlock(start); // Get time block of beginning of restriction
  newEnd = global.getTimeBlock(end); // Get time block of end of restriction

  // Add the calcualted start block to the list of restriction start times
  global.restrictionStartTimes.push(newStart);
 
  // Add the calcualted start block to the list of restriction start times
  global.restrictionEndTimes.push(newEnd);
 
  // Add all time blocks between the calculated start and end time blocks
  // to the list of time blocks between start and end time blocks for
  // restrictions. 
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
