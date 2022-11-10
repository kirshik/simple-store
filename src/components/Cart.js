import CartRow from "./CartRow";

function Cart(props) {
  const products = props.products;
  const cart = props.cart;
  let totalPrice = 0;
  const rows = [...cart.entries()].map(([id, amount]) => {
    const product = products.get(id);
    totalPrice += amount * product.price;

    return (
      <CartRow
        id={id}
        title={product.title}
        price={product.price}
        amount={amount}
        deleteFromCart={props.deleteFromCart}
        key={id}
      />
    )
  });

  return (
    <div>
      <h2>Your shopping cart</h2>
      {
        rows.length === 0 ? <span>No products in the cart</span> :
          <>
            <table class="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </table>
            <p><strong>Total price:</strong>${totalPrice.toLocaleString()}</p>
          </>
      }
    </div>
  )
}

export default Cart;