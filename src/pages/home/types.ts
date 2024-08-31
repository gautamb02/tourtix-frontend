export interface BusinessData {
  _id: string;
  geolocation: {
    lat: number;
    lng: number;
  };
  businessName: string;
  category: string;
  address: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  website: string;
  description: string;
  hours: {
    [key: string]: {
      open: boolean;
      hours?: {
        start_time: string;
        end_time: string;
      };
    };
  };
  photos: string[];
}
