import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Camera} from 'react-native-vision-camera';
import {ClassComponentProps, Router} from '../config/const';

export class HomeScreen extends Component<ClassComponentProps> {
  onOpenCamera = async () => {
    const cameraPermission = await Camera.requestCameraPermission();
    if (cameraPermission == 'authorized') {
      this.props.navigation.navigate(Router.CAMERA);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Open camera" onPress={this.onOpenCamera} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
