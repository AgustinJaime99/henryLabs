import { combineReducers } from 'redux';
import cohortReducer from './cohortReducer/cohortReducer';
import groupReducer from './groupReducer/groupReducer'
import userReducer from './userReducer/userReducer'
import loginReducer from "./loginReducer/loginReducer";
import darkModeReducer from "./darkModeReducer/reducerDarkMode";
import inviteReducer from "./inviteReducer/reducerInvite";
import feedbackReducer from './feedbackReducer/feedbackReducer';
import lectureReducer from './lectureReducer/lectureReducer';
import jobReducer from './jobsReducer/reducerJobs'
import studentLecturesReducer from './studentLecturesReducer/studentLecturesReducer'

const rootReducer = combineReducers({
  feedbackReducer,
  lectureReducer,
  cohortReducer,
  groupReducer,
  userReducer,
  userLoggedIn: loginReducer,
  darkModeReducer,
  inviteReducer,
  jobReducer,
  studentLecturesReducer
});

export default rootReducer;
