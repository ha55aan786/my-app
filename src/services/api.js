import axios from "axios";

const API_BASE = "http://localhost:8080";

export const generateShortUrl = async (longUrl) => {
  return axios.get(`${API_BASE}/generate?url=${encodeURIComponent(longUrl)}`);
};


export const getAnalytics = async (uuid) => {
  return axios.get(`${API_BASE}/hit/${uuid}`);
};
