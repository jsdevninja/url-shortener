import {
  CREATE_URL_REQUEST,
  CREATE_URL_SUCCESS,
  CREATE_URL_FAIL,
  GET_URL_REQUEST,
  GET_URL_SUCCESS,
  GET_URL_FAIL,
} from "./types";

export const createUrlRequest = (payload) => ({
  type: CREATE_URL_REQUEST,
  payload,
});

export const createUrlSuccess = (payload) => ({
  type: CREATE_URL_SUCCESS,
  payload,
});

export const createUrlFail = (payload) => ({
  type: CREATE_URL_FAIL,
  payload,
});

export const getUrlRequest = (payload) => ({
  type: GET_URL_REQUEST,
  payload,
});

export const getUrlSuccess = (payload) => ({
  type: GET_URL_SUCCESS,
  payload,
});

export const getUrlFail = (payload) => ({
  type: GET_URL_FAIL,
  payload,
});
