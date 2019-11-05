import * as ActionTypes from "../Actions/ActionType";

const Names = {
  firstTeamName: "",
  secondTeamName: "",
  isPosted: false,
  isError: false
};

export const TeamNames = (state = Names, action) => {
  if (action.type === ActionTypes.GET_FIRST_TEAM_NAME) {
    return {
      ...state,
      firstTeamName: action.teamName
    };
  }
  if (action.type === ActionTypes.GET_SECOND_TEAM_NAME) {
    return {
      ...state,
      secondTeamName: action.teamName
    };
  }

  if (action.type === ActionTypes.SUCCESS) {
    console.log(action.value);
    return {
      ...state,
      isPosted: true
    };
  }

  if (action.type === ActionTypes.FAILURE) {
    return {
      ...state,
      isError: true
    };
  }
  return state;
};
