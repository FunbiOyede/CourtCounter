/**
 *
 * @param {object} state - oldstate
 * @param {object} UpdatedValues - values updated after combining old state and actions
 */
export const updateObjects = (state, UpdatedValues) => {
  return {
    ...state,
    ...UpdatedValues
  };
};
