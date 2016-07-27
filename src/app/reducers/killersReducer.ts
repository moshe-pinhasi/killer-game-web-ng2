
export const INITIAL_KILLER = 'ADD_KILLER';
export const ADD_KILLER = 'ADD_KILLER';
export const REMOVE_KILLER = 'REMOVE_KILLER';
export const SET_KILLERS = 'SET_KILLERS';
export const RESTORE_KILLERS = 'RESTORE_KILLERS';
export const REMOVE_ALL_KILLERS = 'REMOVE_ALL_KILLERS';

const initialState = { killers: [], action: INITIAL_KILLER };

export const killersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_KILLER:
      return {
        killers: state.killers.concat(action.killer),
        action: ADD_KILLER
      };
    case REMOVE_KILLER:
      return {
        killers: state.killers.filter(killer => killer.uuid !== action.uuid),
        action: REMOVE_KILLER
      };
    case SET_KILLERS:
    case RESTORE_KILLERS:
      return {
        killers: action.killers,
        action: action.type
      };
    case REMOVE_ALL_KILLERS:
      return { killers: [], action: INITIAL_KILLER }

    default:
      return state;
  };
};


