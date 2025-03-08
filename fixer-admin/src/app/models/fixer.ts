import { Payment } from "./payment";

export interface Fixer {
  fixer_id: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  dob: string;
  city: string;
  gender: string;
  created_at: string;
  category_id: string[];
  cnic_front: string[];
  cnic_back: string[];
  profile_image: string[];
  certificates_image: string[];
  payments: Payment[];
}

export interface FixerResponse {
  data: Fixer[];
  message: string;
  role: string;
  status: number;
}
