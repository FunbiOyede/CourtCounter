import * as Actions from "../Action/Actions";

const intialState = {
  firstTeamScore: 0
};

const FirstTeamReducer = (state = intialState, action) => {
  if (action.type === Actions.THREE_POINTS) {
    return {
      ...state,
      firstTeamScore: state.firstTeamScore + 3
    };
  }

  if (action.type === Actions.TWO_POINTS) {
    return {
      ...state,
      firstTeamScore: state.firstTeamScore + 2
    };
  }
  if (action.type === Actions.FREE_THROW) {
    return {
      ...state,
      firstTeamScore: state.firstTeamScore + 1
    };
  }
  return state;
};

export default FirstTeamReducer;
