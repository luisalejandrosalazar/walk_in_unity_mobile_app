import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./src/screens/HomePage";
import CartPage from './src/screens/CartPage';
import UserPage from './src/screens/UserPage';
import LoginPage from './src/screens/LoginPage';
import SignUpPage from './src/screens/SignUpPage';
import { CartProvider } from './cartContext';
import { UserProvider } from './userContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginPage"
        screenOptions={{ headerShown: false }}
      >
      <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          //initialParams={{ userEmail, setUserEmail }}
      />
      <Stack.Screen
          name="HomePage"
          component={HomePage}
          //initialParams={{ userEmail, setUserEmail }}
      />
      <Stack.Screen
          name="CartPage"
          component={CartPage}
          //initialParams={{}}
        />
        <Stack.Screen
          name="UserPage"
          component={UserPage}
          initialParams={{}}
        />
        <Stack.Screen
          name="SignUpPage"
          component={SignUpPage}
          initialParams={{}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
