import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';

const rootReducer = combineReducers({
  characters: charactersReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
