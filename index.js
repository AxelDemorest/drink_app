/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Login from './src/views/Login';
import Register from './src/views/Register';
import Recipe from './src/views/Recipe';
import ProfilPage from './src/views/ProfilPage';

AppRegistry.registerComponent(appName, () => ProfilPage);

