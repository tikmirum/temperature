import { useState } from 'react';

import * as Styled from './styles';

export const Temperature = () => {
  const [temperatureValue, setTemperatureValue] = useState(0);
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
