import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

// स्क्रीन्स
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import StockInScreen from './src/screens/StockInScreen';
import StockOutScreen from './src/screens/StockOutScreen';
import WarehouseScreen from './src/screens/WarehouseScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="SignUp" 
            component={SignUpScreen}
            options={{ title: 'साइन अप' }}
          />
          <Stack.Screen 
            name="Dashboard" 
            component={DashboardScreen}
            options={{ headerLeft: null }}
          />
          <Stack.Screen name="StockIn" component={StockInScreen} />
          <Stack.Screen name="StockOut" component={StockOutScreen} />
          <Stack.Screen name="Warehouse" component={WarehouseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App; 