const { VITE_API_URL } = import.meta.env;

export const API_BASE_URL = VITE_API_URL as string;

// API Routes
export const SIGNUP_API = `${API_BASE_URL}/api/auth/signup`;
export const LOGIN_API = `${API_BASE_URL}/api/auth/login`;
export const ONBOARD_API = `${API_BASE_URL}/api/business/onboard`;
export const GET_BUSINESS_API = `${API_BASE_URL}/api/business/getbusiness`;
export const ADD_ACTIVITY_API = `${API_BASE_URL}/api/ticketing/activity`;
export const GET_ACTIVITIES_API = `${API_BASE_URL}/api/ticketing/activities`;
export const ADD_PKG_API = `${API_BASE_URL}/api/ticketing/package`;
export const GET_PKGS_API = `${API_BASE_URL}/api/ticketing/packages`;

export const LOCAL_ONBOARD = "onboard"
export const LOCAL_LOGGED = "logged"
export const LOCAL_TOKEN = "token"
export const LOCAL_BUSINESS_DATA = 'businessProfileData';
export const LOCAL_BUSINESS_ID = 'businessId';
