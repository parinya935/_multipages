import Variable from "../Variable/variable";
import "./Add.css";
import { useState, useEffect } from "react";

function Add({ aValue, bValue }) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(() => {
    setA(aValue || 0);
    setB(bValue || 0);
  }, [aValue, bValue]);

  return (
    <div className="Add-container">
      <h3 className="Add-title">Add</h3>
      <h2 className="Add-display">
        <span className="badge bg-primary">A={a}</span>
        <span className="badge bg-secondary">A + B = {a + b}</span>
        <span className="badge bg-success">B={b}</span>
      </h2>
      <div className="Add-variables">
        <Variable type="int" name="A" value={a} setValue={setA} />
        <Variable type="int" name="B" value={b} setValue={setB} />
      </div>
    </div>
  );
}

export default Add;
