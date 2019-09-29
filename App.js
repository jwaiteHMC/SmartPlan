import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';



/*export default function App() {
  return (
  )
}*/

class DayView extends React.Component{
  render(){
    return(
    <View style={styles.container}>
      <Text>Hi</Text>
      <Button
          title="Press for help"
          onPress={() => Alert.alert('Sorry this feature is not available')}
        /> 
        <Button
          title="Go to Week"
          onPress={() => this.props.navigation.navigate('Week')}
        />
    </View>

    )}
}
class WeekView extends React.Component{
  render(){
    return(
    <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text> Week!</Text>
    </View>
    )}
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red'
  },
  scene: {
    flex: 1
  }
});


const AppNavigator = createBottomTabNavigator({
  Day: {screen: DayView},
  Week: {screen: WeekView},
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}