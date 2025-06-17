import { User } from "./User";

export interface review_images {
    id: number;
    id_review: number;
    image_url: string;
    is_active: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Review {
    id: number;
    id_package: number;
    id_order: number;
    id_user: number;
    description: string;
    rating: number;
    is_active: boolean;
    createdAt: string;
    updatedAt: string;
    review_images: review_images[];
    User: User;
}