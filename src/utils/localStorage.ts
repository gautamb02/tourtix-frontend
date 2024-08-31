import { LOCAL_BUSINESS_DATA, LOCAL_BUSINESS_ID, LOCAL_LOGGED, LOCAL_ONBOARD, LOCAL_TOKEN } from "../../constants";

// Helper function to convert a boolean to a string
function booleanToString(value: boolean): string {
    return value ? "true" : "false";
}

// Helper function to convert a string to a boolean
function stringToBoolean(value: string | null): boolean {
    return value === "true";
}

// Getter functions
export function getOnboard(): boolean | null {
    const value = localStorage.getItem(LOCAL_ONBOARD);
    return stringToBoolean(value);
}

export function getLogged(): boolean {
    const value = localStorage.getItem(LOCAL_LOGGED);
    return stringToBoolean(value);
}

export function getToken(): string | null {
    return localStorage.getItem(LOCAL_TOKEN);
}

export function getLocalBusinessData(): string | null {
    return localStorage.getItem(LOCAL_BUSINESS_DATA);
}

export function getLocalBusinessId(): string | null {
    return localStorage.getItem(LOCAL_BUSINESS_ID);
}

// Setter functions
export function setOnboard(value: boolean): void {
    localStorage.setItem(LOCAL_ONBOARD, booleanToString(value));
}

export function setLogged(value: boolean): void {
    localStorage.setItem(LOCAL_LOGGED, booleanToString(value));
}

export function setToken(value: string): void {
    localStorage.setItem(LOCAL_TOKEN, value);
}

export function setLocalBusinessData(value: string): void {
    localStorage.setItem(LOCAL_BUSINESS_DATA, value);
}

export function setLocalBusinessId(value: string): void {
    localStorage.setItem(LOCAL_BUSINESS_ID, value);
}

// Optional: remove functions if you need to clear these items from localStorage
export function removeOnboard(): void {
    localStorage.removeItem(LOCAL_ONBOARD);
}

export function removeLogged(): void {
    localStorage.removeItem(LOCAL_LOGGED);
}

export function removeToken(): void {
    localStorage.removeItem(LOCAL_TOKEN);
}

export function removeBusinessData(): void {
    localStorage.removeItem(LOCAL_BUSINESS_DATA);
}
export function removeBusinessId(): void {
    localStorage.removeItem(LOCAL_BUSINESS_ID);
}


export function clearUserData():void{
    removeLogged()
    removeOnboard()
    removeToken()
    removeBusinessData()
    removeBusinessId()
}