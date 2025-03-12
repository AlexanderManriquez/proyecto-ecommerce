import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import HeroSection from "./components/HeroSection.jsx";
import Navbar from "./components/Navbar.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const allProducts = response.data;
        // Selecciona 3 productos aleatorios
        const randomProducts = allProducts
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        setProducts(randomProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
