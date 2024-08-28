const { VITE_API_URL } = import.meta.env;

export const API_BASE_URL = VITE_API_URL as string;

// API Routes
export const SIGNUP_API = `${API_BASE_URL}/api/auth/signup`;
export const LOGIN_API = `${API_BASE_URL}/api/auth/login`;
export const ONBOARD_API = `${API_BASE_URL}/api/business/onboard`;

export const LOCAL_ONBOARD = "onboard"
export const LOCAL_LOGGED = "logged"
export const LOCAL_TOKEN = "token"