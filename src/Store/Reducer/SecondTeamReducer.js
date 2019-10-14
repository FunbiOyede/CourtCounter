import * as Actions from "../Action/Actions";

const intialState = {
  secondTeamScore: 0
};

const SecondTeamReducer = (state = intialState, action) => {
  if (action.type === Actions.THREE_POINTS) {
    return {
      ...state,
      secondTeamScore: state.secondTeamScore + 3
    };
  }

  if (action.type === Actions.TWO_POINTS) {
    return {
      ...state,
      secondTeamScore: state.secondTeamScore + 2
    };
  }
  if (action.type === Actions.FREE_THROW) {
    return {
      ...state,
      secondTeamScore: state.secondTeamScore + 1
    };
  }
  return state;
};

export default SecondTeamReducer;
