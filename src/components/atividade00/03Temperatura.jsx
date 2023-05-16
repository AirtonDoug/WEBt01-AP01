import React from 'react'


export default function Temperatura() {
    const celsiusParaFahrenheit = (T) => T*1.8 + 32;
    const fahrenheitParaCelsius = (T) => (T-32) / 1.8;
    const converteKelvin = (T) => {
        return(
            {Fahrenheit: (T-273.15)*9/5+32,
             Celsius: (T-273.15)
            }
        )
    }


  return (
    <div>
        <h1>32 Celsius para Fahrenheit = {celsiusParaFahrenheit(32).toFixed(1)}</h1>
        <h1>80 Fahrenheit para Celsius = {fahrenheitParaCelsius(80).toFixed(1)}</h1>
        <h1>400 Kelvin para Celsius ={converteKelvin(400).Celsius.toFixed(1)}</h1>
        <h1>400 Kelvin para Fahrenheit ={converteKelvin(400).Fahrenheit.toFixed(1)}</h1>
    </div>
  )
}
