import styled from "styled-components";


const ProductCard = styled.div`
  position: relative;
  max-width: 300px;
  border-radius: 20px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
`;

const ProductTitle = styled.h2`
  font-size: 24px;
  color: #333333;
  margin-left: 20px;
  margin-bottom: 0;
`;

const ProductPrice = styled.div`
  font-size: 20px;
  color: #666666;
  margin-left: 20px;
`;

const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  background-color: #006400;
  color: white;
  border: none;
  border-radius: 5px;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const SaleLabel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ff4500;
  color: white;
  padding: 5px;
  font-size: 14px;
  font-weight: bold;
  z-index: 1;
`;

const StockLabel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #008000;
  color: white;
  padding: 5px;
  font-size: 14px;
  font-weight: bold;
  z-index: 1;
`;

const OriginalPrice = styled.span`
    font-size: 20px;
    color: #777;
    text-decoration: line-through;
    margin-left: 20px;
`;

const SalePrice = styled.span`
    font-size: 20px;
    color: #ff4500;
    font-weight: bold;
`;

  export default function Card({ type, title, imageSrc, originalPrice, salePrice }) {
    return (
      <ProductCard className={`product-card ${type === "isOnSale" ? 'sale' : ''} ${type === "isBackInStock" ? 'in-stock' : ''}`}>
        {type === "isOnSale" && <SaleLabel className="sale-label">SALE</SaleLabel>}
        {type === "isBackInStock" && <StockLabel className="stock-label">BACK IN STOCK</StockLabel>}
        <ProductImage src={imageSrc} alt={title} className="product-image" />
        <ProductTitle className="product-title">{title}</ProductTitle>
        <div className="product-price">
          {type === "isOnSale" ? (
            <>
            <OriginalPrice>{originalPrice}</OriginalPrice>
            <space> </space>
            <SalePrice>{salePrice}</SalePrice>

            </>
          ) : (
            <>
            <ProductPrice>{originalPrice}</ProductPrice>
            <AddToCartButton type="button" className="add-to-cart-btn">
            ADD TO CART
            </AddToCartButton>
            </>
          )}
        </div>
        {type === "isOnSale" && (
          <AddToCartButton type="button" className="add-to-cart-btn">
            ADD TO CART
          </AddToCartButton>
        )}
      </ProductCard>
    );
  }
  