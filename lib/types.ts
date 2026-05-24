export type ClinicData = {
  name: string;
  tagline: string;
  description: string;
  address: string;
  metro: string;
  phone1: string;
  phone2: string;
  whatsapp: string;
  vk: string;
  hours: string;
  rating: number;
  yearsOfWork: number;
};

export type StatItem = {
  value: string;
  label: string;
};

export type ServiceItem = {
  title: string;
  icon: string;
  description: string;
  color: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};

export type DoctorItem = {
  name: string;
  role: string;
  experience: string;
  photo: string;
};

export type PriceItem = {
  service: string;
  price: string;
};

export type PriceCategory = {
  id: string;
  title: string;
  items: PriceItem[];
};

export type ReviewItem = {
  quote: string;
  author: string;
  details: string;
  rating: number;
};
