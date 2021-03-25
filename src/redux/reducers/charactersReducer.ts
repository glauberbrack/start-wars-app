import { charactersActions } from '../actions/charactersActions';
import { Character } from '~/constants/interfaces';

type CharactersState = {
  characters: Character[];
};

const initialState: CharactersState = {
  characters: []
};

const charactersReducer = (state: CharactersState = initialState, action: charactersActions) => {
  switch (action.type) {
    case 'FETCH_CHARACTERS':
      return {
        ...state,
        characters: action.payload
      };
    default:
      return state;
  }
};

export default charactersReducer;
