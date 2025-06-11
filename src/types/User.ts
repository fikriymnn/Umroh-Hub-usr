export interface User {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    phone_number?: number;
    address?: string;
    no_ktp?: number;
    image_url?: string;
    is_active?: boolean;
};

export interface Partner {
    name: string;
    email: string;
    password: string;
    phone_number: number;
    address: string;
    compamy_name: string;
    website: string;
    nib: string;
    npwp: string;
    siup: string;
    siuppiu: string;
    akta: string;
    image_url: string;
    is_active: boolean;
    createdAt: string;
    updatedAt: string;
    package_umrohs: [
        {
            id: number;
            id_mitra: number;
            id_location_departure: number;
            id_category_departure: number;
            package_name: string;
            description: string;
            date_departure: string;
            airline: string;
            duration: number;
            quota: number;
            quota_update: number;
            price: number;
            is_active: boolean;
            id_type_departure: number
            createdAt: string;
            updatedAt: string;
        }
    ]
}