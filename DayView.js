import React from 'react';
import { StyleSheet, Text, View, Button, Alert,} from 'react-native';
import DayTable from './DayTable'

 //In this class definition, the Day Tab of the SmartPlan App is defined.
export default class DayView extends React.Component{
    render(){
      return(
      <View style={styles.container}>
        <Text>Hi</Text> 
        {/* Add Buttons to the Day Tab */}
        {/* This will show a pop-up with the text below */}
        <Button 
            title="Press for help"
            onPress={() => Alert.alert('Sorry this feature is not available')}
          /> 
          {/*This will create a butotn that goes to the week tab on click */}
          <Button
            title="Go to Week" 
            onPress={() => this.props.navigation.navigate('Week')}
          />
          <DayTable/>
          </View>
      )}
  }

  const styles = StyleSheet.create({
    container: { flex: 1, alignContent: 'center', paddingTop: 50, backgroundColor: '#fff' },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' }
  });
  