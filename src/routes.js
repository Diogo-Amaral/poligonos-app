import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Rectangle from './pages/Rectangle';
import Triangle from './pages/Triangle';
import SumAreas from './pages/SumAreas';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Rectangle,
      Triangle,
      SumAreas,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        title: 'Polígonos',
        headerStyle: {
          backgroundColor: '#E85C00',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
