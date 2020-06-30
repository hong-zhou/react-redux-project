export const CREATE_COURSE = "CREATE_COURSE";
export const LOAD_COURSE_SUCCESS = "LOAD_COURSE_SUCCESS";
export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHOR_SUCCESS";
export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";
// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed API call.
// apiCallStatus reducer looks for action types that end in "_SUCCESS"
export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";
