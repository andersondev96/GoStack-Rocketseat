import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppointmentCreated from '../pages/AppointmentCreated';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import CreatedAppointment from '../pages/CreateAppointment';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="CreateAppointment" component={CreatedAppointment} />
    <App.Screen name="AppointmentCreated" component={AppointmentCreated} />

    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);

export default AppRoutes;
