import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {Router} from './src/config/const';
import {CameraScreen} from './src/screens/camera.component';
import {HomeScreen} from './src/screens/home.component';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Router.HOME} component={HomeScreen} />
          <Stack.Screen name={Router.CAMERA} component={CameraScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
