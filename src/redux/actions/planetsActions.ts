import { Planet } from '~/constants/interfaces';

export interface IFetchPlanetsAction {
  readonly type: 'FETCH_PLANETS';
  payload: Array<Planet>;
}

export type planetsActions = IFetchPlanetsAction;
