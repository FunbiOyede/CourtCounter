import * as ActionTypes from "../Actions/ActionType";

const Names = {
  firstTeamName: "",
  secondTeamName: "",
  isPosted: false,
  isError: false,
  minutes: 30,
  seconds: 0,
  teams: {},
  isFetch: false
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
  if (action.type === ActionTypes.FETCH_SUCCESS) {
    return {
      ...state,
      teams: { ...action.val }
    };
  }

  if (action.type === ActionTypes.FETCH_FAILURE) {
    return {
      ...state,
      isFetch: true
    };
  }
  return state;
};
