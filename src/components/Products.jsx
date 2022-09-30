import React from "react";
import { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data &&
        data.map((product) => {
          return (
            <>
              <div className="card m-4 p-1">
                <p className="card-text">id: {product.id}</p>
                <h5 className="card-title">name: {product.name}</h5>
                <p className="card-text">price: {product.price}</p>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Products;
