import * as ActionTypes from "./ActionType";
import Axios from "../../axios.config";

/**
 *
 * @param {string} value
 * @function getting home teams name
 */
export const getFirstTeamName = value => {
  return {
    type: ActionTypes.GET_FIRST_TEAM_NAME,
    teamName: value
  };
};
/**
 *
 * @param {string} value
 * @function getting away teams name
 */

export const getSecondTeamName = value => {
  return {
    type: ActionTypes.GET_SECOND_TEAM_NAME,
    teamName: value
  };
};

export const send_teams = () => {
  return {
    type: ActionTypes.POST_DATA
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
 * @function saves teams names to firebase
 */
export const saveTeamName = (fname, sname) => {
  return dispatch => {
    Axios.post("/teams.json", {
      firstTeamName: fname,
      secondTeamName: sname
    })
      .then(response => {
        dispatch(send_teams());
      })
      .catch(error => {
        dispatch(failed());
      });
  };
};

/**
 *
 * @param {object} value
 */
export const fetchSuccess = value => {
  let TeamValues = value.data;
  let teamValues = Object.values(TeamValues);
  let [team] = teamValues;
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
 * @function fetchTeams fetches team names from a remote database
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
