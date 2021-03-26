import { planetsActions } from '../actions/planetsActions';
import { Planet } from '~/constants/interfaces';

type PlanetsState = {
  planets: Planet[];
};

const initialState: PlanetsState = {
  planets: []
};

const charactersReducer = (state: PlanetsState = initialState, action: planetsActions) => {
  switch (action.type) {
    case 'FETCH_PLANETS':
      return {
        ...state,
        characters: action.payload
      };
    default:
      return state;
  }
};

export default charactersReducer;
