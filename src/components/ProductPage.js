import AddToCartForm from "./AddToCartForm";
import ProductInfo from "./ProductInfo";
import {useParams} from 'react-router-dom';

function ProductPage(props) {
  let { id } = useParams();
  id = Number(id);
  const product = props.products.get(id);

  return (
    <div>
      <ProductInfo product={product} />
      <AddToCartForm addToCart={props.addToCart} id={id} />
    </div>
  )
}

export default ProductPage;