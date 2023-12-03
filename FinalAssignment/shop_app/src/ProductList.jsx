import Product from "./Product";

const ProductList = ({ products }) => {

  return (
    <div className="product-container container">
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;