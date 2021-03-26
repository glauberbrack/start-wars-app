import { combineReducers } from 'redux';

import charactersReducer from './charactersReducer';
import planetsReducer from './planetsReducer';

const rootReducer = combineReducers({
  characters: charactersReducer,
  planets: planetsReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
