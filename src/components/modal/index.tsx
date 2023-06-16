import { useState } from "react";
import myProduct from "../../utils/models";
import axios from "axios"

const productData: myProduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 1
  }
}

const Modal = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const prevent = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("")
    if (value.trim().length === 0) {
      setError("Please enter a value");
      return
    }
    productData.title = value;
    let res = await axios.post("https://fakestoreapi.com/products", productData);
  }

  // const changeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   setValue(e.target.value)
  // }

  return (
    <form onClick={prevent}>
      <input type="text"
        className="border py-2 px-4 w-100 outline-primary"
        placeholder="search..."
        onChange={e => setValue(e.target.value)}
      />
      {/* {error &&
        <p>error</p>
      } */}
      <button type="submit"
        className="py-2 px-4 border btn btn-warning"
      >add</button>
    </form>
  );
}

export default Modal