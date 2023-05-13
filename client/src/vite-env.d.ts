/// <reference types="vite/client" />

type DataType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  image: string;
  description: string;
  is_verified?: boolean;
};

type Profile = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  is_verified: boolean;
  image_url: string;
  description: string;
};
