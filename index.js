import './App/Config/ReactotronConfig';
import { AppRegistry } from 'react-native';
import App from './App/Screens';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
