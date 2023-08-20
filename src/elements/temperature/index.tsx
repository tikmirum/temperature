import { useEffect, useState } from 'react';

import * as Styled from './styles';

export const Temperature = () => {
  const [temperatureValue, setTemperatureValue] = useState(() => {
    const saved = localStorage.getItem('temp') || '0';
    const initialValue = JSON.parse(saved) as number;

    return initialValue || 0;
  });

  useEffect(() => {
    localStorage.setItem('temp', JSON.stringify(temperatureValue));
  }, [temperatureValue]);

  const isHot = temperatureValue >= 14;

  const increaseTemperature = () => {
    setTemperatureValue((prev) => prev + 1);
  };

  const decreaseTemperature = () => {
    setTemperatureValue((prev) => prev - 1);
  };

  return (
    <Styled.All>
      <Styled.Display $isHot={isHot}>{temperatureValue}°C</Styled.Display>
      <Styled.Row>
        <Styled.Button onClick={increaseTemperature}>+</Styled.Button>
        <Styled.Button onClick={decreaseTemperature}>-</Styled.Button>
      </Styled.Row>
    </Styled.All>
  );
};
