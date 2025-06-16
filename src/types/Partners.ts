import { Package } from "./Package";

  
  export interface Partners {
    id: number;
    name: string;
    email: string;
    password: string;
    phone_number: string;
    address: string;
    company_name: string;
    website: string;
    nib: string;
    npwp: string;
    siup: string;
    siuppiu: string;
    akta: string;
    image_url: string;
    description: string;
    is_active: boolean;
    createdAt: string;
    updatedAt: string;
    package_umroh: Package[];
  }
  