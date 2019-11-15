import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, TextInput} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import WeekTable from './WeekTable'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//This class defines the Week Tab of the SmartPlan App and will show a week view
export default class WeekView extends React.Component{
    render(){
      todayweekDay = new Date().getDay(); // gets current weekday
      days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      weekDay = days[todayweekDay]; 

      beginningOfWeek = calculateBeginningOfWeek();
      endOfWeek = calculateEndOfWeek();

        return(
        <View style={weektablestyles.container}>
          <View style={{flexDirection: 'row', height: 80, paddingTop: 50, justifyContent: 'center'}}>
            <Text style = {{fontSize: 20, fontWeight: 'bold'}}>{beginningOfWeek} ~ {endOfWeek}</Text> 
          </View>
          <View style={weektablestyles.container}>
            <WeekTable/> 
          </View>
        </View>
        )}
}

function daysInThisMonth() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();        
}

function daysInMonth (month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function correctNumericSuffix(number) {
    if(number == 1 || number == 21 || number == 31) {
        return "st";
    } else if (number == 2 || number == 22) {
        return "nd";
    } else if (number == 3 || number == 23) {
        return "rd";
    } else {
        return "th";
    }
}

function calculateBeginningOfWeek() {

    var beginningOfWeek = ''; // String we will return of format 'MONTH_NAME DAY_OF_MONTH'
    var today = new Date(); // Date object representing the current day

    // Information about the current day
    var cDayOfWeek = today.getDay();
    var cDay = today.getDate(); 
    var cMonth = today.getMonth(); 
    var cYear = today.getYear();
    
    var daysInPreviousMonth = 0;

    // Calculate information about previous month
    var pMonth = cMonth - 1;
    if(pMonth < 0) {
        pMonth = 12;
        daysInPreviousMonth = daysInMonth(pMonth, cYear - 1);
    } else {
        daysInPreviousMonth = daysInMonth(pMonth, cYear);
    }

    // Find the day of the month of the first day (Sunday) of the current week
    var weekStartDay = cDay - cDayOfWeek;
    if(weekStartDay < 1) {
       weekStartDay = daysInPreviousMonth + weekStartDay;
       beginningOfWeek = beginningOfWeek + months[pMonth] + ' '; 
    } else {
       beginningOfWeek = months[cMonth] + ' ';
    }

    beginningOfWeek = beginningOfWeek + weekStartDay + correctNumericSuffix(weekStartDay);

    return beginningOfWeek;
}

function calculateEndOfWeek() {
    var endOfWeek = ''; // String we will return of format 'MONTH_NAME DAY_OF_MONTH'
    var today = new Date(); // Date object representing the current day

    // Information about the current day
    var cDayOfWeek = today.getDay();
    var cDay = today.getDate(); 
    var cMonth = today.getMonth(); 
    var cYear = today.getYear();

    var cDaysInMonth = daysInMonth(cMonth, cYear);

    // Calculate information about next month
    var nMonth = cMonth + 1;
    if(nMonth > 11) {
        cMonth = 1;
        daysInNextMonth = daysInMonth(nMonth, cYear + 1);
    } else {
        daysInNextMonth = daysInMonth(nMonth, cYear);
    }
 
    // Find the day of the month of the first day (Sunday) of the current week
    var weekEndDay = cDay + (6 - cDayOfWeek);
    if(weekEndDay > cDaysInMonth) {
       weekEndDay = weekEndDay - cDaysInMonth;
       endOfWeek = endOfWeek + months[nMonth] + ' '; 
    } else {
       endOfWeek = months[cMonth] + ' ';
    }

    endOfWeek = endOfWeek + weekEndDay + correctNumericSuffix(weekEndDay);

    return endOfWeek;
   
}


//style for Week table 
const weektablestyles = StyleSheet.create({
    container: { flex: 1, padding: 0, paddingTop: 0, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }
  });
