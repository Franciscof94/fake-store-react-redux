import { CHANGE_VIEW, SIDEBAR } from "../actions/Types";

const initialState = {
  view: true,
  sidebar: false,
};

export default function viewReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VIEW:
      return {
        ...state,
        view: action.payload,
      };
    case SIDEBAR:
      return {
        ...state,
        sidebar: action.payload,
      };
    default:
      return state;
  }
}
