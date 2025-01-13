export interface Category {
    category_id: string;
    category_name: string;
}

export interface CategoryResponse {
    data: Category[];
    message: string;
    role: string;
    status: number;
}