import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function CartRow(props) {
  return (
    <tr>
      <td><Link to={`/products/${props.id}`}>{props.title}</Link></td>
      <td>${props.price.toLocaleString()}</td>
      <td>{props.amount}</td>
      <td>${(props.amount * props.price).toLocaleString()}</td>
      <td>
        <Button 
          variant="danger"
          onClick={() => props.deleteFromCart(props.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default CartRow;