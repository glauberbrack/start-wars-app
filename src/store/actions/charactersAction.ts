import { Character } from '~/constants/interfaces';

export interface IFetchCharactersAction {
  readonly type: 'FETCH_CHARACTERS';
  payload: Array<Character>;
}

export type charactersAction = IFetchCharactersAction;
