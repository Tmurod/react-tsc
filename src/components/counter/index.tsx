import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    const [option, setOption] = useState("1");

    function change(e: any) {
        setOption(e.target.value)
    }

    function color() {
        if (count % 2 === 0) return "bg-success"
        else return "bg-danger"
    }

    return (
        <div className="d-flex flex-column">
            {/* <div className={color()}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt consequatur corrupti officia quo labore facere maxime suscipit nostrum! Nihil odit ullam enim reprehenderit pariatur, excepturi labore veritatis consequuntur iure dicta.
            </div> */}
            {
                option === "1" ? <h1>default count: {option}</h1> : <h1>count is: {option}</h1>
            }
            <select className="m-5" onChange={change}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <h1>
                count: {count}
            </h1>
            <div className="btns p-5 d-flex gap-5">
                <button className="border rounded btn bg-success" onClick={() => setCount(count + +option)}>add</button>
                <button className="border rounded btn bg-danger" onClick={() => setCount(count - +option)}>remove</button>
            </div>
        </div>
    );
}

export default Counter;