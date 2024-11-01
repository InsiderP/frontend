"use client";
import axios from "axios";
export const baseURL = "http://localhost:8000/";
import { getCookie } from "cookies-next";

let token;
export const Imageapi = axios.create({
  withCredentials: true,
  baseURL,
  headers: {
    token: token ? token : getCookie("authToken"),
    "Content-Type": "multipart/formdata",
  },
});
const api = axios.create({
  withCredentials: true,
  baseURL,
  
});



export default api;
