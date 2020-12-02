import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial181088Navigator from '../features/Tutorial181088/navigator';
import NotificationList181060Navigator from '../features/NotificationList181060/navigator';
import Settings181059Navigator from '../features/Settings181059/navigator';
import Settings181051Navigator from '../features/Settings181051/navigator';
import UserProfile181049Navigator from '../features/UserProfile181049/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial181088: { screen: Tutorial181088Navigator },
NotificationList181060: { screen: NotificationList181060Navigator },
Settings181059: { screen: Settings181059Navigator },
Settings181051: { screen: Settings181051Navigator },
UserProfile181049: { screen: UserProfile181049Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
