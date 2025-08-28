import axios from "axios";
import type { AxiosResponse } from "axios";

const API_BASE = "http://localhost:8080";

// Response type for generateShortUrl
interface ShortUrlResponse {
  shortUrl: string;
}

// Response type for getAnalytics (you can extend as per backend response)
interface AnalyticsResponse {
  hits: number;
  url: string;
}

export const generateShortUrl = async (
  longUrl: string
): Promise<AxiosResponse<ShortUrlResponse>> => {
  return axios.get<ShortUrlResponse>(
    `${API_BASE}/generate?url=${encodeURIComponent(longUrl)}`
  );
};

export const getAnalytics = async (
  uuid: string
): Promise<AxiosResponse<AnalyticsResponse>> => {
  return axios.get<AnalyticsResponse>(`${API_BASE}/hit/${uuid}`);
};
