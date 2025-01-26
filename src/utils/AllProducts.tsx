export interface Product {
    id: number
    name: string
    category: string
    price: number
    description: string
    image: string
    quantity: number
    rating: number
    reviews: number
  }

const AllProducts = async () => {
    const response = await fetch("http://localhost:5000/products")
    const products = await response.json()
    return products
};

export default AllProducts;