/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

import "react-native-devsettings/withAsyncStorage";

AppRegistry.registerComponent(appName, () => App);
