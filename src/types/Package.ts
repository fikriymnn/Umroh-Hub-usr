import { Partners } from "./Partners";
import { Review } from "./Review";

export interface HotelFacility {
    id: number;
    id_hotel: number;
    description: string;
    is_active: boolean | null;
    createdAt: string;
    updatedAt: string;
}
  
export interface MasterHotel {
    id: number;
    id_mitra: number;
    is_active: boolean;
    hotel_name: string;
    hotel_type: string;
    address: string;
    room_type: string;
    createdAt: string;
    updatedAt: string;
    hotel_facilities: HotelFacility[];
  }
  
  export interface PackageHotel {
    id: number;
    id_package: number;
    id_hotel: number;
    description: string;
    is_active: boolean | null;
    createdAt: string;
    updatedAt: string;
    master_hotel: MasterHotel;
  }
  
  export interface PackageFacility {
    id: number;
    id_package: number;
    description: string;
    is_active: boolean | null;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface DetailActivity {
    id: number;
    id_schedule: number;
    note: string;
    activity: string;
    time: string;
    is_active: boolean | null;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface PackageSchedule {
    id: number;
    id_package: number;
    title: string;
    is_active: boolean | null;
    image_url: string;
    createdAt: string;
    updatedAt: string;
    detail_activities: DetailActivity[];
  }
  
  export interface MasterTypeDeparture {
    id: number;
    type_name: string;
    is_active: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface MasterCategoryDeparture {
    id: number;
    category_name: string;
    is_active: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface MasterLocationDeparture {
    id: number;
    location_name: string;
    is_active: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Package {
    id: number;
    id_mitra: number;
    id_location_departure: number;
    id_category_departure: number;
    package_name: string;
    description: string;
    date_departure: string | Date;
    airline: string;
    duration: number;
    quota: number;
    quota_update: number;
    rating: number;
    price: number;
    is_active: boolean;
    jamaah_requirements: string;
    id_type_departure: number;
    createdAt: string;
    updatedAt: string;
    Mitra: Partners;
    master_type_departure: MasterTypeDeparture;
    master_category_departure: MasterCategoryDeparture;
    master_location_departure: MasterLocationDeparture;
    package_hotels: PackageHotel[];
    package_facilities: PackageFacility[];
    package_schedules: PackageSchedule[];
    reviews: Review[];
  }
  