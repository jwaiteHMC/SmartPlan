import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import EventView from './Tabs/Event/EventView'
import MonthView from './Tabs/Month/MonthView'
import WeekView from './Tabs/Week/WeekView'
import DayView from './Tabs/Day/DayView'

export default class AppContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      tableData: []
    }
    }
    render(){
      const AppNavigator = createBottomTabNavigator({
        Day: {screen: DayView},
        Week: {screen: WeekView},
        Month: {screen:MonthView},
        Events: {screen:EventView}, 
      }); 
      const AppContainer = createAppContainer(AppNavigator);
      return(
        <AppContainer/>
      )
    }
  } 