import TeamNames from "./index";

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(TeamNames(undefined, {})).toEqual({
      firstTeamName: "",
      secondTeamName: "",
      isPosted: false,
      isError: false,
      minutes: 30,
      seconds: 0,
      teams: {},
      isFetch: false
    });
  });
});
