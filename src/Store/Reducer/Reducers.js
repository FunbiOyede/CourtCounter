import * as Actions from "../Action/Actions";
// import { stat } from 'fs';
const intialState = {
  score: 0
};

const Reducer = (state = intialState, action) => {
  if (action.type === Actions.THREE_POINTS) {
    return {
      ...state,
      score: state.score + 3
    };
  }
  return state;
};

export default Reducer;
