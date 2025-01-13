export interface SliderImage {
    slider_id: string;
    slider_image: string;
}

export interface SliderImageImage {
    data: SliderImage[];
    message: string;
    role: string;
    status: number;
}