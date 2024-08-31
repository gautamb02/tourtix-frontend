import { getLocalBusinessId } from "../../utils/localStorage";

export interface TimeSlot {
  startTime: string;
  endTime: string;
  hasSeatLimit: boolean;
  availableSeats?: number;
}

export interface ActivityFormState {
  businessId: string | null;
  name: string;
  hasTimeSlots: boolean;
  description?: string;
  availableTimeSlots: TimeSlot[];
}

export const initialTimeSlot: TimeSlot = {
  startTime: "",
  endTime: "",
  hasSeatLimit: false,
  availableSeats: undefined,
};

export const initialState: ActivityFormState = {
  businessId: getLocalBusinessId(),
  name: "",
  hasTimeSlots: false,
  description: "",
  availableTimeSlots: [],
};
