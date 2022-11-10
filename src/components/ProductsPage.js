import Pagination from "./Pagination";
import ProductsTable from "./ProductsTable";
import {useState} from 'react';

function ProductsPage(props) {
  const products = props.products;
  const rowsPerPage = 10;
  const numOfPages = Math.ceil(products.size / rowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <h2>Our Products</h2>
      <ProductsTable 
        products={props.products}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
      />
      <Pagination 
        numOfPages={numOfPages} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default ProductsPage;