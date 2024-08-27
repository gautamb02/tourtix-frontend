
export interface Hours {
  open: boolean;
  hours?: {
    start_time: string;
    end_time: string;
  };
}
export interface FormData {
  businessName: string;
  category: string;
  address: string;
  city: string;
  pincode: string;
  state: string;
  country: string;
  geolocation : Record<string, number>;
  phone: string;
  email: string;
  website: string;
  hours: Record<string, Hours>;
  description: string;
  photos: string[];
}

export const categories = [
  "Art Museums",
  "History Museums",
  "Natural History Museums",
  "Science and Technology Museums",
  "Children’s Museums",
  "Ethnographic and Anthropological Museums",
  "Military and War Museums",
  "Maritime Museums",
  "Archaeology Museums",
  "Living History Museums",
  "Specialized Museums",
  "Cultural Museums",
  "Biographical Museums",
  "Historic House Museums",
  "Virtual Museums",
  "National Parks",
  "Historical Sites and Monuments",
  "Zoos and Aquariums",
  "Theme Parks and Amusement Parks",
  "Cultural Centers and Community Halls",
  "Concert Halls and Theaters",
  "Sports Arenas and Stadiums",
  "Festivals and Fairs",
  "Exhibition Centers and Convention Halls",
  "Botanical Gardens and Conservatories",
  "Planetariums and Science Centers",
  "Film Festivals and Cinemas",
  "Workshops and Classes",
  "Religious Sites and Pilgrimage Tours",
  "Cruise and Ferry Services",
];
