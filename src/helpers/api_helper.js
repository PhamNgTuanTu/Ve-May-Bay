import axios from "axios"
import queryString from "query-string";
axios.defaults.adapter = require('axios/lib/adapters/xhr');

const  axiosApi = axios.create({
  baseURL: process.env.REACT_APP_CALL_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: function (status) {
    return status >= 200 && status <= 401; 
  },
})

axiosApi.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token");
    config.headers.Authorization = "Bearer " + token;
    //console.log(config);
    return config;
  }, function (error) {
  return Promise.reject(error);
});

axiosApi.interceptors.response.use(
  response => {
    if (response && response.data) {
      if (response.data.status === 400) {
        try {
          const refresh_token = sessionStorage.getItem("refresh_token");
          console.log(refresh_token)
          axios
            .post(process.env.REACT_APP_CALL_API_URL + "/quan-ly/lam-moi-token", {
              refresh_token,
            })
            .then(res => {
              if (res.data.status === 200) {
                sessionStorage.setItem("token", response.data.access_token);
                sessionStorage.setItem("refresh_token", response.data.refresh_token);
              }
            });
        } catch (error) {}
      }
      return response.data;
    }
    return response;
  },
  err => {
    Promise.reject(error)
  }
);

export async function getWithParams(url, data) {
  return await axiosApi.get(url, { ...data }).then(response => response)
}

export async function get(url) {
  return await axiosApi.get(url).then(response => response)
}

export async function post(url, data) {
  return axiosApi
    .post(url, { ...data })
    .then(response => response)
}

export async function put(url, data) {
  return axiosApi
    .put(url, { ...data })
    .then(response => response)
}

export async function del(url) {
  return await axiosApi
    .delete(url)
    .then(response => response)
}

export const getCookie = (cname) => {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};