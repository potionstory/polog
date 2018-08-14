import { createAction, handleActions } from "redux-actions";
import { Pender } from "redux-pender";
import update from "react-addons-update";

const GNB_CHANGE = "auth/GNB_CHANGE";

export const gnbChange = createAction(GNB_CHANGE);

const init = {
  gnbIndex: 0
};

export default handleActions(
  {
    [GNB_CHANGE]: (state, action) => {
      return update(state, {
        gnbIndex: { $set: action.payload }
      });
    }
  },
  init
);
