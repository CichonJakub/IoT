import { createStackNavigator } from 'react-navigation-stack';
import Statistics from '../screens/statistics';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Statistics: {
    screen: Statistics,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Statystyki' />,
      }
    }
  },
}

const StatisticsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#78d6f9', height: 70}
  }
});

export default StatisticsStack;
