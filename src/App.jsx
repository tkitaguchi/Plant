import React from 'react';
import './styles.css';
import Card from './components/Card';

export default function App() {
  const product = {
    title: "Monstera",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQ2dt-Qqggt-P7ko2B_hfarG5-SnJiwBW6tIYvpo-ptJdEUtn",
    originalPrice: "$80",
    salePrice: "$60",
    isOnSale: false,
    isInStock: true
  };

  return (
    <div className="App">
      <Card 
        title={product.title} 
        imageSrc={product.imageSrc}
        originalPrice={product.originalPrice}
        salePrice={product.salePrice}
        isOnSale={product.isOnSale}
        isInStock={product.isInStock}
      />
    </div>
  );
}
  
  
  
