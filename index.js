/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Login from './src/components/views/Login';
import Register from './src/components/views/Register';

AppRegistry.registerComponent(appName, () => App);
