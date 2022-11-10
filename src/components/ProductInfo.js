function ProductInfo(props) {
  const product = props.product;

  return (
    <div>
      <h2>{product.title}</h2>
      <figure>
        <img src={product.thumbnail} alt={product.title} />
        <figcaption>
          {product.description}
        </figcaption>
      </figure>
      <p>Price: ${product.price.toLocaleString()}</p>
    </div>    
  );
}

export default ProductInfo;