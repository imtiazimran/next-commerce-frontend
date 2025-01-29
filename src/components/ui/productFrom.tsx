"use client"

import createProduct from '@/actions/createProduct';
import AllProducts from '@/utils/AllProducts';
import { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    category: '',
    price: 0,
    shortDescription: '',
    description: '',
    points: '',
    images: '',
    quantity: 0,
    rating: 0,
    reviews: 0
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allProducts = await AllProducts();
    console.log(allProducts);
    try {
      // const response = await fetch('/api/products', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // const result = await response.json();
      const res = await createProduct({ data: { ...formData, id: allProducts.length + 1 } });
      console.log(res);
      setMessage('Product added successfully!');
    } catch (error) {
        console.log(error);
      setMessage('Error submitting product');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-md">
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border p-2 rounded" required />
      <select name="category" value={formData.category} onChange={handleChange} className="border p-2 rounded" required>
        <option value="">Select Category</option>
        <option value="Audio">Audio</option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
        <option value="Accessories">Accessories</option>
      </select>
      <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="border p-2 rounded" required />
      <textarea name="shortDescription" placeholder="Short Description" value={formData.shortDescription} onChange={handleChange} className="border p-2 rounded" required></textarea>
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="border p-2 rounded" required></textarea>
      <input type="text" name="points" placeholder="Points (comma separated)" value={formData.points} onChange={handleChange} className="border p-2 rounded" required />
      <input type="text" name="images" placeholder="Image URLs (comma separated)" value={formData.images} onChange={handleChange} className="border p-2 rounded" required />
      <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} className="border p-2 rounded" required />
      <input type="number" step="0.1" name="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} className="border p-2 rounded" required />
      <input type="number" name="reviews" placeholder="Reviews" value={formData.reviews} onChange={handleChange} className="border p-2 rounded" required />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      {message && <p className="text-green-500">{message}</p>}
    </form>
  );
};

export default ProductForm;
