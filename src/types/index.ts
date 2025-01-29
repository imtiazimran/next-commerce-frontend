export interface Product {
    id: string
    name: string
    category: string
    price: number
    description: string
    points: string
    images: string
    quantity: number
    rating: number
    reviews: number
  }


  
export interface FormData {
    id: string;
    name: string;
    category: string;
    price: string;
    shortDescription: string;
    description: string;
    points: string;
    images: string;
    quantity: string;
    rating: string;
    reviews: string;
}

export interface ApiResponse {
    message?: string;
}