import axios from "axios";
const API = axios.create({ baseURL: "https://memories-2021-2.herokuapp.com" });
// const url = "https://memories-2021-2.herokuapp.com/posts";

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
const postUrl = "/posts";
const userUrl = "/users";

export const fetchPosts = () => API.get(postUrl);
export const createPost = (newPost) => API.post(postUrl, newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`${postUrl}/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`${postUrl}/${id}`);
export const likePost = (id) => API.patch(`${postUrl}/${id}/likePost`);

export const signIn = (formData) => API.post(`${userUrl}/signin`, formData);
export const signUp = (formData) => API.post(`${userUrl}/signup`, formData);
