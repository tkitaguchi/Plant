import Card from './components/Card';

export default function App() {


  return (
    <div className="App">     
      <Card 
      type="" 
      title = "Monstera" 
      imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQ2dt-Qqggt-P7ko2B_hfarG5-SnJiwBW6tIYvpo-ptJdEUtn" 
      originalPrice="$60" 
      />
      <Card 
      type="isOnSale" 
      title = "Monstera" 
      imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQ2dt-Qqggt-P7ko2B_hfarG5-SnJiwBW6tIYvpo-ptJdEUtn" 
      originalPrice="$60" 
      salePrice="$55" 
      />
      <Card
      type="isBackInStock"
      title="Monstera"
      imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQ2dt-Qqggt-P7ko2B_hfarG5-SnJiwBW6tIYvpo-ptJdEUtn" 
      originalPrice="$60"
      />
    </div>
  );
}
  
  
  
