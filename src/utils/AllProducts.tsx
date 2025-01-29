
const AllProducts = async () => {
    const response = await fetch("http://localhost:5000/data")
    const products = await response.json()
    return products
};

export default AllProducts;