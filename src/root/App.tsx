import { useState, useEffect } from "react";
import Product from "../components/product";
import axios from "axios";
import Modal from "../components/modal";

function App() {
  const [data, setData] = useState([]);

  const datApi = async () => {
    const res = await axios("https://fakestoreapi.com/products");
    setData(res.data)
  }

  useEffect(() => {
    datApi()
  }, []);

  return (
    <div className="container rounded p-5 d-flex justify-content-center text-center flex-column gap-3">
      <Modal />
      {
        data.map(val => <Product product={val} key={val} />)
      }
    </div>
  );
}

export default App;
