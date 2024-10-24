import Variable from "../Variable/variable";
import "./Temperature.css";
import { useState , useEffect } from "react";

function Temperature() {
  const [celsius, setCelsius] = useState(25);
  const [fahrenheit, setFahrenheit] = useState(77);
  const [kelvin, setKelvin] = useState(298.15);
  
  // แปลงค่า C ไปเป็น F และ K
  useEffect(() => {
    setFahrenheit((celsius * 9) / 5 + 32);
    setKelvin(celsius + 273.15);
  }, [celsius]);

  // แปลงค่า F ไปเป็น C และ K
  useEffect(() => {
    setCelsius(((fahrenheit - 32) * 5) / 9);
    setKelvin(((fahrenheit - 32) * 5) / 9 + 273.15);
  }, [fahrenheit]);

  // แปลงค่า K ไปเป็น C และ F
  useEffect(() => {
    setCelsius(kelvin - 273.15);
    setFahrenheit(((kelvin - 273.15) * 9) / 5 + 32);
  }, [kelvin]);

  return (
    <div className="temperature-container">
      <h3 className="temperature-title">Temperature</h3>
      <h3 className="temperature-display">
        <span className="badge bg-primary">{celsius.toFixed(2)}C </span>
        <span className="badge bg-primary">{fahrenheit.toFixed(2)}F </span>
        <span className="badge bg-primary">{kelvin.toFixed(2)}K</span>
      </h3>
      <div className="temperature-variables">
        <Variable name="Celsius" value={celsius} setValue={setCelsius} />
        <Variable name="Fahrenheit" value={fahrenheit} setValue={setFahrenheit} />
        <Variable name="Kelvin" value={kelvin} setValue={setKelvin} />
      </div>
    </div>
  );
}

export default Temperature;
