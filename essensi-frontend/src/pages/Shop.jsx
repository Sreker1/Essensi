import { useState, useEffect } from 'react';
import axios from 'axios';

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Shop;
