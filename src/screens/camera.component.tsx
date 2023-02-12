import React from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

export function CameraScreen() {
  const devices = useCameraDevices('wide-angle-camera');
  const isFocused = useIsFocused();

  const device = devices.back;

  if (!device) {
    return <ActivityIndicator style={styles.indicator} size="large" />;
  }
  return (
    <Camera
      device={device}
      isActive={isFocused}
      style={StyleSheet.absoluteFill}
    />
  );
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
  },
});
