import { useState, useRef } from 'react';

function AddToCartForm(props) { 
  const [amount, setAmount] = useState('');
  const amountInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    props.addToCart(props.id, Number(amount));
    setAmount('');
    amountInput.current.focus();
  }

  function handleChange(e) {
    setAmount(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="amount">Amount:</label>
      <input 
        type="number"
        id="amount"
        min="1"
        value={amount}
        onChange={handleChange}
        required
        ref={amountInput}
      />
      <button>Add to Cart</button>
    </form>
  );
}

export default AddToCartForm;