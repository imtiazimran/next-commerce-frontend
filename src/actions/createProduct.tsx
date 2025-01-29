"use server";
import { Product } from "@/types";
const createProduct = async ({data}: { data: Product }) => {
    const response = await fetch("http://localhost:5000/data",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    } )

    const products = await response.json()

    return products
};

export default createProduct;