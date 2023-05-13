/// <reference types="vite/client" />

type DataType = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  image: string;
  description: string;
  is_verified?: boolean;
};

type Profile = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  is_verified: boolean;
  image: string;
  description: string;
};
