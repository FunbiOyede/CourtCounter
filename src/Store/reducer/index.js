import * as ActionTypes from "../Actions/ActionType";
import { updateObjects } from "../../utils/index";

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
    return updateObjects(state, { firstTeamName: action.teamName });
  }
  if (action.type === ActionTypes.GET_SECOND_TEAM_NAME) {
    return updateObjects(state, { secondTeamName: action.teamName });
  }

  if (action.type === ActionTypes.POST_DATA) {
    return updateObjects(state, { isPosted: true });
  }

  if (action.type === ActionTypes.FAILURE) {
    return updateObjects(state, { isError: true });
  }
  if (action.type === ActionTypes.FETCH_SUCCESS) {
    const teams = { ...action.val };
    return updateObjects(state, { teams });
  }

  if (action.type === ActionTypes.FETCH_FAILURE) {
    return updateObjects(state, { isFetch: true });
  }

  return state;
};
