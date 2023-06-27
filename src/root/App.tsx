import { useState, useEffect } from "react";
import Product from "../components/product";
import axios from "axios";
import Modal from "../components/modal";

function App() {
  const [data, setData] = useState([]);

  const datApi = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }

  useEffect(() => {
    datApi()
  }, []);

  return (
    <div className="container rounded p-5 d-flex justify-content-center text-center flex-column gap-3">
      <Modal  />
      {
        data.map(val => <Product product={val} key={val} />)
      }
    </div>
  );
}

export default App;
