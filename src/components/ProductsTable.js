import ProductRow from "./ProductRow";

function ProductsTable(props) {
  const products = props.products;
  const currentPage = props.currentPage;
  const rowsPerPage = props.rowsPerPage;
  const firstRowIndex = (currentPage - 1) * rowsPerPage;
  const lastRowIndex = currentPage * rowsPerPage;
  
  const rows = [...products.values()].slice(firstRowIndex, lastRowIndex)
    .map(product => (
    <ProductRow
      id={product.id}
      title={product.title}
      price={product.price}
      key={product.id}
    />
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );  
}

export default ProductsTable;