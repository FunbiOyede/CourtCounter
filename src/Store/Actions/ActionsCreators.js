import * as ActionTypes from "./ActionType";
import Axios from "../../axios.config";

export const getFirstTeamName = value => {
  return {
    type: ActionTypes.GET_FIRST_TEAM_NAME,
    teamName: value
  };
};

export const getSecondTeamName = value => {
  return {
    type: ActionTypes.GET_SECOND_TEAM_NAME,
    teamName: value
  };
};

export const success = response => {
  return {
    type: ActionTypes.SUCCESS,
    value: response
  };
};

export const failed = () => {
  return {
    type: ActionTypes.FAILURE
  };
};

/**
 *
 * @param {string} fname  first team name
 * @param {string} sname second team name
 */
export const saveTeamName = (fname, sname) => {
  return dispatch => {
    Axios.post("/teams.json", {
      firstTeamName: fname,
      secondTeamName: sname
    })
      .then(response => {
        dispatch(success(response));
      })
      .catch(error => {
        dispatch(failed());
      });
  };
};

export const fetchSuccess = value => {
  let TeamValues = value.data;
  let teamValues = Object.values(TeamValues);
  const team = teamValues[0];
  return {
    type: ActionTypes.FETCH_SUCCESS,
    val: team
  };
};

export const fetchFailure = () => {
  return {
    type: ActionTypes.FETCH_FAILURE
  };
};

/**
 * fetchTeams responsible for fetching team names
 */

export const fetchTeams = () => {
  return dispatch => {
    Axios.get("/teams.json")
      .then(response => {
        dispatch(fetchSuccess(response));
      })
      .catch(err => {
        dispatch(fetchFailure());
      });
  };
};
