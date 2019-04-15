import { NavigationActions } from 'react-navigation';
import { AppNavigation } from '../../Navigation';

const secondAction = AppNavigation.router.getActionForPathAndParams('Login');
const INITIAL_STATE = AppNavigation.router.getStateForAction(secondAction);

export function reducer(state = INITIAL_STATE, action) {
  let nextState, to;
  switch (action.type) {
    case 'LOGOUT':
      to = 'Login';
      nextState = AppNavigation.router.getStateForAction(
        NavigationActions.navigate({ key: to, routeName: to })
      );
      break;
    case 'AUTO_LOGIN':
      to = 'Home';
      nextState = AppNavigation.router.getStateForAction(
        NavigationActions.navigate({ key: to, routeName: to }),
      );
      break;
    default:
      nextState = AppNavigation.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}
