import React, { useState, useEffect } from "react";

const WeatherInfo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_key = "d7dc376b75e14bfa06b6123f1693a34a";

    const url = `http://api.openweathermap.org/geo/1.0/zip?zip=E14,GB&appid=${API_key}`;

    console.log(url);

    fetch(
      "https://api.openweathermap.org/geo/1.0/zip?zip=E14,GB&appid=d7dc376b75e14bfa06b6123f1693a34a"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("네트워크 응답이 올바르지 않습니다.");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>날씨 정보</h2>
      {/* 날씨 데이터에 따른 내용 렌더링 */}
      <p>{weatherData?.name}</p>
      {/* 기타 날씨 정보 렌더링 */}
    </div>
  );
};

export default WeatherInfo;
