import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';

// interface SpaceT {
//   height: number
// }

const Space = ({ height = 'auto', width = 'auto', backgroundColor = 'transparent' }) => (
  <View style={{ width, height, backgroundColor }} />
);
const Flex = ({ flex = 0 }) => <View style={{ flex }} />;

export { Space, Flex };
