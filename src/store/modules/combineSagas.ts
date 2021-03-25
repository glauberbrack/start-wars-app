import { fork } from 'redux-saga/effects';

import characters from './characters/sagas';

export default function* root() {
  yield fork(characters);
}
