/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Login from './src/views/Login';
import Register from './src/views/Register';

AppRegistry.registerComponent(appName, () => Register);
