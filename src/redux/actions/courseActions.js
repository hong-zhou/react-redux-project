import * as types from "./actionTypes";
import * as couseApi from "../../api/courseApi";

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSE_SUCCESS, courses };
}

export function createCCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
  return function(dispatch) {
    return couseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    return couseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCCourseSuccess(savedCourse));
      })
      .catch(error => {
        throw error;
      });
  };
}
