import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import EventView from './Tabs/Event/EventView'
import MonthView from './Tabs/Month/MonthView'
import WeekView from './Tabs/Week/WeekView'
import DayView from './Tabs/Day/DayView'

const AppNavigator = createBottomTabNavigator({
    Day: {screen: DayView},
    Week: {screen: WeekView},
    Month: {screen:MonthView},
    Events: {screen:EventView}, 
  });
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
