import {Platform} from 'react-native';
import LinearGradientWeb from './LinearGradientWeb'

export const LinearGradientCross = (Platform.OS === 'web') ? LinearGradientWeb : require('react-native-linear-gradient');

/*
 * Remove Platform specific exports :/
 * */
