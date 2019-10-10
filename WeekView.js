import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, TextInput} from 'react-native';
import DayTable from './DayTable'

//This class defines the Week Tab of the SmartPlan App and will show a week view
export default class WeekView extends React.Component{
  render(){
    return(
    <View style = {styles.container}>
    <DayTable/>
    </View>
    )}
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16,justifyContent: 'center', color: 'red', paddingTop: 60, backgroundColor: '#fff' },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' }
  });