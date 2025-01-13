export interface SliderImage {
    slider_id: string;
    slider_image: string;
}

export interface SliderImageResponse {
    data: SliderImage[];
    message: string;
    role: string;
    status: number;
}