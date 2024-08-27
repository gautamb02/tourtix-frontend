
export interface FormData {
  businessName: string;
  category: string;
  address: string;
  phone: string;
  website: string;
  hours: Record<string, string>;
  description: string;
  photos: File[];
}
