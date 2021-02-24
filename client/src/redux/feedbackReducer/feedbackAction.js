import axios from 'axios';
import { consoleLog } from '../../services/consoleLog';

export const LIST_ALL_FEEDBACKS_FROM_LECTURE = 'LIST_ALL_FEEDBACKS_FROM_LECTURE';
export const LIST_ALL_FEEDBACKS_FROM_USER = 'LIST_ALL_FEEDBACKS_FROM_USER';
export const GET_FEEDBACK = 'GET_FEEDBACK';
export const GET_AVERAGE_FEEDBACKS_FROM_USER = 'GET_AVERAGE_FEEDBACKS_FROM_USER';
export const GET_AVERAGE_FEEDBACKS_FROM_LECTURE = 'GET_AVERAGE_FEEDBACKS_FROM_LECTURE';
export const POST_FEEDBACK = 'POST_FEEDBACK';
export const CHANGE_FEEDBACK = 'CHANGE_FEEDBACK';
export const DELETE_FEEDBACK = 'DELETE_FEEDBACK';

export const getAllFeedbacksFromLecture = lectureId => dispatch => {
    return axios.get(`/feedbacks/listAll/${lectureId}`)
    .then(res => dispatch({ type: LIST_ALL_FEEDBACKS_FROM_LECTURE, payload: res.data }))
    .catch(err => consoleLog(err));
};

export const getAllFeedbacksFromUser = userId => dispatch => {
    return axios.get(`feedbacks/list/user/${userId}`)
    .then(res => dispatch({ type: LIST_ALL_FEEDBACKS_FROM_USER, payload: res.data }))
    .catch(err => consoleLog(err));
};

export const getFeedback = feedbackId => dispatch => {
    return axios.get(`feedbacks/feedback/${feedbackId}`)
    .then(res => dispatch({ type: GET_FEEDBACK, payload: res.data }))
    .catch(err => consoleLog(err));
};

export const getAverageFeedbacksFromUser = userId => dispatch => {
    return axios.get(`feedbacks/average/user/${userId}`)
    .then(res => dispatch({ type: GET_AVERAGE_FEEDBACKS_FROM_USER, payload: res.data }))
    .catch(err => consoleLog(err));
};

export const getAverageFeedbacksFromLecture = lectureId => dispatch => {
    return axios.get(`feedbacks/average/lecture/${lectureId}`)
    .then(res => dispatch({ type: GET_AVERAGE_FEEDBACKS_FROM_LECTURE, payload: res.data}))
    .catch(err => consoleLog(err));
};

export const postFeedback = (userId, rating, comment, lectureId) => dispatch => {
    return axios.post('feedbacks/feedback', { userId, rating, comment, lectureId })
    .then(res => dispatch({ type: POST_FEEDBACK, payload: res.data }))
    .catch(err => consoleLog(err));
};

export const changeFeedback = (userId, feedbackId, rating, comment) => dispatch => {
    return axios.put(`feedbacks/feedback/${feedbackId}`, {userId, rating, comment})
    .then(res => dispatch({ type: CHANGE_FEEDBACK, payload: res.data }))
    .catch(err => consoleLog(err));
};

export const deleteFeedback = feedbackId => dispatch => {
    return axios.delete(`/feedbacks/feedback/${feedbackId}`)
    .then(res => dispatch({ type: DELETE_FEEDBACK, payload: true }))
    .catch(err => consoleLog(err));
};