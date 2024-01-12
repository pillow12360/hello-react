import React, { useState, useEffect } from "react";

const WeatherInfo = () => {
  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather")
      .then((response) => {
        if (!response.ok) {
          return new Error("병신아 에러다");
        }
        return response.json();
      })
      .then((res) => {
        console.log(res);
      });
  }, []);
  return <div></div>;
};

export default WeatherInfo;
