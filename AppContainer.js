import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import EventView from './EventView'
import MonthView from './MonthView'
import WeekView from './WeekView'
import DayView from './DayView'

const AppNavigator = createBottomTabNavigator({
    Day: {screen: DayView},
    Week: {screen: WeekView},
    Month: {screen:MonthView},
    Events: {screen:EventView},
  });
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;