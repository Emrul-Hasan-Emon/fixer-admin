export interface Location {
    location_id: string;
    location_name: string;
}

export interface LocationResponse {
    data: Location[];
    message: string;
    role: string;
    status: number;
}