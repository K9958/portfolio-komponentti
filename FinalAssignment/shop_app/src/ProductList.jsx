import Product from "./Product";

const ProductList = () => {

  // dummy data
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      description: "This is a product.",
      src: "https://ic.jimms.fi/product/2/3/423626-ig800gg.jpg"
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      description: "This is another product.",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      description: "This is yet another product.",
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      description: "This is yet another product.",
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
      description: "This is yet another product.",
    },
    {
      id: 6,
      name: "Product 6",
      price: 600,
      description: "This is yet another product.",
    },
    {
      id: 7,
      name: "Product 7",
      price: 700,
      description: "This is yet another product.",
    },
    {
      id: 8,
      name: "Product 8",
      price: 800,
      description: "This is yet another product.",
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product 
        key={product.id} 
        product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;