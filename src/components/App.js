
import React from "react";

const App = () => {
  const [weather, setWeather] = React.useState({});
  const [style, setStyle] = React.useState();

  const [temperature, setTemperature] = React.useState(0);
  const [condition, setCondition] = React.useState("");

  const handleTempChange = (event) => {
    setTemperature(event.target.value);
  }

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  }

  const handleClick = (value, condition) => {
    const newWeather = {
      temperature: value,
      condition: condition
    }
    setWeather(newWeather);
    if(value > 20){
      setStyle("red");
    }else{
      setStyle("blue");
    }
  }
  return (
    <div>
        <input onChange={handleTempChange} type="number" placeholder="Temperature in °C" />
        <input onChange={handleConditionChange} type="text" placeholder="Condition" />
        <button onClick={() => handleClick(temperature, condition)}>Get Weather</button>
        <div>
          <p style={{color: style}}>Temperature: {weather.temperature} °C</p>
          <p>Condition: {weather.condition}</p>
        </div>
    </div>
  )
}

export default App
