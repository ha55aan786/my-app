import axios, { type AxiosResponse } from "axios";

const API_BASE = "http://localhost:8080";

// Since backend returns just a string, no need for ShortUrlResponse
export const generateShortUrl = async (
  longUrl: string
): Promise<AxiosResponse<string>> => {
  return axios.get<string>(
    `${API_BASE}/generate?url=${encodeURIComponent(longUrl)}`
  );
};

export interface AnalyticsResponse {
  hits: number;
  url: string;
}

export const getAnalytics = async (
  uuid: string
): Promise<AxiosResponse<AnalyticsResponse>> => {
  return axios.get<AnalyticsResponse>(`${API_BASE}/hit/${uuid}`);
};
