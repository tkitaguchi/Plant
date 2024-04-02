export default function Card({ title, imageSrc, originalPrice, salePrice, isOnSale, isInStock }) {
    return (
      <div className={`product-card ${isOnSale ? 'on-sale' : ''}`}>
        {isOnSale && <div className="sale-label">SALE</div>}
        {isInStock && <div className="stock-label">BACK IN STOCK</div>}
        <img src={imageSrc} alt={title} className="product-image" />
        <h2 className="product-title">{title}</h2>
        <div className="product-pricing">
          {isOnSale ? (
            <>
              <span className="original-price">{originalPrice}</span>
              <span className="sale-price">{salePrice}</span>
            </>
          ) : (
            <span className="product-price">{originalPrice}</span>
          )}
        </div>
          <button type="button" className="add-to-cart-btn">
            ADD TO CART
          </button>
        
      </div>
    );
  }
  