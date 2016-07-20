
export const ADD_KILLER = 'ADD_KILLER';
export const REMOVE_KILLER = 'REMOVE_KILLER';

const initialState = { killers: [] };

export const killersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_KILLER:
      return {
        killers: state.killers.concat(action.killer)
      };
    case REMOVE_KILLER:
      return {
        killers: state.killers.filter(killer => killer.id != action.id)
      };

    default:
      return state;
  };
};


