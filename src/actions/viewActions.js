import { CHANGE_VIEW, SIDEBAR } from "./Types";

export const changeView = (value) => ({
  type: CHANGE_VIEW,
  payload: value,
});

export const showSidebar = (value) => ({
  type: SIDEBAR,
  payload: value,
});
