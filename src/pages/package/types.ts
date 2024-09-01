import { getLocalBusinessId } from "../../utils/localStorage";

export interface PackageFormData {
  businessId: string | any;
  name: string;
  activities: string[];
  adultPrice: number;
  childPrice: number;
  description?: string;
  isActive: boolean;
}
export const initPackageFormData = {
  businessId: "",
  name: "",
  activities: [],
  adultPrice: 0,
  childPrice: 0,
  description: "",
  isActive: true,
};

export interface TimeSlot {
  _id : string | null;
  startTime: string;
  endTime: string;
  hasSeatLimit: boolean;
  availableSeats?: number;
}

export interface ActivityState {
  _id: string;
  businessId: string | null;
  name: string;
  hasTimeSlots: boolean;
  description?: string;
  availableTimeSlots: TimeSlot[];
}


export interface Package {
  _id : string;
  businessId: string | any;
  name: string;
  activities: ActivityState[];
  adultPrice: number;
  childPrice: number;
  description?: string;
  isActive: boolean;
}


export const initialState: ActivityState = {
  _id: "",
  businessId: getLocalBusinessId(),
  name: "",
  hasTimeSlots: false,
  description: "",
  availableTimeSlots: [],
};

