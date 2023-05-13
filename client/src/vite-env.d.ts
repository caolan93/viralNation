/// <reference types="vite/client" />

type Profile = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  is_verified: boolean;
  image: string;
  description: string;
};

type FormValues = {
  id?: string;
  image: string;
  first_name: string;
  last_name: string;
  email: string;
  description: string;
  is_verified: boolean;
};
