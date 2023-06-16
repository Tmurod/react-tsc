import { useState } from "react";
import myProduct from "../../utils/models";

interface myProductProps {
  product: myProduct
}

const Product = ({ product }: myProductProps) => {
  const [details, setDetails] = useState(false);

  const btnClass = details ? "btn btn-danger" : "btn btn-warning";

  return (
    <div className="border p-3 d-flex flex-column align-items-center gap-3">
      <img src={product.image} alt={product.description} className="w-25" />
      <h2>
        {product.title}
      </h2>
      <h3>
        product rate: {product.price}
      </h3>
      <button
        className={btnClass}
        onClick={() => setDetails(prev => !prev)}>
        {details ? "hide info" : "show info"}
      </button>
      {details &&
        <p>
          {product.description}
        </p>}
    </div >
  );
}

export default Product;