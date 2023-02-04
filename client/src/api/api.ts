import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:8000/',

  // withCredentials: true,
});

// types
// export type RegistrationType = {
//   name: string;
//   email: string;
//   password: string;
// };

// export type LoginType = {
//   email: string;
//   password: string;
// };

// export type ResponseType = {
//   message: string;
// };

// // registration api

// export const authAPI = {
//   registration(payload: RegistrationType) {
//     return instance.post<ResponseType>(`api/auth/register`, payload);
//   },
//   login(payload: LoginType) {
//     return instance.post<ResponseType>(`api/auth/login`, payload);
//   },
// };
