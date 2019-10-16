import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import EventView from './Event/EventView'
import MonthView from './Month/MonthView'
import WeekView from './Week/WeekView'
import DayView from './Day/DayView'

const AppNavigator = createBottomTabNavigator({
    Day: {screen: DayView},
    Week: {screen: WeekView},
    Month: {screen:MonthView},
    Events: {screen:EventView}, 
  });
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;