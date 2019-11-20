import React from 'react';
import {StyleSheet, View, ScrollView,} from 'react-native';
import {Table, TableWrapper, Row, Cell,} from 'react-native-table-component';

function getFormattedCurrentDay() {
        var cDate = new Date();
        var month = cDate.getMonth() + 1;
        var day = cDate.getDate();
        return(`${month}/${day}`);
    } 

  
function getCellStyle(colNum, contents, rowNum) {
        switch(colNum) {
            case 0: {
                    return {backgroundColor: '#ffffff', width: 59};
            }
            case 1: {
                if(global.startTimes.includes(rowNum) || global.mediumTimes.includes(rowNum) || global.endtimes.includes(rowNum)) {
                if(contents == " ") {
                    return {backgroundColor: '#ffffff', width: 355,};
                } else if(contents == "   ") {
                    return {backgroundColor: '#ffff00', width: 355,};
                } else {
                    return {backgroundColor: '#ffff00', width: 355,};
                }
                } else {
                if(contents == " ") {
                    return {backgroundColor: '#ffffff', width: 355,};
                } else if(contents == "   ") {
                    return {backgroundColor: '#ffc0cb', width: 355,};
                } else {
                    return {backgroundColor: '#ffc0cb', width: 355,};
                }

                }
            }
        }
        console.log(`${colNum} CONTENTS: ${contents}`);

    }

// creates and renders Day table
export default class DayTable extends React.Component {
    constructor(props) {
      todayDay = new Date().getDate();
      super(props);
      this.state = {
        tableHead: ['Time', 'Events'],
        widthArr: [60, 355]
      }
    }
     
    render() {

      const tableData = [];
      var currentDayEventNames = [];
      var currentDayRestrictionNames = [];

      var currentDay = getFormattedCurrentDay();
      console.log(currentDay);
      for(let j = 0; j < global.eventData.length; j++){
        if(global.eventData[j].date == currentDay) {
            global.getStartTimes(global.eventData[j].timeStart, global.eventData[j].timeEnd);
            currentDayEventNames.push(global.eventData[j].eventName);
        }
      }
    
      for(let j = 0; j < global.restrictionData.length; j++){
        if(global.restrictionData[j].date == currentDay) {
            global.getRestrictionStartTimes(global.restrictionData[j].timeStart, global.restrictionData[j].timeEnd);
            currentDayRestrictionNames.push(global.restrictionData[j].restrictionName); 
        }
      }

      var currentDayEventCounter = 0;
      var currentDayRestrictionCounter = 0;

      for (let i = 0; i < 48; i += 1) {

        const rowData = [];
        minutes = i % 2 ? '30' : '00' ;
        var added = `${Math.floor(i / 2)}` + `:` + minutes;
        rowData.push(added);
        if(global.startTimes.includes(i)){
          rowData.push(currentDayEventNames[currentDayEventCounter]);
          currentDayEventCounter += 1;
        }
        else if(global.endtimes.includes(i)){
          rowData.push("  ");
        }
        else if(global.mediumTimes.includes(i)){
          rowData.push("  ");
        }
        else if(global.restrictionStartTimes.includes(i)){
          rowData.push(currentDayRestrictionNames[currentDayRestrictionCounter]);
          currentDayRestrictionCounter += 1;
        }
        else if(global.restrictionMediumTimes.includes(i)){
          rowData.push("  ");
        }
         else if(global.restrictionEndTimes.includes(i)){
          rowData.push("  ");
        }
        else {
            rowData.push(" ");
        }
        tableData.push(rowData);
      }
        
        
      return (
        <View style={daytablestyles.container}>
          <ScrollView horizontal={true}>
            <View>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={daytablestyles.header} textStyle={daytablestyles.text}/>
              </Table>
              <ScrollView style={daytablestyles.dataWrapper}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                  {
                    tableData.map((rowData, index) => (
                        <TableWrapper key={index} style={daytablestyles.wrapper}>   
                            {
                                rowData.map((cellData, cellIndex) => (
                                    <Cell key={cellIndex} data={cellData} style={getCellStyle(cellIndex, cellData, index)}/> 
                                ))
                            }
                        </TableWrapper> 
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

  const daytablestyles = StyleSheet.create({
    container: { flex: 1, padding: 0, paddingTop: 0, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    eventTime: {backgroundColor: '#ffff00',},
    regularTime: {backgroundColor: '#ffffff',},
    timeSlot: {backgroundColor: '#ffffff', width: 75},
    dataWrapper: { marginTop: -1 },
    wrapper: { flexDirection: 'row' },
    row: { height: 40, backgroundColor: '#fff' }
  });
  
