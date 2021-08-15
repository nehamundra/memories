import * as api from "../api";
import {
  FETCH_ALL,
  CREATE,
  DELETE,
  UPDATE,
  LIKE,
} from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);
    console.log(data.message);
    dispatch({ type: CREATE, payload: data.message });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (disptach) => {
  try {
    const { data } = await api.updatePost(id, post);
    disptach({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: { id } });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
